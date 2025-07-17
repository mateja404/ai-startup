import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Companies from './Companies';
import BentoFeatures from './BentoFeatures';
import SeoEfforts from './SeoEfforts';
import OurClients from './OurClients';
import Pricing from './Pricing';
import Newsletter from './Newsletter';

const HomePage = () => {
  return (
    <main className='w-full h-full overflow-x-hidden bg-black relative'>
      <Navbar/>
      <Hero/>
      <Companies/>
      <BentoFeatures/>
      <SeoEfforts/>
      <OurClients/>
      <Pricing/>
      <Newsletter/>
    </main>
  )
}

export default HomePage;