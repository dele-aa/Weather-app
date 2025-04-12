import React from 'react'
import Image from 'next/image'

const WeatherIcon = () => {
  return (
    <div className='bg-white pt-20 justify-center flex items-center'>
      <Image
        src="/sun.png"
        alt="weather icon"
        width={250}
        height={250}
      />
    </div>
  )
}

export default WeatherIcon
