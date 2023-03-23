/* eslint-disable @next/next/no-img-element */
import Api from "@/config/api";
import Image from "next/image";
import LogoWhite from "../../assets/image/logoWhite.svg";
import ImageExam from "../../assets/image/map.png";

export default function Footer() {
  
  return (
    <footer className="flex justify-between flex-col md:flex-row  px-6 md:px-[5%] xl:px-[8%] 2xl:px-[10%] bg-black text-white py-[56px]">
      <div className=" flex flex-col w-full md:w-[430px] text-lg">
        <Image src={LogoWhite} alt="logo-bplush" />
        <p className="my-4 md:my-8">
          Bplusfurniture is one of the fastest-growing eCommerce communities.
          We’re proud that the helpfulness of the community and a wealth of
          online resources are frequently cited as reasons our users love it.
        </p>
        <span>Email: bplusfurniture@info.com</span>
        <span>Hotline: 0908 999 999</span>
        <span>Website: www.bplusfurniture.com.vn</span>
      </div>
      <div className="w-full md:w-[500px] h-[250px] md:h-[300px] mt-4 md:mt-0">
        <Image
          src={ImageExam}
          alt="logo-bplush"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
    </footer>
  );
}
