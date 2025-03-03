'use client';
import {useState} from 'react';
import SearchBar from './component/SearchBar';
import WeatherBox from './component/WeatherBox';

const IndexPage = () => {
  const [weatherData, setWeatherData] = useState([]);

  const handleSearch = async (city) => {
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    setWeatherData((prevData) => [...prevData, {city, weather: data }]);
  };

  return (
    <div className = "container mx-auto p-4">
        <h1 className = "text-3xl font-bold mb-4">Weather Search</h1>
        <SearchBar onSearch = {handleSearch} />
        <div className = "mt-4 space-y-4">
            {weatherData.map((data, index) => (
              <WeatherBox key = {index} city = {data.city} weather = {data.weather} />
            ))}
        </div>
    </div>
  );
};

export default IndexPage;