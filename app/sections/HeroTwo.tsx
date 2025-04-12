import React from 'react'
import WeatherGrid from '../components/WeatherGrid'

const HeroTwo = () => {
  return (
    <section className="flex flex-col bg-[#F7F6F9] p-4">
      <div>
        <h2 className="text-xl font-normal mb-2">Todays Highlights</h2>
      </div>
      <WeatherGrid/>
    </section>
  )
}

export default HeroTwo
