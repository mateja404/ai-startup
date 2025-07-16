import { BellRing, ChartSpline, Files, Gauge, ListChecks, MousePointer, Sparkles, Target, WandSparkles } from 'lucide-react';
import React from 'react';

const SeoEfforts = () => {
  return (
    <section className='w-full h-auto min-h-[500px] mt-20 mx-auto flex flex-col bg-gradient-to-r from-purple-950/30 via-purple-950/20 to-blue-900/10'>
      <div className='w-full pl-5 xl:pl-35 pt-10 pb-10'>
        <h1 className='text-7xl text-white max-w-xl'>Elevate your SEO efforts.</h1>
      </div>
      <div className='w-full xl:w-[80%] mx-auto h-auto flex flex-col xl:flex-row gap-3 '>
        <div className='w-[90%] h-full mx-auto xl:w-1/3 flex flex-col gap-1'>
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><Gauge /> User-friendly dashboard</h1>
            <p className='text-white text-md'>Perform complex SEO audits and optimizations with a single click.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 gap-y-1 flex flex-col'>
            <h1 className='text-white text-sm gap-2 flex'><ListChecks /> Content evaluation</h1>
            <p className='text-white text-md'>Simple corrections for immediate improvemens.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><WandSparkles /> Link Optimization Wizard</h1>
            <p className='text-white text-md'>Guides you through the process of creating and managing links.</p>
          </div> 
        </div>
        <div className='w-[90%] h-full mx-auto xl:w-1/3 flex flex-col gap-1'>
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><ChartSpline /> Visual reports</h1>
            <p className='text-white text-md'>Visual insights into your site’s performance.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><Target /> SEO goal setting</h1>
            <p className='text-white text-md'>Helps you set and achieve SEO goals with guided assistance.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><MousePointer /> One-click optimization</h1>
            <p className='text-white text-md'>Perform complex SEO audits and optimizations with a single click.</p>
          </div> 
        </div>
        <div className='w-[90%] h-full mx-auto xl:w-1/3 flex flex-col gap-1'>
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><Sparkles /> Smart Keyword Generator</h1>
            <p className='text-white text-md'>Automatic suggestions and the best keywords to target.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><BellRing /> Automated alerts</h1>
            <p className='text-white text-md'>Automatic notifications about your SEO health, including quick fixes.</p>
          </div> 
          <div className='w-full flex-1 xl:flex-0 p-5 flex flex-col gap-y-1'>
            <h1 className='text-white text-sm flex gap-2'><Files /> Competitor reports</h1>
            <p className='text-white text-md'>Provides insights into competitors’ keyword strategies and ranking.</p>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default SeoEfforts;