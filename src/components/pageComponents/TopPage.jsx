/* eslint-disable @next/next/no-img-element */
import { getUrlImage } from "@/utils/utils";
import ButtonCustom from "../common/ButtonCustom";
import ListDot from "../common/ListDot";

export default function TopPage({ topPageContent, onClickBtn }) {
  return (
    <div className="w-full h-[400px]  md:h-[500px] relative flex items-center  flex-col">
      <img
        className="absolute mix-blend-multiply -z-10 w-full h-full object-cover object-center"
        src={getUrlImage(topPageContent?.mediaValue[0]?.url)}
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
        Đăng kí tham dự triễn lãm
      </ButtonCustom>
      <ListDot className="absolute bottom-[-80px] right-[100px]" />
    </div>
  );
}
