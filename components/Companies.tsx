import React from 'react';
import Image from 'next/image';
import acmelogo from "../public/acme 1.png";
import echovalley from "../public/echovalley.png";
import quantumlogo from "../public/quantum.png";
import pulselogo from "../public/pulse.png";
import outsidelogo from "../public/outside.png";
import apexlogo from "../public/apex.png";
import celestiallogo from "../public/celestial.png";
import twicelogo from "../public/2twice.png";

const Companies = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-y-10 pt-5'>
        <h3 className='text-zinc-500 text-center'>Trusted by the world’s most innovative teams</h3>
        <div className='w-full xl:w-[60%] 2xl:w-[900px] mx-auto grid grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 place-items-center gap-y-3 gap-x-0'>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={acmelogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={echovalley} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={quantumlogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={pulselogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={outsidelogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={apexlogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={celestiallogo} alt='acme logo' width={120} height={120}/>
            </div>
            <div className='place-items-center w-auto h-auto bg-transparent border-1 border-zinc-700 max-sm:pt-5 max-sm:pb-5 max-sm:pl-5 max-sm:pr-5 pt-7 pb-7 pl-10 pr-10 rounded-xl'>
                <Image src={twicelogo} alt='acme logo' width={120} height={120}/>
            </div>
        </div>
    </section>
  )
}

export default Companies;