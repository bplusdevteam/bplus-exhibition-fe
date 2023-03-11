/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Logo from "../..//assets/image/logo.svg";
import Instagram from "../..//assets/image/intagram.svg";
import Facebook from "../..//assets/image/facebook.svg";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const navbars = [
    {
      id: 1,
      name: "CÂU CHUYỆN B+",
      url: "#",
    },
    {
      id: 2,
      name: "CHƯƠNG TRÌNH",
      url: "#",
      child: [
        {
          name: "OPENING",
          url: "#",
          parentId: 2,
        },
        {
          name: "SHOWTIME",
          url: "#",
          parentId: 2,
        },
        {
          name: "TALKSHOW",
          url: "#",
          parentId: 2,
        },
        {
          name: "WORKSHOP",
          url: "#",
          parentId: 2,
        },
        {
          name: "GALA DINNER",
          url: "#",
          parentId: 2,
        },
      ],
    },
    {
      id: 3,
      name: "CUỘC THI",
      url: "#",
    },
    {
      id: 4,
      name: "ART GALLERY",
      url: "#",
    },
  ];

  return (
    <nav className=" bg-white md:h-[210px] flex items-center">
      <div className="container flex flex-col md:flex-row  items-center justify-between mx-auto mt-2">
        <div className="flex justify-between w-full md:w-auto md:shadow-none shadow-sm py-3 px-6 md:px-0">
          <a href="#" className="flex items-center">
            <Image src={Logo} className="w-[60px] md:w-auto" alt="logo-b-plus" />
          </a>
          <div 
            className="block md:hidden"
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`flex justify-center md:flex-col md:items-end lg:flex-row lg:items-center  w-full md:flex md:w-3/4 ${
            navbar ? "" : "hidden"
          } h-[calc(100vh-60px)] absolute md:relative md:h-auto bg-white top-[60px] md:top-0 `}
        >
          <ul className="flex flex-col px-0 lg:px-8 mt-4 mr-0 xl:mr-20 md:w-auto  md:flex-row md:space-x-8 md:mt-0 md:text-sm space-y-4 md:space-y-0 ">
            {navbars?.map((menu, menuIndex) => (
              <li
                key={menuIndex}
                className="relative flex flex-col text-black md:cursor-pointer select-none "
                onClick={() => {
                  setActiveIndex(menuIndex === activeIndex ? null : menuIndex);
                }}
              >
                <div className="flex ">
                  <span className="leading-5 text-base">{menu?.name}</span>
                  {menu?.child && (
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
                {menu?.child && activeIndex === menuIndex && (
                  <div className="z-10 relative animate-[toTop_1s_ease-in-out] md:absolute bg-[#EAEAEA] md:top-8  font-normal  w-[160px] rounded-[10px]">
                    <ul className="text-sm">
                      {menu?.child.map((menuChild) => (
                        <li
                          key={menuChild.name}
                          className="block text-sm px-4 py-3 md:cursor-pointer hover:bg-slate-200 text-black  first:rounded-t-[10px] last:rounded-b-[10px]"
                        >
                          {menuChild?.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="md:flex gap-x-2 hidden w-fit md:mt-4 lg:mt-0">
            <Image src={Instagram} alt="logo-b-plus" />
            <Image src={Facebook} alt="logo-b-plus" />
            <Image src={Instagram} alt="logo-b-plus" />
          </div>
        </div>
      </div>
    </nav>
  );
}
