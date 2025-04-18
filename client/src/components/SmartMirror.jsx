import React, { useState, useEffect } from "react";
import { FaSearch, FaCloudSun, FaCloudRain, FaClock } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";

const SmartMirror = () => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState("Rajkot");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "0171fff3bb8c12798fba86325429478d"; // Replace with your API key

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found! Try another city.");
      }
      const data = await response.json();
      setWeather(data.main);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  // Weather Icon based on Temperature
  const WeatherIcon = weather
    ? weather.temp > 25
      ? FaCloudSun
      : FaCloudRain
    : FaCloudSun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-1"
        >
          <FaClock className="text-blue-500 dark:text-gray-300" size={18} />
          <WeatherIcon className="text-blue-500 dark:text-gray-300" size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 p-3 rounded-lg shadow-lg 
        bg-gradient-to-r from-blue-400 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white"
      >
        <div className="flex flex-col items-center text-center">
          {/* Time Display */}
          <h1 className="text-lg font-semibold flex items-center space-x-2">
            <FaClock className="text-white" size={16} />
            <span>{time.toLocaleTimeString()}</span>
          </h1>

          {/* Weather Info */}
          {loading ? (
            <p className="text-xs">Loading...</p>
          ) : error ? (
            <p className="text-xs text-red-200">{error}</p>
          ) : weather ? (
            <p className="text-sm flex items-center space-x-2">
              <WeatherIcon className="text-white" size={16} />
              <span>🌡 {weather.temp}°C | 💧 {weather.humidity}%</span>
            </p>
          ) : (
            <p className="text-xs">No Data</p>
          )}

          {/* Search Input Box */}
          <div className="mt-3 w-full">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                className="p-1 rounded-md w-full text-sm shadow-sm focus:outline-none 
                text-black border border-gray-300 dark:border-gray-600"
              />
              <Button size="sm" className="px-3 py-1" onClick={handleSearch}>
                <FaSearch />
              </Button>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SmartMirror;
