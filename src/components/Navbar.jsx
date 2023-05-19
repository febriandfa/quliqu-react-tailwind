import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 absolute top-0 z-50 flex items-center justify-between px-16">
      {/* Logo Section */}
      <a href="#home" className="font-semibold text-blue-400 text-xl tracking-widest">
        Quliqu<span className="text-gray-950">.</span>
      </a>
      {/* Logo Section */}

      {/* Menu Section */}
      <ul className="flex justify-evenly w-2/5 text-sm">
        <li>
          <a href="#home" className="hover:font-semibold hover:border-b-2 border-gray-950">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:font-semibold hover:border-b-2 border-gray-950">
            About Us
          </a>
        </li>
        <li>
          <a href="#service" className="hover:font-semibold hover:border-b-2 border-gray-950">
            Service
          </a>
        </li>
        <li>
          <a href="#project" className="hover:font-semibold hover:border-b-2 border-gray-950">
            Project
          </a>
        </li>
      </ul>
      {/* Menu Section */}
    </nav>
  );
};

export default Navbar;
