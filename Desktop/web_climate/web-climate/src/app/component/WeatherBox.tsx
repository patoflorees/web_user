'use client';
const WeatherBox = ({ city, weather }) => {
    return(
        <div className = "p-4 border rounded shadow-md">
            <h2 className = "text-xl font-bold">{city}</h2>
            <p>Temperature: {weather.temp_c}°C</p>
            <p>Condition: {weather.condition.text}</p>
        </div>
    );
};

export default WeatherBox;