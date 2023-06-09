/* eslint-disable @next/next/no-img-element */
import { getUrlImage } from "@/utils/utils";
import Image from "next/image";
import ButtonCustom from "../common/ButtonCustom";
import ListDot from "../common/ListDot";

export default function TopPage({ topPageContent, onClickBtn,buttonText }) {
  return (
    <div className="w-full h-[400px]  md:h-[500px] relative flex items-center  flex-col">
      <Image
        className="absolute mix-blend-multiply -z-10 w-full h-full object-cover object-center"
        src={getUrlImage(topPageContent?.mediaValue[0]?.url)}
        fill="fill"
        placeholder="blur"
        blurDataURL={`/_next/image?url=${getUrlImage(topPageContent?.mediaValue[0]?.url)}&w=16&q=1`}
        alt=""
      />
      <div className="absolute mix-blend-multiply -z-10 w-full h-full bg-[#8C8C8C]"></div>
      <div
        className="text-[32px] uppercase text-center font-[600] text-white mt-[90px] md:mt-[130px]"
        dangerouslySetInnerHTML={{
          __html: topPageContent?.textValue?.replace(/\n/g, ""),
        }}
      />
      <ButtonCustom
        className="!absolute bottom-[60px] md:bottom-[80px]"
        onClick={onClickBtn}
      >
        {buttonText || ""}
       
      </ButtonCustom>
      <ListDot className="absolute bottom-[-80px] right-[100px]" />
    </div>
  );
}
