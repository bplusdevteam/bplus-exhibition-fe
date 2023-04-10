import CountDownCircle from "@/components/common/CountDownCircle";
import { API_URL } from "@/config/api";
import { getUrlImage } from "@/utils/utils";

/* eslint-disable @next/next/no-img-element */
export default function SectionCountDown({ contentCountdown }) {
  const listCountDown = ["days", "hours", "minutes", "seconds"];
  
  return (
    <div className="w-full h-fit md:max-h-[400px] padding-container ">
      <div className="w-full h-full relative">
        <div className="w-full h-full bg-[#7854F7] absolute top-0  mix-blend-multiply"></div>
        <img
          src={
            contentCountdown?.mediaValue?.length > 0
              ? `${API_URL}${contentCountdown?.mediaValue[0]?.url}`
              : ""
          }
          alt=""
          className="w-full h-full absolute top-0  object-cover rounded-[10px] mix-blend-multiply"
        />
        <div className="flex sm:flex-row  flex-wrap  h-full items-center justify-center w-full lg:space-x-8 pb-16 pt-20 gap-y-6 md:gap-y-10 gap-x-6 lg:gap-x-0">
          {contentCountdown &&
            listCountDown.map((item, index) => (
              <div
                key={item}
                className={`w-[80%] sm:w-[40%] lg:w-auto flex flex-col justify-center md:items-center ${
                  index === 0 || index === 2 ? "items-start" : "items-end"
                } ${ index === 2 ? "sm:order-4" : index === 3 ? "sm:order-3" : `sm:order-${index + 1}`}
                  lg:order-none`}
              >
                <CountDownCircle
                  typeTime={item}
                  time={contentCountdown?.textValue}
                />
                <div className="mt-8 md:mt-10 z-30 ml-6">
                  <img src={getUrlImage(contentCountdown?.mediaValue[index+1]?.url)} alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
