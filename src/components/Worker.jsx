import React from "react";
import { Foto1 } from "../assets";

const Worker = () => {
  return (
    <div className="w-full h-screen pt-20 pb-12 px-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold mb-6">Our Best Engineers</h2>
        <p className="text-sm text-slate-500 mx-auto w-2/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat repellendus, eius quae repudiandae soluta.</p>
      </div>
      {/* Title Section */}

      {/* Workers Section */}
      <div className="flex gap-12 text-center">
        <div className="w-1/2 h-[22rem] flex flex-col justify-evenly shadow-xl">
          <div className="">
            <img className="w-28 h-28 rounded-full mx-auto object-cover mb-3" src={Foto1} alt="" />
            <p className="text-xl font-medium">Febrian Daffa</p>
            <p className="text-xs">Sedati, Sidoarjo</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">+62-8123-8413-293</p>
            <p className="text-sm text-blue-400">febrian@email.co.id</p>
          </div>
        </div>
        <div className="w-1/2 h-[22rem] flex flex-col justify-evenly shadow-xl">
          <div className="">
            <img className="w-28 h-28 rounded-full mx-auto object-cover mb-3" src={Foto1} alt="" />
            <p className="text-xl font-medium">Febrian Daffa</p>
            <p className="text-xs">Sedati, Sidoarjo</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">+62-8123-8413-293</p>
            <p className="text-sm text-blue-400">febrian@email.co.id</p>
          </div>
        </div>
        <div className="w-1/2 h-[22rem] flex flex-col justify-evenly shadow-xl">
          <div className="">
            <img className="w-28 h-28 rounded-full mx-auto object-cover mb-3" src={Foto1} alt="" />
            <p className="text-xl font-medium">Febrian Daffa</p>
            <p className="text-xs">Sedati, Sidoarjo</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">+62-8123-8413-293</p>
            <p className="text-sm text-blue-400">febrian@email.co.id</p>
          </div>
        </div>
      </div>
      {/* Workers Section */}
    </div>
  );
};

export default Worker;
