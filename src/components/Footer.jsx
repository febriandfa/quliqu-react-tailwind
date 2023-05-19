import React from "react";
import { ArrowCircleRight, Facebook, Linkedin, Twitter } from "../assets";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-full pt-10 pb-6 px-16">
      <div className="flex justify-between border-b-2 pb-10">
        <div className="flex flex-col justify-between">
          <a href="#home" className="font-semibold text-blue-400 text-xl tracking-widest">
            Quliqu<span className="text-gray-950">.</span>
          </a>
          <p className="text-xs text-slate-500 w-44">You'll find your next home loan value you prefer.</p>
          <div className="flex gap-2 pb-6">
            <div className="p-1 bg-blue-400 w-fit rounded relative">
              <a href="www.facebook.com">
                <img className="w-4 h-4 relative left-[0.2rem]" src={Facebook} alt="" />
              </a>
            </div>
            <div className="p-1 bg-blue-400 w-fit rounded relative">
              <a href="www.twitter.com">
                <img className="w-4 h-4 relative top-[0.1rem]" src={Twitter} alt="" />
              </a>
            </div>
            <div className="p-1 bg-blue-400 w-fit rounded">
              <a href="www.linkedin.com">
                <img className="w-4 h-4" src={Linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-3/5 justify-between">
          <div className="w-40">
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="text-xs text-slate-500 space-y-4">
              <li>
                <a href="#footer">Our Agents</a>
              </li>
              <li>
                <a href="#footer">Member Stories</a>
              </li>
              <li>
                <a href="#footer">Video</a>
              </li>
              <li>
                <a href="#footer">Free Trial</a>
              </li>
            </ul>
          </div>
          <div className="w-40">
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="text-xs text-slate-500 space-y-4">
              <li>
                <a href="#footer">Partnership</a>
              </li>
              <li>
                <a href="#footer">Terms of Use</a>
              </li>
              <li>
                <a href="#footer">Privacy</a>
              </li>
              <li>
                <a href="#footer">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="w-40">
            <h5 className="font-semibold mb-4">Get In Touch</h5>
            <div className="relative h-fit flex">
              <input className="border-2 border-slate-100 text-xs p-[0.3rem] pr-8 bg-slate-200 focus:bg-slate-50 focus:placeholder-transparent w-full" type="text" id="name" name="name" placeholder="Enter Your Mail" />
              <img className="w-4 absolute inset-y-2 right-2" src={ArrowCircleRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p className="mx-auto pt-10 text-center">
          Webiste Created By <span className="text-highlight font-bold">Febrian Daffa Eka Putra</span>
        </p>
        <p className="mx-auto text-center">
          UI/IX Design Created By <span className="text-highlight font-bold">@arshakirpk</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
