import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Droplets, 
  Thermometer, 
  Cloud, 
  Activity, 
  Power, 
  Settings, 
  Calendar, 
  MapPin,
  AlertTriangle,
  CheckCircle,
  PlayCircle,
  Pause,
  BarChart3,
  Wifi,
  Battery,
  Timer,
  CloudRain,
  Sun
} from 'lucide-react';

const AutomaticIrrigationPage = () => {
  const [systemStatus, setSystemStatus] = useState('active');
  const [selectedZone, setSelectedZone] = useState('zone-1');
  const [isManualMode, setIsManualMode] = useState(false);
  const { t } = useTranslation();

  // Dummy data for irrigation zones
  const irrigationZones = [
    {
      id: 'zone-1',
      name: 'Wheat Field A',
      area: '2.5 hectares',
      soilMoisture: 35,
      temperature: 28,
      humidity: 60,
      waterUsage: 450,
      status: 'watering',
      lastWatered: '2 hours ago',
      nextScheduled: '6:00 PM',
      cropType: 'Wheat'
    },
    {
      id: 'zone-2',
      name: 'Rice Paddy B',
      area: '3.2 hectares',
      soilMoisture: 75,
      temperature: 32,
      humidity: 80,
      waterUsage: 680,
      status: 'optimal',
      lastWatered: '4 hours ago',
      nextScheduled: '8:00 PM',
      cropType: 'Rice'
    },
    {
      id: 'zone-3',
      name: 'Vegetable Garden',
      area: '1.8 hectares',
      soilMoisture: 20,
      temperature: 25,
      humidity: 45,
      waterUsage: 320,
      status: 'needs_water',
      lastWatered: '12 hours ago',
      nextScheduled: 'Now',
      cropType: 'Mixed Vegetables'
    },
    {
      id: 'zone-4',
      name: 'Cotton Field C',
      area: '4.0 hectares',
      soilMoisture: 40,
      temperature: 30,
      humidity: 55,
      waterUsage: 580,
      status: 'scheduled',
      lastWatered: '6 hours ago',
      nextScheduled: '10:00 PM',
      cropType: 'Cotton'
    }
  ];

  // Dummy weather data
  const weatherData = {
    temperature: 29,
    humidity: 65,
    rainChance: 30,
    windSpeed: 12,
    forecast: [
      { day: 'Today', temp: 29, rain: 30 },
      { day: 'Tomorrow', temp: 31, rain: 60 },
      { day: 'Wed', temp: 27, rain: 80 },
      { day: 'Thu', temp: 28, rain: 20 },
      { day: 'Fri', temp: 32, rain: 10 }
    ]
  };

  // System overview data
  const systemOverview = {
    totalZones: 4,
    activeZones: 2,
    waterSaved: '25%',
    energyEfficiency: '92%',
    monthlyWaterUsage: 15420,
    alerts: 2
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'watering': return 'text-blue-600 bg-blue-100';
      case 'optimal': return 'text-green-600 bg-green-100';
      case 'needs_water': return 'text-red-600 bg-red-100';
      case 'scheduled': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'watering': return <Droplets className="h-4 w-4" />;
      case 'optimal': return <CheckCircle className="h-4 w-4" />;
      case 'needs_water': return <AlertTriangle className="h-4 w-4" />;
      case 'scheduled': return <Timer className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const selectedZoneData = irrigationZones.find(zone => zone.id === selectedZone);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('irrigation.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('irrigation.subtitle')}
          </p>
        </div>

        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('irrigation.totalZones')}</p>
                <p className="text-3xl font-bold text-gray-900">{systemOverview.totalZones}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('irrigation.activeZones')}</p>
                <p className="text-3xl font-bold text-green-600">{systemOverview.activeZones}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Power className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('irrigation.waterSaved')}</p>
                <p className="text-3xl font-bold text-blue-600">{systemOverview.waterSaved}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('irrigation.efficiency')}</p>
                <p className="text-3xl font-bold text-purple-600">{systemOverview.energyEfficiency}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Zone Management */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">{t('irrigation.irrigationZones')}</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{t('irrigation.manualMode')}</span>
                    <button
                      onClick={() => setIsManualMode(!isManualMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                        isManualMode ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isManualMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Settings className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Zone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {irrigationZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedZone === zone.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{zone.name}</h3>
                        <p className="text-sm text-gray-600">{zone.area}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(zone.status)}`}>
                        {getStatusIcon(zone.status)}
                        <span className="capitalize">{zone.status.replace('_', ' ')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{zone.soilMoisture}%</div>
                        <div className="text-xs text-gray-500">Soil Moisture</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{zone.temperature}°C</div>
                        <div className="text-xs text-gray-500">Temperature</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{zone.waterUsage}L</div>
                        <div className="text-xs text-gray-500">Water Used</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Last: {zone.lastWatered}</span>
                      <span>Next: {zone.nextScheduled}</span>
                    </div>

                    {isManualMode && (
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                          <PlayCircle className="h-4 w-4" />
                          <span>Start</span>
                        </button>
                        <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-1">
                          <Pause className="h-4 w-4" />
                          <span>Stop</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('irrigation.weatherConditions')}</h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{weatherData.temperature}°C</div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Droplets className="h-4 w-4" />
                    <span>{weatherData.humidity}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CloudRain className="h-4 w-4" />
                    <span>{weatherData.rainChance}%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">5-Day Forecast</h4>
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-600">{day.day}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">{day.temp}°C</span>
                      <div className="flex items-center space-x-1 text-blue-600">
                        <CloudRain className="h-3 w-3" />
                        <span className="text-xs">{day.rain}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Alerts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Alerts</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Low Water Pressure</p>
                    <p className="text-xs text-yellow-700">Zone 3 - Check pump system</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Sensor Offline</p>
                    <p className="text-xs text-red-700">Moisture sensor in Zone 1</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Optimal Conditions</p>
                    <p className="text-xs text-green-700">Zone 2 - Rice paddy healthy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Today's Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Water Usage</span>
                  <span className="font-semibold">2,030 L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Energy Consumed</span>
                  <span className="font-semibold">12.5 kWh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Time</span>
                  <span className="font-semibold">8h 45m</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="font-semibold text-green-600">₹340</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Zone Details */}
        {selectedZoneData && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {selectedZoneData.name} - Detailed View
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Zone Info */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Zone Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Crop Type:</span>
                    <span className="font-medium">{selectedZoneData.cropType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-medium">{selectedZoneData.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Status:</span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedZoneData.status)}`}>
                      {selectedZoneData.status.replace('_', ' ')}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Watered:</span>
                    <span className="font-medium">{selectedZoneData.lastWatered}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Scheduled:</span>
                    <span className="font-medium">{selectedZoneData.nextScheduled}</span>
                  </div>
                </div>
              </div>

              {/* Sensor Readings */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Sensor Data</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Droplets className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800">Soil Moisture</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{selectedZoneData.soilMoisture}%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-5 w-5 text-red-600" />
                        <span className="text-red-800">Temperature</span>
                      </div>
                      <span className="text-2xl font-bold text-red-600">{selectedZoneData.temperature}°C</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Cloud className="h-5 w-5 text-green-600" />
                        <span className="text-green-800">Humidity</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">{selectedZoneData.humidity}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control Panel */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Zone Controls</h3>
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Start Irrigation</span>
                  </button>
                  
                  <button className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                    <Pause className="h-5 w-5" />
                    <span>Stop Irrigation</span>
                  </button>
                  
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Irrigation</span>
                  </button>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Irrigation Duration (minutes)
                    </label>
                    <input
                      type="number"
                      defaultValue="30"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomaticIrrigationPage;