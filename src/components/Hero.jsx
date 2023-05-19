import React from "react";
import { Ace, Airbnb, Cat, Gedung1, Roomz, Walmart } from "../assets";

const Hero = () => {
  return (
    <div id="home" className="w-full h-full pb-12 px-16">
      <div className="flex items-center justify-between">
        <div className="w-[34rem] flex flex-col gap-8">
          {/* Title Section */}
          <h1 className="font-bold text-5xl leading-tight">
            <span className="text-blue-400">Master</span> of Consistency and <span className="text-blue-400">Quality</span>.
          </h1>
          <p className="text-slate-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates fuga reiciendis quo in beatae placeat aliquid cum nihil eos!</p>
          {/* Title Section */}

          {/* CTA Section */}
          <div className="w-1/2 flex justify-between">
            <a className="bg-blue-400 border-blue-400 border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white" href="#home">
              Explore
            </a>
            <a className="border-blue-400 border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-blue-400" href="#contact">
              Contact
            </a>
          </div>
          {/* CTA Section */}

          {/* In Number Sectiob */}
          <div className="flex justify-between mt-12 w-[31rem]">
            <div className="relative">
              <div className="rounded-tl-3xl rounded-br-3xl bg-blue-400 w-8 h-8 absolute"></div>
              <div className="pl-2 pt-1">
                <h3 className="relative text-2xl">28.024</h3>
                <p className="text-slate-500 text-sm">Projects Done</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-tl-3xl rounded-br-3xl bg-blue-400 w-8 h-8 absolute"></div>
              <div className="pl-2 pt-1">
                <h3 className="relative text-2xl">19.000</h3>
                <p className="text-slate-500 text-sm">Buildings Done</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-tl-3xl rounded-br-3xl bg-blue-400 w-8 h-8 absolute"></div>
              <div className="pl-2 pt-1">
                <h3 className="relative text-2xl">500+</h3>
                <p className="text-slate-500 text-sm">Total Employee</p>
              </div>
            </div>
          </div>
          {/* In Number Sectiob */}
        </div>
        <img className="w-[35rem] h-screen object-cover rounded-bl-[20rem] mb-10" src={Gedung1} alt="" />
      </div>

      {/* Sponsor Section */}
      <div className="flex items-center justify-around mt-12 w-11/12 mx-auto bg-slate-100 rounded-full py-4">
        <img className="w-32" src={Walmart} alt="" />
        <img className="w-[4.5rem]" src={Ace} alt="" />
        <img className="w-28" src={Airbnb} alt="" />
        <img className="w-16" src={Cat} alt="" />
        <img className="w-24" src={Roomz} alt="" />
      </div>
      {/* Sponsor Section */}
    </div>
  );
};

export default Hero;
