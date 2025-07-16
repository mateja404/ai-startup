import React from "react";
import Image from "next/image";
import Testimonial from "../public/testimonialavatar.png";

function OurClients() {
  return (
    <section className="w-full h-[400px] pt-10 pb-10 text-center">
      <h1 className="text-white text-6xl mb-8">Our Clients</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="relative flex flex-col w-[300px] min-h-[200px] p-6 rounded-xl bg-gradient-to-br from-transparent via-purple-400 to-transparent shadow-md text-left">
          <p className="text-white mb-6">”This product has completely transformed how I manage my projects and deadlines”</p>
          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-white font-semibold">Sarah Thompson</p>
              <p className="text-white/80 text-sm">Blogger</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={Testimonial}
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col w-[300px] min-h-[200px] p-6 rounded-xl bg-gradient-to-br from-transparent via-purple-400 to-transparent shadow-md text-left">
          <p className="text-white mb-6">”This product has completely transformed how I manage my projects and deadlines”</p>
          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-white font-semibold">Sarah Thompson</p>
              <p className="text-white/80 text-sm">Blogger</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={Testimonial}
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col w-[300px] min-h-[200px] p-6 rounded-xl bg-gradient-to-br from-transparent via-purple-400 to-transparent shadow-md text-left">
          <p className="text-white mb-6">”This product has completely transformed how I manage my projects and deadlines”</p>
          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-white font-semibold">Sarah Thompson</p>
              <p className="text-white/80 text-sm">Blogger</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={Testimonial}
                alt="Avatar"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;