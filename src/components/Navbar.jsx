"use client";

import { useState } from "react";

import Image from "next/image";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Methods", href: "#methods" },
    { name: "FAQs", href: "#faqs" },
  ];
  return (
    <nav className="relative p-4 lg:flex lg:items-center lg:justify-between">

      <div className="flex items-center justify-between">
        <div className="shrink-0">
          <Image
            src="/images/logo-redesign.png"
            alt="logo"
            width={250}
            height={100}
            className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-7 uppercase text-text-primary text-[12px] tracking-[1.35px]">
        <ul className="flex items-center gap-7">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-background-dark"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background active:bg-background-dark active:text-background transition-colors duration-300">
          Contact
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 w-full bg-background shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 uppercase text-text-primary text-[12px] tracking-[1.35px]">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors duration-300 hover:text-background-dark active:bg-background-dark active:text-background transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="uppercase rounded-full border px-6 py-3 hover:bg-background-dark hover:text-background"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
