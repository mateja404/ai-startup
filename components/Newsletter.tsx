import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Newsletter = () => {
  return (
    <section className='max-sm:w-full xl:w-[90%] h-auto mx-auto xl:pt-10 xl:pl-10 xl:pr-10 text-center flex justify-center mt-10 xl:mt-0'>
      <div className='w-[100%] xl:w-[90%] h-[400px] rounded-xl text-center flex flex-col justify-center items-center gap-y-12 border border-zinc-700 backdrop-blur-3xl' style={{ backgroundImage: ` linear-gradient(to bottom, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), /* Purple to Black fade (slightly less opaque) */ linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.7) 100%), /* Left and Right fade (slightly less opaque) */ linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px), /* Horizontal grid lines (more opaque) */ linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px) /* Vertical grid lines (more opaque) */ `, backgroundSize: '100% 100%, 100% 100%, 100px 100px, 100px 100px', backgroundRepeat: 'no-repeat, no-repeat, repeat, repeat', backgroundPosition: '0 0, 0 0, 0 0, 0 0', }}>
        <h1 className='text-white text-[50px] leading-none max-w-sm text-center'>AI-driven SEO for everyone.</h1>
        <div className='flex flex-col gap-y-5 w-full items-center'>
          <div className='relative max-sm:w-[90%] xl:w-full max-w-[500px]'>
          <Input placeholder="Your Email" className="w-full p-[27px] pr-[150px] border border-zinc-700" />
          <Button className="absolute top-1/2 right-1 -translate-y-1/2 p-[23px] bg-white text-black cursor-pointer hover:bg-white">Join waitlist</Button>
        </div>
        <h2 className='text-zinc-700'>No credit card required &middot; 7-days free trial</h2>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;