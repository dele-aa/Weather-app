import React from 'react'

const WeatherGrid = () => {
    const data = [
      { day: 'Mon', temp: '12°C', condition: 'Cloudy' },
      { day: 'Tue', temp: '14°C', condition: 'Sunny' },
      { day: 'Wed', temp: '9°C', condition: 'Rain' },
      { day: 'Thu', temp: '10°C', condition: 'Snow' },
      { day: 'Fri', temp: '7°C', condition: 'Cloudy' },
      { day: 'Sat', temp: '15°C', condition: 'Sunny' },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 text-center"
          >
            <h3 className="text-lg font-semibold">{item.day}</h3>
            <p className="text-3xl font-bold">{item.temp}</p>
            <p className="text-sm text-gray-500">{item.condition}</p>
          </div>
        ))}
      </div>
    );
  }

  export default WeatherGrid