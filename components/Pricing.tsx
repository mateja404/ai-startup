import React from 'react';
import { Separator } from './ui/separator';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  return (
    <section className='w-full h-auto relative bg-black pt-10 pl-10 pr-10 text-center flex flex-col gap-y-10 max-sm:gap-y-10 lg:mt-0 md:mt-50 mt-100'>
        <div className="absolute -inset-x-4 sm:-inset-x-8 -inset-y-4 bg-gradient-to-b from-violet-600/30 via-violet-500/40 to-transparent blur-2xl" style={{ maskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)', }}></div>
        <div className='flex flex-col gap-y-3 items-center justify-center'>
            <h1 className='text-white text-6xl text-center'>Pricing</h1>
            <p className='text-center max-w-sm text-white'>Choose the right plan to meet your SEO needs and start optimizing today.</p>
        </div>
        <div className='max-sm:w-full xl:w-full mt-0 items-center lg:items-stretch justify-center 2xl:w-full h-auto min-h-[500px] mx-auto flex flex-col lg:flex-row gap-3'>
            <div className="flex flex-col w-full flex-1 max-w-[350px] bg-transparent text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
                <div className="flex flex-col gap-y-2 mb-4">
                    <h2 className="text-white text-2xl">Pricing</h2>
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
            <div className="flex flex-col w-full flex-1 max-w-[350px] [background-image:linear-gradient(to_bottom,black_2%,transparent),linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:100%_100%,50px_50px,50px_50px] text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
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
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Content suggestions</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Link optimization</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-b from-white/10 via-violet-700 to-white/10 backdrop-blur-md border-2 border-violet-600/50 hover:bg-transparent">Join waitlist</Button>
            </div>
            <div className="flex flex-col w-full flex-1 max-w-[350px] bg-transparent text-left backdrop-blur-3xl border border-zinc-700 rounded-xl p-6">
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
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Content suggestions</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Link optimization</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> Multi-user access</li>
                    <li className="flex gap-x-3 items-center"><Check className="w-[17px]" /> API integration</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-b from-white/15 via-zinc-900 to-white/15 backdrop-blur-md border-2 border-white/20 hover:bg-transparent">Join waitlist</Button>
            </div>
        </div>
    </section>
  )
}

export default Pricing;