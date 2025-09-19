import React, { useState, useEffect } from 'react';
import AutomaticIrrigationPage from './components/AutomaticIrrigationPage';
import { useTranslation } from 'react-i18next';
import {
  Sprout,
  CloudRain,
  TrendingUp,
  Mic,
  MessageSquare,
  Camera,
  MapPin,
  Leaf,
  BarChart3,
  Sun,
  Droplets,
  DollarSign,
  Globe,
  Menu,
  X,
  ChevronRight,
  Users,
  Shield,
  Smartphone
} from 'lucide-react';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { i18n } = useTranslation();
  const { t } = useTranslation();


  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'soil-analysis': return <SoilAnalysisPage />;
      case 'crop-recommendation': return <CropRecommendationPage />;
      case 'market-insights': return <MarketInsightsPage />;
      case 'ai-assistant': return <AIAssistantPage />;
      case 'irrigation-system': return <AutomaticIrrigationPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">KrishiAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => setCurrentPage('soil-analysis')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'soil-analysis' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.soilAnalysis')}
              </button>
              <button
                onClick={() => setCurrentPage('crop-recommendation')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'crop-recommendation' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.cropGuide')}
              </button>
              <button
                onClick={() => setCurrentPage('market-insights')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'market-insights' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.marketInsights')}
              </button>

              <button
                onClick={() => setCurrentPage('irrigation-system')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'irrigation-system' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.irrigationSystem')}
              </button>
              <button
                onClick={() => setCurrentPage('ai-assistant')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === 'ai-assistant' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {t('nav.aiAssistant')}
              </button>

            </div>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <select
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                {[`${t('nav.home')}`, `${t('nav.soilAnalysis')}`, `${t('nav.cropGuide')}`, `${t('nav.marketInsights')}`, `${t('nav.irrigationSystem')}`, `${t('nav.aiAssistant')}`].map(page => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === page ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600'
                      }`}
                  >
                    {page.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">KrishiAI</span>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering farmers with AI-driven agricultural insights for sustainable and profitable farming.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Soil Analysis</li>
                <li>Crop Recommendations</li>
                <li>Market Insights</li>
                <li>Weather Forecasting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Training Resources</li>
                <li>Community Forum</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors">
                  <Smartphone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 KrishiAI. All rights reserved. Built for farmers, by technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// HomePage Component
const HomePage = ({ setCurrentPage }) => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Smart Soil Analysis",
      description: "Real-time soil property analysis using satellite data and IoT sensors",
      action: () => setCurrentPage('soil-analysis')
    },
    {
      icon: <Sprout className="h-8 w-8 text-blue-600" />,
      title: "Crop Recommendations",
      description: "AI-powered crop suggestions based on your soil, weather, and market conditions",
      action: () => setCurrentPage('crop-recommendation')
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Market Insights",
      description: "Live market prices and demand forecasting to maximize your profits",
      action: () => setCurrentPage('market-insights')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
      title: "AI Assistant",
      description: "Chat with our multilingual AI assistant for personalized farming guidance",
      action: () => setCurrentPage('ai-assistant')
    }
  ];

  const stats = [
    { label: "Farmers Helped", value: "50,000+", icon: <Users className="h-6 w-6" /> },
    { label: "Crop Varieties", value: "200+", icon: <Sprout className="h-6 w-6" /> },
    { label: "Accuracy Rate", value: "95%", icon: <Shield className="h-6 w-6" /> },
    { label: "Languages", value: "12", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <h1>{t('hero.title')} <span>{t('hero.titleHighlight')}</span></h1>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentPage('ai-assistant')}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>{t('hero.startChat')}</span>
                </button>
                <button
                  onClick={() => setCurrentPage('soil-analysis')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
                >
                  {t('hero.analyzeSoil')}
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <Droplets className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                    <p className="text-sm opacity-90">Soil Moisture</p>
                    <p className="text-2xl font-bold">67%</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <Sun className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
                    <p className="text-sm opacity-90">pH Level</p>
                    <p className="text-2xl font-bold">6.8</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-200" />
                    <p className="text-sm opacity-90">Yield Forecast</p>
                    <p className="text-2xl font-bold">+23%</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-200" />
                    <p className="text-sm opacity-90">Profit Est.</p>
                    <p className="text-2xl font-bold">₹45k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with agricultural expertise to help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={feature.action}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers who are already using AI to increase their yields and profits.
          </p>
          <button
            onClick={() => setCurrentPage('ai-assistant')}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-flex items-center space-x-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Get Started Today</span>
          </button>
        </div>
      </section>
    </div>
  );
};

// Soil Analysis Page
const SoilAnalysisPage = () => {
  const [location, setLocation] = useState('');
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setAnalysisData({
        ph: 6.8,
        moisture: 67,
        nitrogen: 45,
        phosphorus: 32,
        potassium: 58,
        organicMatter: 3.2,
        recommendations: [
          "Soil pH is optimal for most crops",
          "Consider adding organic matter",
          "Phosphorus levels could be improved"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Soil Analysis</h1>
          <p className="text-xl text-gray-600">
            Get detailed insights about your soil conditions using satellite data and AI analysis
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Enter Your Location</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your farm location or coordinates"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Use GPS</span>
            </button>
            <button
              onClick={runAnalysis}
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Soil'}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {analysisData && (
          <div className="space-y-8">
            {/* Soil Metrics */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Soil Properties</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">{analysisData.ph}</div>
                  <div className="text-gray-600">pH Level</div>
                  <div className="text-sm text-gray-500 mt-1">Slightly Acidic</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">{analysisData.moisture}%</div>
                  <div className="text-gray-600">Moisture</div>
                  <div className="text-sm text-gray-500 mt-1">Good Level</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600">{analysisData.nitrogen}%</div>
                  <div className="text-gray-600">Nitrogen</div>
                  <div className="text-sm text-gray-500 mt-1">Moderate</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600">{analysisData.phosphorus}%</div>
                  <div className="text-gray-600">Phosphorus</div>
                  <div className="text-sm text-gray-500 mt-1">Low</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">{analysisData.potassium}%</div>
                  <div className="text-gray-600">Potassium</div>
                  <div className="text-sm text-gray-500 mt-1">Good Level</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">{analysisData.organicMatter}%</div>
                  <div className="text-gray-600">Organic Matter</div>
                  <div className="text-sm text-gray-500 mt-1">Moderate</div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">AI Recommendations</h2>
              <div className="space-y-4">
                {analysisData.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Crop Recommendation Page
const CropRecommendationPage = () => {
  const [selectedSeason, setSelectedSeason] = useState('kharif');
  const [farmSize, setFarmSize] = useState('');

  const recommendations = {
    kharif: [
      {
        name: "Rice",
        yield: "45 quintals/hectare",
        profit: "₹35,000",
        sustainability: "High",
        image: "🌾"
      },
      {
        name: "Cotton",
        yield: "18 quintals/hectare",
        profit: "₹42,000",
        sustainability: "Medium",
        image: "🌱"
      },
      {
        name: "Sugarcane",
        yield: "80 tonnes/hectare",
        profit: "₹55,000",
        sustainability: "Low",
        image: "🎋"
      }
    ],
    rabi: [
      {
        name: "Wheat",
        yield: "38 quintals/hectare",
        profit: "₹28,000",
        sustainability: "High",
        image: "🌾"
      },
      {
        name: "Mustard",
        yield: "12 quintals/hectare",
        profit: "₹25,000",
        sustainability: "High",
        image: "🌻"
      },
      {
        name: "Gram",
        yield: "15 quintals/hectare",
        profit: "₹22,000",
        sustainability: "Very High",
        image: "🫘"
      }
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crop Recommendations</h1>
          <p className="text-xl text-gray-600">
            AI-powered suggestions based on your soil, weather, and market conditions
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="kharif">Kharif (Monsoon)</option>
                <option value="rabi">Rabi (Winter)</option>
                <option value="zaid">Zaid (Summer)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size (Hectares)</label>
              <input
                type="number"
                placeholder="Enter farm size"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get Recommendations
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations[selectedSeason].map((crop, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{crop.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{crop.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Expected Yield</span>
                    <span className="font-semibold">{crop.yield}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-600">Profit Estimate</span>
                    <span className="font-semibold text-green-600">{crop.profit}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-600">Sustainability</span>
                    <span className={`font-semibold ${crop.sustainability === 'Very High' ? 'text-green-600' :
                        crop.sustainability === 'High' ? 'text-blue-600' :
                          crop.sustainability === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                      {crop.sustainability}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Select This Crop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Market Insights Page
const MarketInsightsPage = () => {
  const marketData = [
    { crop: "Rice", currentPrice: "₹2,100/quintal", change: "+5.2%", demand: "High" },
    { crop: "Wheat", currentPrice: "₹2,350/quintal", change: "-2.1%", demand: "Medium" },
    { crop: "Cotton", currentPrice: "₹6,200/quintal", change: "+8.7%", demand: "Very High" },
    { crop: "Sugarcane", currentPrice: "₹380/quintal", change: "+1.5%", demand: "Medium" }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Insights</h1>
          <p className="text-xl text-gray-600">
            Real-time market prices and demand forecasting for better decision making
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.crop}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{item.currentPrice}</p>
                  <p className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change} vs last week
                  </p>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                    item.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                  }`}>
                  {item.demand} Demand
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Trends Chart Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Price Trends (Last 30 Days)</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <p>Interactive price charts would be displayed here</p>
              <p className="text-sm">Connect to live market data APIs</p>
            </div>
          </div>
        </div>

        {/* Market Alerts */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Market Alerts & Predictions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800">Price Surge Alert</h4>
              <p className="text-green-700">Cotton prices expected to rise 12% in next 2 weeks due to export demand</p>
            </div>
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-800">Best Selling Time</h4>
              <p className="text-blue-700">Optimal time to sell wheat is in next 5-7 days before price dip</p>
            </div>
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-yellow-800">Supply Update</h4>
              <p className="text-yellow-700">Rice surplus expected in your region, consider alternative crops for next season</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// AI Assistant Page
const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hello! I\'m your AI farming assistant. You can ask me questions in your preferred language, send photos of your crops, or use voice commands. How can I help you today?'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    setMessages([...messages,
    { type: 'user', content: inputText },
    { type: 'ai', content: 'Based on your question, I recommend checking your soil pH levels and considering organic fertilizers. Would you like specific product recommendations for your region?' }
    ]);
    setInputText('');
  };

  const quickQuestions = [
    "What crops should I plant this season?",
    "How to treat yellow leaves on my plants?",
    "Current market prices for rice",
    "Best fertilizer for wheat crop"
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Assistant</h1>
          <p className="text-xl text-gray-600">
            Chat with our multilingual AI assistant for personalized farming guidance
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 p-6 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${message.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                    }`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Questions */}
          <div className="p-4 border-t bg-gray-50">
            <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(question)}
                  className="text-xs bg-white text-gray-700 px-3 py-2 rounded-full border hover:bg-gray-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t">
            {/* Desktop Layout */}
            <div className="hidden md:flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me anything about farming..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                onClick={() => setIsListening(!isListening)}
                className={`px-4 py-3 rounded-lg transition-colors ${isListening ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <Mic className="h-5 w-5" />
              </button>
              <button className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <Camera className="h-5 w-5" />
              </button>
              <button
                onClick={sendMessage}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Send
              </button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything about farming..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Options Button with Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
                    className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {showOptionsDropdown && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-300 rounded-lg shadow-lg py-2 min-w-[120px] z-10">
                      <button
                        onClick={() => {
                          setIsListening(!isListening);
                          setShowOptionsDropdown(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 ${isListening ? 'text-red-600' : 'text-gray-700'
                          }`}
                      >
                        <Mic className="h-4 w-4" />
                        <span>{isListening ? 'Stop' : 'Voice'}</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowOptionsDropdown(false);
                          // Handle camera action
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 text-gray-700"
                      >
                        <Camera className="h-4 w-4" />
                        <span>Camera</span>
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={sendMessage}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Text Below Buttons - Different for Mobile and Desktop */}
            <div className="mt-4 text-sm text-gray-500">
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Text</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Mic className="h-4 w-4" />
                    <span>Voice</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Image</span>
                  </span>
                </div>
                <span>Powered by AI • Supports 12 languages</span>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden text-center">
                <div className="flex items-center justify-center space-x-6 mb-2">
                  <span className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Text</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Mic className="h-4 w-4" />
                    <span>Voice</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Image</span>
                  </span>
                </div>
                <div className="text-center">
                  <span>Supports 12 languages</span>
                </div>
                <div className="text-right mt-2">
                  <span>Powered by AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multilingual Support</h3>
            <p className="text-gray-600">Chat in Hindi, English, Bengali, Telugu and more</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Image Recognition</h3>
            <p className="text-gray-600">Send photos for crop disease detection</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <CloudRain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Offline Support</h3>
            <p className="text-gray-600">Works in low-connectivity areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App