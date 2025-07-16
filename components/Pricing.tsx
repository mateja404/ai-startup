import React from 'react';
import { Separator } from './ui/separator';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  return (
    <section className='w-full h-full relative bg-black p-10 text-center flex flex-col gap-y-10 max-sm:gap-y-90 sm:mt-100 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 max-sm:mt-100'>
        <div className="absolute -inset-x-4 sm:-inset-x-8 -inset-y-4 bg-gradient-to-b from-violet-600/30 via-violet-500/40 to-transparent blur-2xl" style={{ maskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)', }}></div>
        <div className='flex flex-col gap-y-3 items-center justify-center'>
            <h1 className='text-white text-6xl text-center'>Pricing</h1>
            <p className='text-center max-w-sm text-white'>Choose the right plan to meet your SEO needs and start optimizing today.</p>
        </div>
        <div className='max-sm:w-full xl:w-full justify-center 2xl:w-full h-auto min-h-[500px] mx-auto flex flex-col xl:flex-row gap-3'>
            <div className="flex flex-col w-full max-w-[350px] bg-transparent text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
                {/* Header */}
                <div className="flex flex-col gap-y-2 mb-4">
                    <h2 className="text-white text-2xl">Pricing</h2>
                    <p className="text-white/70 font-light">$29/mo</p>
                </div>
                <Separator className="bg-white/20 mb-6 mx-auto" />
                {/* List */}
                <ul className="flex flex-col gap-y-3 text-left text-md text-white flex-grow">
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Keyword Optimization</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Automated meta tags</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> SEO monitoring</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Monthly reports</li>
                </ul>

                {/* Button */}
                <Button className="w-full mt-6 bg-gradient-to-b from-white/15 via-zinc-900 to-white/15 backdrop-blur-md border-2 border-white/20 hover:bg-transparent">
                    Join waitlist
                </Button>
            </div>
            <div className="flex flex-col w-full max-w-[350px] bg-transparent text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
                <div className="flex flex-col gap-y-2 mb-4">
                    <h2 className="text-white text-2xl">Pro</h2>
                    <p className="text-white/70 font-light">$29/mo</p>
                </div>
                <Separator className="bg-white/20 mb-6 mx-auto" />
                <ul className="flex flex-col gap-y-3 text-left text-md text-white flex-grow">
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Keyword Optimization</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Automated meta tags</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> SEO monitoring</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Monthly reports</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-b from-white/15 via-violet-700/70 to-white/15 backdrop-blur-md border-2 border-violet-600/50 hover:bg-transparent">
                    Join waitlist
                </Button>
            </div>
            <div className="flex flex-col w-full max-w-[350px] bg-transparent text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
                <div className="flex flex-col gap-y-2 mb-4">
                    <h2 className="text-white text-2xl">Business</h2>
                    <p className="text-white/70 font-light">$29/mo</p>
                </div>
                <Separator className="bg-white/20 mb-6 mx-auto" />
                <ul className="flex flex-col gap-y-3 text-left text-md text-white flex-grow">
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Keyword Optimization</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Automated meta tags</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> SEO monitoring</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Monthly reports</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-b from-white/15 via-zinc-900 to-white/15 backdrop-blur-md border-2 border-white/20 hover:bg-transparent">Join waitlist</Button>
            </div>
        </div>
    </section>
  )
}

export default Pricing;