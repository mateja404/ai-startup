import React from 'react';
import Image from 'next/image';
import bentoseovisual from "../public/bentoseovisual.png";
import heroappdesktop from "../public/heroappdesktop.png";
import smartgenerator from "../public/smartgenerator.png";
import visualreports from "../public/visualreports.png";

const BentoFeatures = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-y-7 justify-center items-center pt-20'>
        <p className='text-white max-w-2xl text-center text-4xl'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</p>
        <div className='w-[80%] h-full flex flex-row gap-x-3'>
            <div className='w-[30%] h-auto bg-transparent border-1 border-zinc-700 rounded-xl flex flex-col gap-y-5 p-5'>
                <div className='w-full h-[50%] flex items-center justify-center'>
                    <Image src={bentoseovisual} alt='seo visual' width={170} height={170}/>
                </div>
                <div className='w-full h-[50%] flex flex-col pt-3 gap-y-3'>
                    <h3 className='text-white'>SEO goal setting</h3>
                    <p className='text-white/50'>Helps you set and achieve SEO goals with guided assistance.</p>
                </div>
            </div>
            <div className='w-[70%] h-auto relative bg-transparent border-1 border-zinc-700 rounded-xl flex flex-col p-5'>
                <Image src={heroappdesktop} alt="app" className="w-full h-auto relative z-10 object-cover max-h-[300px]"
                    style={{
                    maskImage: 'linear-gradient(to bottom, white, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)',
                    }}
                />
                <h3 className='z-1 flex text-white'>User-friendly dashboard</h3>
                <p className='z-1 flex text-white/50'>Perform complex SEO audits and optimizations with a single click.</p>
                <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-700/40"></div>
            </div>
        </div>
        <div className='w-[80%] h-full flex flex-row gap-x-3'>
            <div className='w-[70%] h-auto relative bg-transparent border-1 border-zinc-700 rounded-xl flex flex-col p-5'>
                <Image src={visualreports} alt="app" className="w-full h-auto relative z-1 object-cover max-h-[300px] rounded-xl"
                    style={{
                    maskImage: 'linear-gradient(to bottom, white, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)',
                    }}
                />
                <h3 className='z-1 flex text-white'>Visual reports</h3>
                <p className='z-1 flex text-white/50'>Visual insights into your site’s performance.</p>
                <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-700/40"></div>
            </div>
            <div className='w-[30%] h-auto bg-transparent border-1 border-zinc-700 rounded-xl flex flex-col gap-y-5 p-5'>
                <div className='w-full h-[50%] flex items-center justify-center'>
                    <Image src={smartgenerator} alt='seo visual' width={170} height={170}/>
                </div>
                <div className='w-full h-[50%] flex flex-col pt-3 gap-y-3'>
                    <h3 className='text-white'>Smart Keyword Generator</h3>
                    <p className='text-white/50'>Automatic suggestions and the best keywords to target.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BentoFeatures;