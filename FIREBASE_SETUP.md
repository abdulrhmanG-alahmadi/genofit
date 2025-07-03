# Firebase Setup Guide for GenoFit

This guide will help you set up Firebase for the GenoFit website to store subscription data.

## 🔥 Firebase Configuration

The Firebase configuration is already set up in `src/lib/firebase.ts` with your provided credentials:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyCPWh9ARIyViIENSiwUQELJqDykXYLGT3o",
  authDomain: "genofit-5f83f.firebaseapp.com",
  projectId: "genofit-5f83f",
  storageBucket: "genofit-5f83f.firebasestorage.app",
  messagingSenderId: "402204555782",
  appId: "1:402204555782:web:4cb71f56c321180e682187",
  measurementId: "G-02RNS4YBNB"
};
```

## 📊 Database Structure

### Collection: `subscriptions`

Each subscription document contains:

```typescript
{
  email: string,           // Customer email
  phone: string,           // Customer phone number
  fullName: string,        // Customer full name
  gender: string,          // "male" or "female"
  age: number,            // Customer age
  id: string,             // National ID or Iqama number
  packageType: string,    // "fitness", "diet", "premium", or "general"
  trackNumber: number,    // Auto-incrementing track number (starts at 1)
  createdAt: Timestamp,   // When the subscription was created
  status: string         // "pending", "confirmed", "processing", or "completed"
}
```

## 🚀 Firebase Console Setup

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `genofit-5f83f`
3. **Set up Firestore Database**:
   - Go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select your preferred location (choose closest to Saudi Arabia)

## 🔐 Security Rules

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to subscriptions collection
    match /subscriptions/{document} {
      allow read, write: if true; // Change this for production security
    }
  }
}
```

For production, consider more restrictive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /subscriptions/{document} {
      // Allow anyone to create subscriptions
      allow create: if true;
      // Only allow authenticated admin users to read/update
      allow read, update, delete: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## 📱 Website Features

### Subscription Form
- Triggered when users click "Subscribe Now" on any package
- Collects: Full Name, Email, Phone, Gender, Age, ID Number
- Validates Saudi phone numbers and email formats
- Stores data in Firebase with auto-incrementing track numbers

### Admin Dashboard
- Available at `/admin`
- Shows all subscriptions with statistics
- Real-time data from Firebase
- Displays track numbers, customer info, and status

## 🧪 Testing the Integration

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test subscription form**:
   - Go to http://localhost:3000
   - Click any "Subscribe Now" button
   - Fill out the form with test data
   - Submit and verify success message

3. **Check Firebase Console**:
   - Go to Firestore Database
   - Look for `subscriptions` collection
   - Verify your test data appears

4. **Test admin dashboard**:
   - Go to http://localhost:3000/admin
   - Verify subscriptions are displayed
   - Check statistics are calculated correctly

## 📞 Sample Test Data

Use this for testing:

```
Full Name: أحمد محمد الرشيد
Email: test@example.com
Phone: 0501234567
Gender: Male
Age: 28
ID: 1234567890
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Permission denied" errors**:
   - Check Firestore security rules
   - Ensure test mode is enabled for development

2. **Firebase not connecting**:
   - Verify API keys in `src/lib/firebase.ts`
   - Check network connectivity
   - Ensure project ID is correct

3. **Track numbers not incrementing**:
   - Check console for errors
   - Verify Firestore write permissions
   - Test with a simple document creation

### Debug Steps:

1. Open browser developer tools
2. Check Console for error messages
3. Verify Network tab for Firebase requests
4. Check Firestore Console for data

## 🚀 Production Deployment

Before deploying to production:

1. **Update security rules** (see Security Rules section above)
2. **Set up Firebase Authentication** for admin access
3. **Configure environment variables** for sensitive data
4. **Enable Firebase Analytics** for user tracking
5. **Set up backup rules** for data protection

## 📊 Analytics Integration

Firebase Analytics is already configured and will automatically track:
- Page views
- User engagement
- Conversion events
- Custom events (form submissions)

View analytics in the Firebase Console under "Analytics".

## 🔒 Security Best Practices

1. **Never expose Firebase config** in public repositories
2. **Use environment variables** for sensitive configuration
3. **Implement proper authentication** for admin features
4. **Set up data validation rules** in Firestore
5. **Enable audit logging** for data access
6. **Regular security reviews** of access permissions

## 📈 Monitoring

Set up monitoring for:
- Form submission rates
- Error rates
- Database performance
- User engagement metrics

This can be done through Firebase Console under "Performance" and "Analytics". 