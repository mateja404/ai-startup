import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import appdesktop from "../public/heroappdesktop.png";
import appmobile from "../public/heroappmobile.png";

const Hero = () => {
  return (
    <section className="relative w-full h-auto bg-black overflow-hidden flex flex-col items-center justify-center gap-y-7">
      <div className="absolute -inset-x-4 sm:-inset-x-8 -inset-y-4 bg-gradient-to-b from-violet-600/30 via-violet-500/40 to-transparent blur-2xl" style={{ maskImage: 'radial-gradient(ellipse at center, white 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, white 60%, transparent 100%)', }}></div>
      <div className="px-6 py-2 mt-40 flex items-center flex-row gap-x-3 bg-zinc-900 border border-zinc-700 rounded-full mx-auto z-20">
            <div className="bg-purple-500 w-[40px] h-[20px] flex items-center justify-center rounded-full">
            <span className="text-[12px] font-bold">NEW</span>
            </div>
            <h1 className="text-purple-500">Latest integration just arrived</h1>
      </div>
      <div className="flex flex-col w-full h-full z-20 overflow-visible gap-y-5 items-center">
            <h1 className="text-[70px] leading-tight font-medium flex mx-auto max-w-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-fuchsia-400/70">Boost your rankings with AI.</h1>
            <p className='max-auto text-white text-center max-w-xl text-lg'>Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
            <div className='p-[7px] border-1 border-zinc-700 rounded-xl hover:scale-110 transition-all duration-300'>
                <Button className='bg-white text-black h-[45px] cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-all duration-300'>Start for free</Button>
            </div>
            <Image src={appdesktop} alt="app" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)', }}/>
      </div>
    </section>
  );
};

export default Hero;