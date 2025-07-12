import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Companies from './Companies';
import BentoFeatures from './BentoFeatures';

const HomePage = () => {
  return (
    <main className='w-full h-full overflow-x-hidden bg-black relative'>
      <Navbar/>
      <Hero/>
      <Companies/>
      <BentoFeatures/>
    </main>
  )
}

export default HomePage;