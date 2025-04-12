import React from 'react'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
  
const HeroOne = () => {
  return (
    <section className="flex flex-col bg-wite p-4">
      <div>
        <NavBar/>
      </div>
      <Cards/>
    </section>
  )
}

export default HeroOne
