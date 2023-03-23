/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import LogoCoppyRight from "../../assets/image/logoCoppyRight.png";
import Instagram from "../../assets/image/intagram.svg";
import Facebook from "../../assets/image/facebook.svg";
import { useEffect, useState } from "react";
import Api from "@/config/api";
import { getUrlImage } from "@/utils/utils";

export default function CoppyRight() {
  const [socias, setSocias] = useState();

  const getSocias = async () => {
    const res = await Api.get("/socias");
    setSocias(res?.data);
  };

  useEffect(() => {
    getSocias();
  }, []);

  return (
    <>
      <div className="py-2 md:py-4 flex-row-reverse md:flex-row bg-white flex justify-between items-center px-2 md:px-[5%] xl:px-[8%] 2xl:px-[10%] relative">
        <div className="flex space-x-2 ld:space-x-6">
          {socias?.map((item, index) => (
            <img
              className="w-5 h-5 object-contain"
              key={index}
              src={getUrlImage(item?.iconSecondary?.url)}
              alt=""
            />
          ))}
        </div>
        <div className="text-xs text-[#272D4E] text-center absolute left-1/2  -translate-x-1/2 hidden md:block ">
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </div>
        <div>
          <Image src={LogoCoppyRight} alt="" />
        </div>
      </div>
      <div className="text-[10px]  text-[#272D4E] text-center md:hidden  ">
        COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
      </div>
    </>
  );
}
