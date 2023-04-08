import ContainerBg from "@/components/common/ContainerBg";
import CountDownCircle from "@/components/common/CountDownCircle";
import PlusBg from "@/components/common/PlusBg";
import { API_URL } from "@/config/api";
import { getUrlImage } from "@/utils/utils";

/* eslint-disable @next/next/no-img-element */
export default function SectionOrators({ orators }) {
  const listCountDown = ["days", "hours", "minutes", "seconds"];
  return (
    <ContainerBg
      bgMargin="right"
      className="my-6 pt-8 md:mt-14 relative"
      classNameChild="flex flex-col items-center"
    >
      <div className=" w-full max-w-[1030px]">
        <h1 className="w-[180px] text-[30px] leading-9 font-[600]">
          MAIN STAGE HIGHLIGHTS
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-y-12 sm:gap-x-16  justify-center sm:justify-start mt-4 max-w-[1030px] w-full">
        {orators?.map((item, index) => (
          <div
            key={index}
            className={`w-[100%] sm:w-[26%] xl:w-[28%] sm:max-w-[300px] xl:mb-3 ${
              (index + 2) % 3 === 0 ? "sm:-mt-[80px]" : "sm:mt-0"
            } max-w-[320px] sm:max-w-auto  `}
          >
            <img
              className="w-full aspect-square rounded-[10px]"
              src={getUrlImage(item?.avartarUrl[0]?.url)}
              alt=""
            />
            <h3 className="text-[#272D4E] text-[20px] my-1">{item?.name}</h3>
            <p className="text-[#8C8C8C] text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
      <PlusBg className="absolute bottom-20 right-[100px]"/>
    </ContainerBg>
  );
}
