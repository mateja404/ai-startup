"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarlogo from "../public/navbarlogo.png";
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }

    const handleLinkClick = (e: any, href: any) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setIsActive(false);
            setIsSidebarOpen(false);
        }
    };
  return (
    <nav className='fixed top-0 left-0 right-0 z-40 backdrop-blur-3xl'>
        <div className='flex h-[50px] items-center justify-center p-0 max-sm:p-10 sm:p-10 xl:gap-20 2xl:gap-20 border-1 border-b-zinc-700 border-t-0 border-r-0 border-l-0'>
            <Image src={navbarlogo} alt='logo' className='xl:static 2xl:static max-sm:absolute max-sm:left-5 sm:absolute sm:left-5'/>
            <ul className='hidden w-auto h-auto rounded-full text-white/70 text-sm md:flex flex-row gap-10 border-1 border-zinc-700 pt-[11px] pb-[11px] pl-12 pr-12'>
                <li><Link href={"#"}>Features</Link></li>
                <li><Link href={"#"}>Developers</Link></li>
                <li><Link href={"#"}>Company</Link></li>
                <li><Link href={"#"}>Blog</Link></li>
                <li><Link href={"#"}>Changelog</Link></li>
            </ul>
            <button onClick={() => toggleMenu()} className="md:hidden absolute right-40 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 border border-zinc-700 group" aria-label="Toggle menu">
                <div className="relative flex flex-col items-center justify-center w-5 h-5 overflow-hidden">
                    <span className={`absolute w-5 h-[2px] bg-gradient-to-br from-purple-300 via-purple-500 to-purple-400 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-gradient-to-br from-purple-300 via-purple-500 to-purple-400 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`absolute w-5 h-[2px] bg-gradient-to-br from-purple-300 via-purple-500 to-purple-400 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
                </div>
            </button>
            <div className='p-[5px] border-1 border-zinc-700 rounded-xl xl:static max-sm:absolute max-sm:right-5 sm:absolute sm:right-5'>
                <Button className='bg-gradient-to-tl from-violet-950 via-violet-500 to-purple-600 h-[35px] cursor-pointer'>Join waitlist</Button>
            </div>
        </div>
        <div className={isSidebarOpen ? "w-full h-screen flex flex-col bg-black z-0 text-white" : "hidden -translate-y-100 transition ease-in-out duration-300"}>
            <ul className="mt-10 gap-y-2 flex flex-col justify-center items-center">
                <li className={`w-[90%] h-10 bg-transparent pl-2 pt-2 pb-2 rounded-xl`}><Link onClick={(e) => handleLinkClick(e, '#about')} className="flex gap-x-2" href={"#about"}>Features</Link></li>
                <li className={`w-[90%] h-10 bg-transparent pl-2 pt-2 pb-2 rounded-xl`}><Link onClick={(e) => handleLinkClick(e, '#naseusluge')} className="flex gap-x-2" href={"#naseusluge"}>Developers</Link></li>
                <li className={`w-[90%] h-10 bg-transparent pl-2 pt-2 pb-2 rounded-xl`}><Link onClick={(e) => handleLinkClick(e, '#recenzije')} className="flex gap-x-2" href={"#recenzije"}>Company</Link></li>
                <li className={`w-[90%] h-10 bg-transparent pl-2 pt-2 pb-2 rounded-xl`}><Link onClick={(e) => handleLinkClick(e, '#specusluge')} className="flex gap-x-2" href={"#specusluge"}>Blog</Link></li>
                <li className={`w-[90%] h-10 bg-transparent pl-2 pt-2 pb-2 rounded-xl`}><Link onClick={(e) => handleLinkClick(e, '#specusluge')} className="flex gap-x-2" href={"#specusluge"}>Changelog</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;