import React from "react";
import { useState } from "react";
import { Background2 } from "../assets";

const Contact = () => {
  const [nameInputFocus, setNameInputFocus] = useState(false);
  const [emailInputFocus, setEmailInputFocus] = useState(false);
  const [subjectInputFocus, setSubjectInputFocus] = useState(false);
  const [messageInputFocus, setMessageInputFocus] = useState(false);

  return (
    <div className="w-full h-screen pt-20 pb-12 px-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold mb-6">Contact Us</h2>
        <p className="text-sm text-slate-500 mx-auto w-2/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat repellendus, eius quae repudiandae soluta.</p>
      </div>
      {/* Title Section */}

      <div className="flex gap-10">
        {/* Form Section */}
        <form className="flex flex-col gap-4 w-[40%] justify-center" action="post">
          <div className="relative">
            <label className={`absolute -top-2 left-3 text-xs z-10 bg-slate-50 px-1 ${nameInputFocus ? "" : "hidden"}`} htmlFor="name">
              Name
            </label>
            <input
              className="relative border-2 border-slate-100 text-sm p-2 bg-slate-200 focus:bg-slate-50 focus:placeholder-transparent w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onFocus={() => setNameInputFocus(true)}
              onBlur={() => setNameInputFocus(false)}
            />
          </div>
          <div className="relative">
            <label className={`absolute -top-2 left-3 text-xs z-10 bg-slate-50 px-1 ${emailInputFocus ? "" : "hidden"}`} htmlFor="email">
              Email
            </label>
            <input
              className="relative border-2 border-slate-100 text-sm p-2 bg-slate-200 focus:bg-slate-50 focus:placeholder-transparent w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onFocus={() => setEmailInputFocus(true)}
              onBlur={() => setEmailInputFocus(false)}
            />
          </div>
          <div className="relative">
            <label className={`absolute -top-2 left-3 text-xs z-10 bg-slate-50 px-1 ${subjectInputFocus ? "" : "hidden"}`} htmlFor="subject">
              Subject
            </label>
            <input
              className="relative border-2 border-slate-100 text-sm p-2 bg-slate-200 focus:bg-slate-50 focus:placeholder-transparent w-full"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onFocus={() => setSubjectInputFocus(true)}
              onBlur={() => setSubjectInputFocus(false)}
            />
          </div>
          <div className="relative">
            <label className={`absolute -top-2 left-3 text-xs z-10 bg-slate-50 px-1 ${messageInputFocus ? "" : "hidden"}`} htmlFor="message">
              Message
            </label>
            <textarea
              className="relative border-2 border-slate-100 text-sm p-2 bg-slate-200 focus:bg-slate-50 focus:placeholder-transparent w-full"
              type="text"
              id="message"
              name="message"
              rows="6"
              placeholder="Message"
              onFocus={() => setMessageInputFocus(true)}
              onBlur={() => setMessageInputFocus(false)}
            />
          </div>
          <button className="bg-blue-400 border-blue-400 border-2 px-10 py-2 rounded-tl-[2rem] rounded-br-[2rem] text-xs text-white w-fit" type="submit">
            Send Message
          </button>
        </form>
        {/* Form Section */}

        <img className="w-[60%]" src={Background2} alt="" />
      </div>
    </div>
  );
};

export default Contact;
