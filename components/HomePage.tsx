import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Companies from './Companies';
import BentoFeatures from './BentoFeatures';
import SeoEfforts from './SeoEfforts';

const HomePage = () => {
  return (
    <main className='w-full h-full overflow-x-hidden bg-black relative'>
      <Navbar/>
      <Hero/>
      <Companies/>
      <BentoFeatures/>
      <SeoEfforts/>
    </main>
  )
}

export default HomePage;