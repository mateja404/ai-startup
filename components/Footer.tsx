import React from 'react';
import Image from "next/image";
import logo from "@/public/navbarlogo.png";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full h-auto mt-10 bg-black flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-auto flex flex-row lg:flex-col justify-between relative p-5">
                <div className="w-full h-[10%] flex items-center flex-row gap-x-3">
                    <Image src={logo} alt={"logo"} />
                    <h1 className="text-white">AI Startup kit</h1>
                </div>
                <div className="pl-10 gap-x-5 w-full h-[10%] flex justify-start items-center mx-auto">
                    <Twitter className=" text-slate-600 cursor-alias" />
                    <Instagram className=" text-slate-600 cursor-alias" />
                    <Youtube className=" text-slate-600 cursor-alias" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[400px] flex mr-15">
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-full place-items-center pt-5 gap-y-7 p-3">
                    <div className="w-4/5 h-full relative flex flex-col gap-y-5">
                       <h2 className="text-center text-white">Product</h2>
                       <ul className="flex flex-col items-center gap-y-5 text-zinc-700">
                           <li>Features</li>
                           <li>Integrations</li>
                           <li>Updates</li>
                           <li>FAQ</li>
                           <li>Pricing</li>
                       </ul>
                    </div>
                    <div className="w-4/5 h-full relative flex flex-col gap-y-5">
                       <h2 className="text-center text-white">Company</h2>
                       <ul className="flex flex-col items-center gap-y-5 text-zinc-700">
                           <li>About</li>
                           <li>Blog</li>
                           <li>Careers</li>
                           <li>Manifesto</li>
                           <li>Press</li>
                           <li>Contract</li>
                       </ul>
                    </div>
                    <div className="w-4/5 h-full relative flex flex-col gap-y-5">
                       <h2 className="text-center text-white">Resources</h2>
                       <ul className="flex flex-col items-center gap-y-5 text-zinc-700">
                           <li>Examples</li>
                           <li>Community</li>
                           <li>Guides</li>
                           <li>Docs</li>
                           <li>Press</li>
                       </ul>
                    </div>
                    <div className="w-4/5 h-full relative flex flex-col gap-y-5">
                       <h2 className="text-center text-white">Legal</h2>
                       <ul className="flex flex-col items-center gap-y-5 text-zinc-700">
                           <li>Privacy</li>
                           <li>Terms</li>
                           <li>Security</li>
                       </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;