import React from "react";
import { ArrowRight, Gedung3, Gedung4 } from "../assets";

const Blog = () => {
  return (
    <div id="blog" className="w-full h-full pt-20 pb-12 px-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold mb-6">Latest Blogs</h2>
        <p className="text-sm text-slate-500 mx-auto w-2/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat repellendus, eius quae repudiandae soluta.</p>
      </div>
      {/* Title Section */}

      {/* Blogs Section */}
      <div className="flex gap-14 justify-center mb-24 text-center text-white">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.7)), url(${Gedung3})`,
            backgroundSize: "cover",
          }}
          className="w-[30rem] h-[30rem] rounded-2xl flex flex-col justify-end p-8"
        >
          <h4 className="font-semibold text-xl mb-2">Unleash Your Creativity</h4>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur.</p>
          <a className="border-white border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white w-fit mx-auto" href="#blog">
            Read More
          </a>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.7)), url(${Gedung4})`,
            backgroundSize: "cover",
          }}
          className="w-[30rem] h-[30rem] rounded-2xl  flex flex-col justify-end p-8"
        >
          <h4 className="font-semibold text-xl mb-2">Unleash Your Creativity</h4>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur.</p>
          <a className="border-white border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white w-fit mx-auto" href="#blog">
            Read More
          </a>
        </div>
      </div>
      {/* Blogs Section */}

      {/* Subscribe Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium mb-6">
          Subscribe To Our <br />
          Newsletter
        </h2>
        <p className="text-sm text-slate-500 mx-auto w-2/4 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat repellendus, eius quae repudiandae soluta.</p>
        <a className="bg-blue-400 border-blue-400 border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white flex gap-3 w-fit mx-auto" href="#blog">
          Subscribe
          <img className="w-4" src={ArrowRight} alt="" />
        </a>
      </div>
      {/* Subscribe Section */}
    </div>
  );
};

export default Blog;
