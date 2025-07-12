import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Companies from './Companies';

const HomePage = () => {
  return (
    <main className='w-full h-full overflow-x-hidden bg-black relative'>
      <Navbar/>
      <Hero/>
      <Companies/>
    </main>
  )
}

export default HomePage;