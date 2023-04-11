/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../assets/image/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Api from "@/config/api";
import { getUrlImage } from "@/utils/utils";

export default function NavBar() {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const [socials, setSocials] = useState([]);
  const [navbars, setNavbars] = useState([]);
  console.log("navbars", navbars);

  const getContentPage = async () => {
    const response = await Api.get("/headers");
    setNavbars(response?.data);
  };
  const getSocias = async () => {
    const res = await Api.get("/socias");
    setSocials(res?.data);
  };
  useEffect(() => {
    getContentPage();
    getSocias();
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (showNavbar) {
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "auto";
    }
  }, [showNavbar]);

  return (
    <nav className=" bg-white md:h-[180px] flex items-center  shadow-sm">
      <div className="container flex flex-col md:flex-row  items-center justify-between mx-auto">
        <div className="flex justify-between w-full md:w-auto  py-3 px-6 md:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              className="w-[50px] md:w-auto"
              alt="logo-b-plus"
            />
          </Link>
          <div
            className="block md:hidden"
            onClick={() => {
              setShowNavbar(!showNavbar);
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
          className={`flex justify-center md:flex-col md:items-end lg:flex-row lg:items-center z-50  w-full md:flex md:w-[76%] ${
            showNavbar ? "" : "hidden"
          } h-[calc(100vh-56px)] fixed md:relative md:h-auto bg-white top-[56px] md:top-0 `}
        >
          <ul className="flex flex-col px-0 lg:px-8 mt-14 mr-0 xl:mr-20 md:w-auto  md:flex-row md:space-x-8 md:mt-0 md:text-sm space-y-10 md:space-y-0 ">
            {navbars?.map((menu, menuIndex) => (
              <li
                key={menuIndex}
                className="relative flex flex-col text-black md:cursor-pointer select-none  navbar-item "
                onClick={() => {
                  if (menu?.Path) {
                    router.push(menu?.Path);
                  }
                }}
              >
                <div className="flex  ">
                  <span className="leading-5 text-base">{menu?.Name}</span>
                  {menu?.children?.length > 0 && (
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
                {/* {menu?.child && activeIndex === menuIndex && ( */}
                <div className="z-10  font-normal w-auto navbar-item-child">
                  <div className="w-full h-4 absolute  z-20"></div>
                  <ul className="text-sm relative md:absolute mt-4 bg-[#EAEAEA] rounded-[10px]  md:w-[160px]">
                    {menu?.children?.map((menuChild) => (
                      <li
                        key={menuChild.Name}
                        className="block text-sm px-4 py-3 md:cursor-pointer hover:bg-slate-200 text-black  first:rounded-t-[10px] last:rounded-b-[10px]  "
                        onClick={(e) => {
                          e.stopPropagation();
                          if (menuChild?.Path) {
                            router.push(menuChild?.Path);
                          }
                        }}
                      >
                        {menuChild?.Name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* )} */}
              </li>
            ))}
          </ul>
          <div className="md:flex gap-x-2 hidden w-fit md:mt-4 lg:mt-0">
            {socials?.map((item, index) => (
              <a href={item?.sociaUrl} key={index} target="_blank">
                <img
                  className="w-6 h-6 object-contain"
                  key={index}
                  src={getUrlImage(item?.iconPrymary?.url)}
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
