import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.soilAnalysis": "Soil Analysis",
      "nav.cropGuide": "Crop Guide",
      "nav.marketInsights": "Market Insights",
      "nav.aiAssistant": "AI Assistant",
      "nav.irrigationSystem": "Automatic Irrigation System",
      "nav.login": "Login",
      
      // Homepage Hero Section
      "hero.title": "Smart Farming with",
      "hero.titleHighlight": "AI Power",
      "hero.subtitle": "Get personalized crop recommendations, soil analysis, and market insights to increase your farm's productivity and profits.",
      "hero.startChat": "Start Chat",
      "hero.analyzeSoil": "Analyze Soil",
      
      // Stats Section
      "stats.farmersHelped": "Farmers Helped",
      "stats.cropVarieties": "Crop Varieties",
      "stats.accuracyRate": "Accuracy Rate",
      "stats.languages": "Languages",
      
      // Features Section
      "features.title": "Everything You Need for Smart Farming",
      "features.subtitle": "Our AI-powered platform combines cutting-edge technology with agricultural expertise to help you make informed decisions.",
      "features.soilAnalysis.title": "Smart Soil Analysis",
      "features.soilAnalysis.desc": "Real-time soil property analysis using satellite data and IoT sensors",
      "features.cropRecommendations.title": "Crop Recommendations",
      "features.cropRecommendations.desc": "AI-powered crop suggestions based on your soil, weather, and market conditions",
      "features.marketInsights.title": "Market Insights",
      "features.marketInsights.desc": "Live market prices and demand forecasting to maximize your profits",
      "features.aiAssistant.title": "AI Assistant",
      "features.aiAssistant.desc": "Chat with our multilingual AI assistant for personalized farming guidance",
      "features.learnMore": "Learn More",
      
      // CTA Section
      "cta.title": "Ready to Transform Your Farming?",
      "cta.subtitle": "Join thousands of farmers who are already using AI to increase their yields and profits.",
      "cta.getStarted": "Get Started Today",
      
      // Soil Analysis Page
      "soilAnalysis.title": "Soil Analysis",
      "soilAnalysis.subtitle": "Get detailed insights about your soil conditions using satellite data and AI analysis",
      "soilAnalysis.enterLocation": "Enter Your Location",
      "soilAnalysis.locationPlaceholder": "Enter your farm location or coordinates",
      "soilAnalysis.useGPS": "Use GPS",
      "soilAnalysis.analyzeSoil": "Analyze Soil",
      "soilAnalysis.analyzing": "Analyzing...",
      "soilAnalysis.soilProperties": "Soil Properties",
      "soilAnalysis.aiRecommendations": "AI Recommendations",
      "soilAnalysis.phLevel": "pH Level",
      "soilAnalysis.moisture": "Moisture",
      "soilAnalysis.nitrogen": "Nitrogen",
      "soilAnalysis.phosphorus": "Phosphorus",
      "soilAnalysis.potassium": "Potassium",
      "soilAnalysis.organicMatter": "Organic Matter",
      
      // Crop Recommendations Page
      "cropRec.title": "Crop Recommendations",
      "cropRec.subtitle": "AI-powered suggestions based on your soil, weather, and market conditions",
      "cropRec.season": "Season",
      "cropRec.farmSize": "Farm Size (Hectares)",
      "cropRec.farmSizePlaceholder": "Enter farm size",
      "cropRec.getRecommendations": "Get Recommendations",
      "cropRec.expectedYield": "Expected Yield",
      "cropRec.profitEstimate": "Profit Estimate",
      "cropRec.sustainability": "Sustainability",
      "cropRec.selectCrop": "Select This Crop",
      "cropRec.seasons.kharif": "Kharif (Monsoon)",
      "cropRec.seasons.rabi": "Rabi (Winter)",
      "cropRec.seasons.zaid": "Zaid (Summer)",
      
      // Market Insights Page
      "market.title": "Market Insights",
      "market.subtitle": "Real-time market prices and demand forecasting for better decision making",
      "market.priceVsLastWeek": "vs last week",
      "market.demand.high": "High Demand",
      "market.demand.medium": "Medium Demand",
      "market.demand.veryHigh": "Very High Demand",
      "market.priceTrends": "Price Trends (Last 30 Days)",
      "market.chartPlaceholder": "Interactive price charts would be displayed here",
      "market.connectLiveData": "Connect to live market data APIs",
      "market.alertsPredictions": "Market Alerts & Predictions",
      
      // AI Assistant Page
      "aiAssistant.title": "AI Assistant",
      "aiAssistant.subtitle": "Chat with our multilingual AI assistant for personalized farming guidance",
      "aiAssistant.welcomeMessage": "Hello! I'm your AI farming assistant. You can ask me questions in your preferred language, send photos of your crops, or use voice commands. How can I help you today?",
      "aiAssistant.placeholder": "Ask me anything about farming...",
      "aiAssistant.quickQuestions": "Quick questions:",
      "aiAssistant.send": "Send",
      "aiAssistant.text": "Text",
      "aiAssistant.voice": "Voice",
      "aiAssistant.image": "Image",
      "aiAssistant.poweredByAI": "Powered by AI",
      "aiAssistant.supportsLanguages": "Supports 12 languages",
      "aiAssistant.features.multilingual.title": "Multilingual Support",
      "aiAssistant.features.multilingual.desc": "Chat in Hindi, English, Bengali, Telugu and more",
      "aiAssistant.features.imageRecognition.title": "Image Recognition",
      "aiAssistant.features.imageRecognition.desc": "Send photos for crop disease detection",
      "aiAssistant.features.offlineSupport.title": "Offline Support",
      "aiAssistant.features.offlineSupport.desc": "Works in low-connectivity areas",
      
      // Irrigation System Page
      "irrigation.title": "Automatic Irrigation System",
      "irrigation.subtitle": "AI-powered smart irrigation for optimal water usage and crop health",
      "irrigation.totalZones": "Total Zones",
      "irrigation.activeZones": "Active Zones",
      "irrigation.waterSaved": "Water Saved",
      "irrigation.efficiency": "Efficiency",
      "irrigation.irrigationZones": "Irrigation Zones",
      "irrigation.manualMode": "Manual Mode",
      "irrigation.weatherConditions": "Weather Conditions",
      "irrigation.systemAlerts": "System Alerts",
      "irrigation.todaysSummary": "Today's Summary",
      "irrigation.waterUsage": "Water Usage",
      "irrigation.energyConsumed": "Energy Consumed",
      "irrigation.activeTime": "Active Time",
      "irrigation.costSavings": "Cost Savings",
      "irrigation.start": "Start",
      "irrigation.stop": "Stop",
      "irrigation.startIrrigation": "Start Irrigation",
      "irrigation.stopIrrigation": "Stop Irrigation",
      "irrigation.scheduleIrrigation": "Schedule Irrigation",
      
      // Login Page
      "login.welcomeBack": "Welcome Back",
      "login.createAccount": "Create Account",
      "login.signInSubtitle": "Sign in to your AgriAI account",
      "login.joinSubtitle": "Join thousands of farmers using AI-powered agriculture",
      "login.fullName": "Full Name",
      "login.email": "Email Address",
      "login.password": "Password",
      "login.confirmPassword": "Confirm Password",
      "login.fullNamePlaceholder": "Enter your full name",
      "login.emailPlaceholder": "Enter your email",
      "login.passwordPlaceholder": "Enter your password",
      "login.confirmPasswordPlaceholder": "Confirm your password",
      "login.signIn": "Sign In",
      "login.createAccountBtn": "Create Account",
      "login.alreadyHaveAccount": "Already have an account?",
      "login.dontHaveAccount": "Don't have an account?",
      "login.signUp": "Sign Up",
      "login.orContinueWith": "Or continue with",
      "login.continueWithGoogle": "Continue with Google",
      "login.continueWithFacebook": "Continue with Facebook",
      "login.termsPrivacy": "By continuing, you agree to our Terms of Service and Privacy Policy",
      
      // Footer
      "footer.tagline": "Empowering farmers with AI-driven agricultural insights for sustainable and profitable farming.",
      "footer.features": "Features",
      "footer.soilAnalysis": "Soil Analysis",
      "footer.cropRecommendations": "Crop Recommendations",
      "footer.marketInsights": "Market Insights",
      "footer.weatherForecasting": "Weather Forecasting",
      "footer.automaticIrrigation": "Automatic Irrigation",
      "footer.support": "Support",
      "footer.helpCenter": "Help Center",
      "footer.contactUs": "Contact Us",
      "footer.trainingResources": "Training Resources",
      "footer.communityForum": "Community Forum",
      "footer.connect": "Connect",
      "footer.copyright": "© 2025 AgriAI. All rights reserved. Built for farmers, by technology."
    }
  },
  hi: {
    translation: {
      // Navigation - Hindi placeholders (you'll replace these with actual translations)
      "nav.home": "होम",
      "nav.soilAnalysis": "मिट्टी विश्लेषण",
      "nav.cropGuide": "फसल गाइड",
      "nav.marketInsights": "बाजार अंतर्दृष्टि",
      "nav.aiAssistant": "AI सहायक",
      "nav.irrigationSystem": "स्वचालित सिंचाई प्रणाली",
      "nav.login": "लॉगिन",
      
      // Homepage Hero Section - Hindi placeholders
      "hero.title": "स्मार्ट खेती के साथ",
      "hero.titleHighlight": "AI शक्ति",
      "hero.subtitle": "अपनी खेत की उत्पादकता और मुनाफे को बढ़ाने के लिए व्यक्तिगत फसल सिफारिशें, मिट्टी विश्लेषण और बाजार अंतर्दृष्टि प्राप्त करें।",
      "hero.startChat": "चैट शुरू करें",
      "hero.analyzeSoil": "मिट्टी का विश्लेषण करें",
      
      // Stats Section - Hindi placeholders
      "stats.farmersHelped": "किसानों की सहायता की",
      "stats.cropVarieties": "फसल किस्में",
      "stats.accuracyRate": "सटीकता दर",
      "stats.languages": "भाषाएं",
      
      // Add more Hindi translations as needed...
      // For brevity, I'm showing the pattern. You'll need to translate all keys.
      
      // Placeholder keys for remaining sections
      "features.title": "[Hindi] Everything You Need for Smart Farming",
      "features.subtitle": "[Hindi] Our AI-powered platform combines cutting-edge technology...",
      "soilAnalysis.title": "[Hindi] Soil Analysis",
      "cropRec.title": "[Hindi] Crop Recommendations",
      "market.title": "[Hindi] Market Insights",
      "aiAssistant.title": "[Hindi] AI Assistant",
      "irrigation.title": "[Hindi] Automatic Irrigation System",
      "login.welcomeBack": "[Hindi] Welcome Back"
      
      // Add all other keys with [Hindi] prefix as placeholders
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  });
