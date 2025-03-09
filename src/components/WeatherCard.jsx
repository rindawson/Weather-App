import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div>
        {/* Weather Details for: (City, Country) */}
        <h1 className="text-2xl text-center font-semibold mt-4">Weather Details for: {weather.name}, {weather.sys.country}</h1>

        {/* Temperature and Icon */}
        <div className="flex justify-center items-center mt4">
            <p className="text-4xl text-center font-bold capitalize mt-4">{Math.round(weather?.main.temp)}°F</p>             
            <img className="w-16 h-16" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>        
        </div>
            
        {/* Description */}
        <p className="text-gray-400 text-center capitalize ">{weather?.weather[0].description}</p>
        
        {/* Smaller Weather Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
                <p className="text-gray-400">Humidity</p>
                <p className="font-bold">{weather?.main.humidity}%</p>
            </div>
            
            <div className="text-center">
                <p className="text-gray-400">Sea Lvl</p>
                <p className="font-bold">{weather?.main.sea_level} ft</p>
            </div>   
                        
            <div className="text-center">
                <p className="text-gray-400">Wind Speed</p>
                <p className="font-bold">{weather?.wind.speed} m/s</p>
            </div>

            <div className="text-center">
                <p className="text-gray-400">Feels Like</p>  
                <p className="font-bold">{Math.round(weather.main.feels_like)}°F</p> 
            </div>
        </div>           
    </div>
   );
 };

export default WeatherCard;