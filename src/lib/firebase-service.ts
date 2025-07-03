import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

export interface SubscriptionData {
  email: string;
  phone: string;
  fullName: string;
  gender: string;
  age: number;
  id: string; // National ID or similar
  packageType: string; // Which package they subscribed to
}

export interface SubscriptionRecord extends SubscriptionData {
  trackNumber: number;
  createdAt: Timestamp;
  status: 'pending' | 'confirmed' | 'processing' | 'completed';
}

const COLLECTION_NAME = 'subscriptions';

// Get the next track number
export async function getNextTrackNumber(): Promise<number> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('trackNumber', 'desc'),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return 1; // First subscription
    }
    
    const lastDoc = querySnapshot.docs[0];
    const lastTrackNumber = lastDoc.data().trackNumber as number;
    return lastTrackNumber + 1;
  } catch (error) {
    console.error('Error getting next track number:', error);
    // Fallback to timestamp-based number if there's an error
    return Date.now() % 1000000;
  }
}

// Create a new subscription
export async function createSubscription(data: SubscriptionData): Promise<string> {
  try {
    const trackNumber = await getNextTrackNumber();
    
    const subscriptionRecord: Omit<SubscriptionRecord, 'id'> = {
      ...data,
      trackNumber,
      createdAt: serverTimestamp() as Timestamp,
      status: 'pending'
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), subscriptionRecord);
    
    console.log('Subscription created with ID:', docRef.id);
    console.log('Track Number:', trackNumber);
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw new Error('Failed to create subscription. Please try again.');
  }
}

// Get all subscriptions (for admin use)
export async function getAllSubscriptions(): Promise<SubscriptionRecord[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as SubscriptionRecord));
  } catch (error) {
    console.error('Error getting subscriptions:', error);
    throw new Error('Failed to fetch subscriptions');
  }
} 