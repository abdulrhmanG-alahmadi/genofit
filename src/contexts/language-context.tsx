'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.how-it-works': 'How it works',
    'nav.packages': 'Packages',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.get-started': 'Get Started',

    // Hero Section
    'hero.title': 'Elevate your athletic potential to a whole new level with GenoFit',
    'hero.subtitle': 'The first Saudi company for genetic testing for athletes. Discover your strength, enhance your performance, and achieve your goals.',
    'hero.banner1': 'Your genetic information at your fingertips with GenoFit.',
    'hero.banner2': 'GenoFit is your gateway to better health.',
    'hero.banner3': 'One minute... one sample... accurate results.',
    'hero.cta': 'Start Now',

    // About Section
    'about.title': 'About GenoFit',
    'about.subtitle': 'At GenoFit, we believe the future of sports begins within your genes.',
    'about.description': 'We are the first Saudi company to provide specialized genetic testing for athletes to analyze your current and potential fitness levels. Founded in December 2023 to deliver a personalized sports experience that makes a real difference.',
    'about.why-title': 'Why Choose GenoFit?',
    'about.feature1': 'Advanced Genetic Analysis',
    'about.feature2': 'Personalized Training Plans',
    'about.feature3': 'Expert Support',
    'about.learn-more': 'Learn More',

    // How It Works Section
    'how-it-works.title': 'How the Test Works',
    'how-it-works.step1': 'Get the Test',
    'how-it-works.step1-desc': 'Available through partnered outlets or certified points of sale.',
    'how-it-works.step2': 'Test Kit Contents',
    'how-it-works.step2-desc': 'Tube and swab with clear instructions and easy sampling steps.',
    'how-it-works.step3': 'Self-Testing',
    'how-it-works.step3-desc': 'Can be done anywhere (home, clinic, gym, or pharmacies).',
    'how-it-works.step4': 'Send the Sample',
    'how-it-works.step4-desc': 'Via collection points or delivery representative.',
    'how-it-works.step5': 'Sample Analysis',
    'how-it-works.step5-desc': 'Conducted in the lab with potential use of AI technologies.',
    'how-it-works.step6': 'Receive Results',
    'how-it-works.step6-desc': 'Through a dedicated platform or detailed manual report.',
    'how-it-works.step7': 'Consultations',
    'how-it-works.step7-desc': 'Genetic, athletic, and nutritional consultations with package subscriptions and regular notifications.',

    // Packages Section
    'packages.title': 'Our Packages',
    'packages.subtitle': 'Your athletic and health performance begins with a deeper understanding of your DNA.',
    'packages.fitness-name': 'GENO FITNESS',
    'packages.fitness-desc': 'Comprehensive genetic analysis with personalized training plans based on your DNA needs.',
    'packages.diet-name': 'GENO DIET',
    'packages.diet-desc': 'Personalized dietary plans tailored to your genetics to achieve your nutritional goals.',
    'packages.premium-name': 'GENO PREMIUM',
    'packages.premium-desc': 'The complete package for comprehensive analysis and personalized athletic and dietary plans.',
    'packages.subscribe': 'Subscribe Now',
    'packages.starting-at': 'Starting at',

    // Revolution Section
    'revolution.title': 'Not Just a Step — A Genetic Revolution',
    'revolution.subtitle': 'Genetic testing isn\'t just an extra step — it\'s a revolution in boosting your athletic performance and overall health. Through GenoFit, we can help you:',
    'revolution.benefit1': 'Uncover Your Physical Capabilities',
    'revolution.benefit1-desc': 'Discover your hidden physical abilities based on your genes.',
    'revolution.benefit2': 'Customize Training & Nutrition',
    'revolution.benefit2-desc': 'Get personalized training and nutrition plans designed specifically for your needs.',
    'revolution.benefit3': 'Prevent Injuries & Diseases',
    'revolution.benefit3-desc': 'Prevent injuries and chronic diseases through accurate understanding of your genes.',
    'revolution.benefit4': 'Achieve Goals Efficiently',
    'revolution.benefit4-desc': 'Achieve your athletic goals more efficiently and quickly.',
    'revolution.genes-key': 'Genes are the key to your health future, whether you\'re a professional athlete seeking peak performance or someone interested in a healthy, balanced life.',
    'revolution.cta': 'Discover How Your Genes Can Make the Difference!',

    // Motivational Banner
    'motivational.title': 'Your genetic information empowers you to make precise health decisions',
    'motivational.subtitle': 'Enhancing your quality of life and helping you reach your goals effortlessly, because prevention is better than cure.',
    'motivational.cta': 'Discover the Benefits of Genetic Testing',

    // Stats Section
    'stats.stat1': '95% of athletes who used genome technology noticed performance improvement within months',
    'stats.stat2': 'Save time and effort with one test for all your athletic needs',
    'stats.stat3': 'Your physical health starts with genetic analysis',
    'stats.stat4': 'Some DNA changes may increase the likelihood of certain diseases or affect athletic performance',

    // Final CTA
    'final-cta.title': 'Ready to discover your full potential?',
    'final-cta.subtitle': 'Don\'t let your genes remain a mystery. With GenoFit, you\'re one step away from athletic excellence.',
    'final-cta.cta': 'Start Your Journey Now',

    // Footer
    'footer.description': 'The first Saudi company specializing in genetic testing for athletes. Elevate your athletic potential with precision genetics.',
    'footer.follow-us': 'Follow us: Stay connected with our latest news and services through social media:',
    'footer.contact-info': 'Contact Information:',
    'footer.location': 'Location:',
    'footer.phone': 'Phone:',
    'footer.email': 'Email:',
    'footer.quick-links': 'Quick Links:',
    'footer.home': 'Home',
    'footer.packages': 'Packages',
    'footer.product-usage': 'Product Usage',
    'footer.privacy-policy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.return-policy': 'Return and Exchange Policy',
  },
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.how-it-works': 'كيف يعمل',
    'nav.packages': 'الباقات',
    'nav.about': 'عن جينو فت',
    'nav.contact': 'التواصل',
    'nav.get-started': 'ابدأ الآن',

    // Hero Section
    'hero.title': 'ارفع إمكانياتك الرياضية لمستوى جديد كليًا مع جينو فت',
    'hero.subtitle': 'أول شركة سعودية للاختبارات الجينية للرياضيين. اكتشف قوتك، طوّر أدائك، وحقق أهدافك.',
    'hero.banner1': 'معلوماتك الوراثية بين يديك مع جينو فت.',
    'hero.banner2': 'جينو فت وسيلتك لصحة أفضل.',
    'hero.banner3': 'دقيقة واحدة.. عينة واحدة.. نتائج دقيقة.',
    'hero.cta': 'ابدأ الآن',

    // About Section
    'about.title': 'عن جينو فت',
    'about.subtitle': 'في جينو فت، نؤمن أن المستقبل الرياضي يبدأ من داخل الجينات.',
    'about.description': 'نحن أول شركة سعودية تقدم اختبارات جينية متخصصة للرياضيين لتحليل مستويات اللياقة البدنية الحالية والمستقبلية. تأسسنا في ديسمبر 2023 لنقدم لك تجربة رياضية شخصية تُحدث الفارق.',
    'about.why-title': 'لماذا تختار جينو فت؟',
    'about.feature1': 'تحليل جيني متقدم',
    'about.feature2': 'المساعدة في وضع خطط تدريبية وغذائية مخصصة',
    'about.feature3': 'لتحقيق أهدافك الرياضية',
    'about.learn-more': 'تعرف على المزيد',

    // How It Works Section
    'how-it-works.title': 'كيف يتم الفحص',
    'how-it-works.step1': 'الحصول على الفحص',
    'how-it-works.step1-desc': 'عبر الجهة المستفيدة أو نقاط البيع المعتمدة.',
    'how-it-works.step2': 'محتويات الفحص',
    'how-it-works.step2-desc': 'أنبوب وعود مسح مع إرشادات واضحة وخطوات سهلة لأخذ العينة.',
    'how-it-works.step3': 'الفحص الذاتي',
    'how-it-works.step3-desc': 'يمكن إجراؤه في أي مكان (المنزل، العيادة، المركز الرياضي أو الصيدليات).',
    'how-it-works.step4': 'إرسال العينة',
    'how-it-works.step4-desc': 'عبر نقاط التجميع أو مندوب توصيل.',
    'how-it-works.step5': 'تحليل العينة',
    'how-it-works.step5-desc': 'في المختبر مع احتمالية استخدام تقنيات الذكاء الاصطناعي.',
    'how-it-works.step6': 'استلام النتائج',
    'how-it-works.step6-desc': 'عبر منصة خاصة أو تقرير يدوي مفصل.',
    'how-it-works.step7': 'الاستشارات',
    'how-it-works.step7-desc': 'جينية، رياضية، وغذائية مع اشتراك في باقات تتيح للعميل تلقي إشعارات دورية.',

    // Packages Section
    'packages.title': 'الباقات',
    'packages.subtitle': 'أداؤك الصحي والرياضي يبدأ بفهم أعمق لجيناتك.',
    'packages.fitness-name': 'GENO FITNESS',
    'packages.fitness-desc': 'ارتقِ بلياقتك مع باقة GENO FITNESS - السر في جيناتك. هذه الباقة مخصصة للرياضيين الذين يرغبون في تحسين أدائهم الرياضي من خلال تحليل جيني شامل.',
    'packages.diet-name': 'GENO DIET',
    'packages.diet-desc': 'جسدك المثالي يبدأ من جيناتك مع GENO DIET. إذا كنت تسعى لتحقيق أهداف غذائية بناءً على تركيبتك الجينية، فهذه الباقة مثالية لك.',
    'packages.premium-name': 'GENO PREMIUM',
    'packages.premium-desc': 'التجربة الشاملة لتفوق صحي ورياضي. الباقة الشاملة التي تجمع بين فوائد GENO FITNESS و GENO DIET، مما يجعلها الخيار الأمثل للحصول على رؤية متكاملة حول صحتك ولياقتك.',
    'packages.subscribe': 'اشترك الآن',
    'packages.starting-at': 'ابتداءً من',

    // Revolution Section
    'revolution.title': 'الفحص الجيني ليس مجرد خطوة إضافية، إنه ثورة في تحسين أدائك الرياضي وصحتك العامة',
    'revolution.subtitle': 'من خلال جينو فت، يمكننا مساعدتك على:',
    'revolution.benefit1': 'الكشف عن قدراتك الجسدية الكامنة',
    'revolution.benefit1-desc': 'الكشف عن قدراتك الجسدية الكامنة بناءً على جيناتك.',
    'revolution.benefit2': 'تخصيص خطط تدريبية وغذائية',
    'revolution.benefit2-desc': 'تخصيص خطط تدريبية وغذائية مصممة خصيصًا لاحتياجاتك.',
    'revolution.benefit3': 'الوقاية من الإصابات والأمراض المزمنة',
    'revolution.benefit3-desc': 'الوقاية من الإصابات والأمراض المزمنة من خلال فهم دقيق لجيناتك.',
    'revolution.benefit4': 'تحقيق أهدافك الرياضية',
    'revolution.benefit4-desc': 'تحقيق أهدافك الرياضية بكفاءة وسرعة أكبر.',
    'revolution.genes-key': 'الجينات هي مفتاح مستقبلك الصحي، سواء كنت رياضيًا محترفًا تسعى لتحقيق أعلى مستويات الأداء، أو فردًا مهتمًا بحياة صحية ومتوازنة.',
    'revolution.cta': 'اكتشف كيف يمكن لجيناتك أن تصنع الفرق!',

    // Motivational Banner
    'motivational.title': 'معلوماتك الوراثية وسيلتك لاتخاذ قرارات صحية دقيقة',
    'motivational.subtitle': 'ترفع من جودة حياتك وتوصلك لأهدافك بسهولة، فدرهم وقاية خيرٌ من قنطار علاج.',
    'motivational.cta': 'اكتشف فوائد الاختبار الجيني',

    // Stats Section
    'stats.stat1': '95% من الرياضيين الذين استخدموا تقنية الجينوم لاحظوا تحسينًا في أدائهم خلال أشهر قليلة',
    'stats.stat2': 'وفر الوقت والجهد مع اختبار واحد لكل احتياجاتك الرياضية',
    'stats.stat3': 'صحتك الجسدية تبدأ من تحليلاتك الجينية',
    'stats.stat4': 'بعض التغيرات في الحمض النووي قد تزيد من احتمالية الإصابة بأمراض معينة أو تؤثر على الأداء الرياضي',

    // Final CTA
    'final-cta.title': 'جاهز لتكتشف إمكانياتك؟',
    'final-cta.subtitle': 'لا تدع جيناتك تكون لغزًا بعد الآن. مع جينو فت، أنت على بُعد خطوة واحدة من التفوق الرياضي.',
    'final-cta.cta': 'ابدأ رحلتك الآن',

    // Footer
    'footer.description': 'أول شركة سعودية متخصصة في الاختبارات الجينية للرياضيين. ارفع إمكانياتك الرياضية مع علم الوراثة الدقيق.',
    'footer.follow-us': 'تابعنا: ابقَ على تواصل مع أحدث أخبارنا وخدماتنا عبر شبكات التواصل الاجتماعي:',
    'footer.contact-info': 'جهات الاتصال:',
    'footer.location': 'الموقع:',
    'footer.phone': 'الهاتف:',
    'footer.email': 'البريد الإلكتروني:',
    'footer.quick-links': 'الروابط:',
    'footer.home': 'الرئيسية',
    'footer.packages': 'الباقات',
    'footer.product-usage': 'استخدام المنتج',
    'footer.privacy-policy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.return-policy': 'سياسة الاستبدال والإرجاع',
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      // Save language to localStorage
      localStorage.setItem('language', language)
      
      // Update document direction and language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key
  }

  const value = {
    language,
    setLanguage,
    isRTL: language === 'ar',
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}