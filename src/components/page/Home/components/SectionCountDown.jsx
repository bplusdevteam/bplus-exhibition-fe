import CountDownCircle from "@/components/common/CountDownCircle";
import { API_URL } from "@/config/api";

/* eslint-disable @next/next/no-img-element */
export default function SectionCountDown({ contentCountdown }) {
  const listCountDown = ["days", "hours", "minutes", "seconds"];
  return (
    <div className="w-full h-fit md:max-h-[400px] lg:h-[250px] padding-container ">
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
        <div className="flex  sm:flex-col lg:flex-row sm:max-h-[500px] flex-wrap  h-full items-center justify-center w-full lg:space-x-8 py-10 gap-y-12 gap-x-6 lg:gap-x-0">
          {contentCountdown &&
            listCountDown.map((item, index) => (
              <div
                key={item}
                className={`w-[80%] sm:w-[40%] lg:w-auto flex items-center ${
                  index === 0 || index === 2 ? "justify-start" : "justify-end"
                } ${ index === 2 ? "sm:order-4" : index === 3 ? "sm:order-3" : `sm:order-${index + 1}`}
                  lg:order-none`}
              >
                <CountDownCircle
                  typeTime={item}
                  time={contentCountdown?.textValue}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
