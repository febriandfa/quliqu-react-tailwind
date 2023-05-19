import React from "react";
import { Background1 } from "../assets";

const Message = () => {
  return (
    <div className="w-full h-full pt-20 pb-12">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.7)), url(${Background1})`,
          backgroundSize: "cover",
        }}
        className="h-screen text-white justify-center flex flex-col"
      >
        {/* Title Section */}
        <h2 className="text-5xl font-medium text-center mb-12">Message From CEO</h2>
        {/* Title Section */}

        <div className="w-3/4 mx-auto relative flex">
          <h1 className="text-start text-[12rem] w-fit h-fit relative left-0 -top-20">"</h1>
          <div className="items-center ">
            <p className="text-sm mb-12 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ullam assumenda reprehenderit asperiores! Hic aliquam illum quidem ad, mollitia, quod veritatis unde nostrum quae sit, dolorum consequatur quam optio nobis eaque
              accusantium consectetur harum perferendis quo beatae praesentium! Suscipit ea, harum voluptatibus atque commodi omnis officia. Vero, quo ducimus. Ut obcaecati fugiat nam rem voluptatem consectetur non distinctio explicabo
              ratione veniam, fuga, qui cum labore ab aperiam enim deserunt iste magni eveniet nobis unde laudantium ipsam voluptate quasi. Quam autem veniam ipsum illo voluptas earum iste ab nisi sed modi.
            </p>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut minima earum deserunt voluptatem. Unde vitae est molestiae maiores reprehenderit sunt, perspiciatis ipsum eligendi itaque temporibus velit similique dolore
              expedita, facere porro rem repudiandae voluptatibus labore omnis ut fugit. Sunt veniam, iste tempora pariatur beatae non nemo quos nisi dolor necessitatibus atque maxime fugit, dolore tempore. Adipisci quia fugiat libero.
              Atque quidem dolor recusandae velit minus eum vel perferendis iste. Fugit aliquid dignissimos quos voluptates modi iure ipsum eveniet amet repudiandae voluptatem, totam maiores incidunt quam blanditiis cupiditate saepe
              suscipit!
            </p>
          </div>
          <h1 className="text-end text-[12rem] w-fit h-fit rotate-180 relative right-0 -bottom-28">"</h1>
        </div>
      </div>
    </div>
  );
};

export default Message;
