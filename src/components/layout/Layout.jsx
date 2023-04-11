/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import LogoWhite from "../../assets/image/logoWhite.svg";
import Instagram from "../../assets/image/intagram.svg";
import Facebook from "../../assets/image/facebook.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CoppyRight from "./CoppyRight";
import Loading from "../common/Loading";
import ButtonCustom from "../common/ButtonCustom";

export default function Layout({ children, isLoading }) {
  return (
    <>
      <NavBar />
      <div className="w-full min-h-[calc(100vh-300px)]">
        {isLoading ? <Loading /> : children}
      </div>
      <div className="flex px-6 md:px-[5%] xl:px-[8%] 2xl:px-[10%] justify-between items-center py-10 bg-[#7854F7] flex-col lg:flex-row">
        <span className="uppercase text-white font-[600] text-xl lg:text-3xl inline-block lg:w-[380px]">
          ready to register for the exhibition?
        </span>
        <ButtonCustom
          className="w-full  max-w-[400px] mt-4 lg:mt-0"
          type="secondary"
        >
          Đăng kí tham dự triễn lãm
        </ButtonCustom>
      </div>
      <Footer />
      <CoppyRight />
    </>
  );
}
