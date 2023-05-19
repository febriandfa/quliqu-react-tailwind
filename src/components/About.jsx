import React from "react";
import { Gedung2 } from "../assets";

const About = () => {
  return (
    <div className="w-full h-full pt-20 pb-12 px-16">
      {/* Introduction Section */}
      <div className="flex h-fit gap-36">
        <div className="flex flex-col justify-center gap-6 w-[85rem]">
          <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam quas magni molestias fuga mollitia fugiat hic sint nobis reprehenderit.</p>
          <a className="bg-blue-400 border-blue-400 border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white w-fit" href="">
            Explore
          </a>
        </div>
        <h2 className="text-5xl font-medium">Why choose us for best construction experience</h2>
      </div>
      {/* Introduction Section */}

      <div className="flex gap-36 mt-12">
        <img className="w-[83rem] object-cover h-screen rounded-tr-[15rem]" src={Gedung2} alt="" />

        {/* 3 Points Section */}
        <div className="flex flex-col gap-24 justify-center">
          <div className="relative flex">
            <div className="relative w-12 h-12 rounded-tr-3xl rounded-bl-3xl bg-blue-400 my-auto">
              <h2 className="relative -top-4 -right-4 font-semibold text-5xl">01</h2>
            </div>
            <p className="text-sm ml-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo reprehenderit eligendi temporibus odio magnam, accusamus labore vel aut cum unde.</p>
          </div>
          <div className="relative flex">
            <div className="relative w-12 h-12 rounded-tr-3xl rounded-bl-3xl bg-blue-400 my-auto">
              <h2 className="relative -top-4 -right-4 font-semibold text-5xl">02</h2>
            </div>
            <p className="text-sm ml-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo reprehenderit eligendi temporibus odio magnam, accusamus labore vel aut cum unde.</p>
          </div>
          <div className="relative flex">
            <div className="relative w-12 h-12 rounded-tr-3xl rounded-bl-3xl bg-blue-400 my-auto">
              <h2 className="relative -top-4 -right-4 font-semibold text-5xl">03</h2>
            </div>
            <p className="text-sm ml-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo reprehenderit eligendi temporibus odio magnam, accusamus labore vel aut cum unde.</p>
          </div>
        </div>
      </div>
      {/* 3 Points Section */}
    </div>
  );
};

export default About;
