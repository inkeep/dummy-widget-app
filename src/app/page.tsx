"use client"

import {
  InkeepEmbeddedChat,
  type InkeepEmbeddedChatProps,
} from "@inkeep/cxkit-react-oss";

export default function Home() {
  const embeddedChatProps: InkeepEmbeddedChatProps = {
    aiChatSettings: {
      graphUrl: "http://localhost:3003/api/chat",
      headers: {
        Authorization:
          'Bearer ' + process.env.GRAPH_API_KEY,
      //   "x-inkeep-tenant-id": "default",
      //   "x-inkeep-project-id": "weather-project",
      //   "x-inkeep-graph-id": "weather-graph",
      },
      // apiKey: '` + process.env.GRAPH_API_KEY",
      // components: {
      //   WeatherForecast,
      // },
    },
  };

  return <InkeepEmbeddedChat {...embeddedChatProps} />;
}

const WeatherForecast = ({ forecast }: { forecast: any[] }) => {
  const formatTime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      hour12: true 
    });
  };

  const getWeatherIcon = (weatherCode: number) => {
    switch (weatherCode) {
      case 0: return '☀️'; // Clear skies
      case 1: return '⛅'; // Partly cloudy
      case 2: return '☁️'; // Cloudy
      case 3: return '🌧️'; // Rainy
      default: return '🌤️';
    }
  };

  return (
    <div className="weather-forecast" style={{
      padding: '16px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      margin: '16px 0',
      border: '1px solid #e2e8f0'
    }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#1e293b' }}>Weather Forecast</h3>
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
        {forecast.map((item, index) => (
          <div 
            key={index} 
            style={{
              minWidth: '120px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>
              {getWeatherIcon(item.weatherCode)}
            </div>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#374151',
              marginBottom: '4px'
            }}>
              {formatTime(item.datetime)}
            </div>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#1e293b',
              marginBottom: '4px'
            }}>
              {Math.round(item.temperature)}°{item.temperatureUnit}
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: '#6b7280',
              lineHeight: '1.3'
            }}>
              {item.weatherDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};