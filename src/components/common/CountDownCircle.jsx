/* eslint-disable @next/next/no-img-element */

import { useCountdown } from "@/utils/useCountTime";
import { Button } from "@material-tailwind/react";
const configCountDown = [
  {
    type: "days",
    rotate: 360 / (60 * 60 * 60 * 24),
    baseNumberRay: 60 * 60 * 24,
  },
  {
    type: "hours",
    rotate: 360 / (60 * 60 * 60),
    baseNumberRay: 60 * 60,
  },
  {
    type: "minutes",
    rotate: 360 / (60 * 60),
    baseNumberRay: 60,
  },

  {
    type: "seconds",
    rotate: 360 / 60,
    baseNumberRay: 1,
  },
];

export default function CountDownCircle({
  time,
  typeTime = "seconds",
  numberRay = 70,
}) {
  const indexConfigType = configCountDown.findIndex(
    (item) => item.type === typeTime
  );
  const configType = configCountDown[indexConfigType];
  const timeCounts = useCountdown(time);
  const totalSeconds = configType.baseNumberRay * timeCounts[indexConfigType];
  let rot = 0;
  const formatNumberTime = (number) => {
    if (number < 0) {
      return `00`;
    }
    if (number < 10) {
      return `0${Math.floor(number)}`;
    }
    return Math.floor(number);
  };

  return (
    <div className="relative m-2">
      <div
        className="w-[130px] h-[130px] ml-6 rounded-full border-[8px] border-[#fff] relative"
        style={{
          transform: `rotate(${
            Math.floor(totalSeconds < 0 ? 0 : totalSeconds) * configType.rotate
          }deg)`,
        }}
      >
        <div className="w-4 h-4 bg-black rounded-full absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-12px]"></div>
        <div className="w-[10px] h-[10px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-9px] "></div>
      </div>
      <div className="w-[130px] top-0 -translate-y-[2px] -rotate-[98deg] h-[130px] rounded-full ml-6 absolute">
        <div className="absolute w-full h-full top-0 rotate-[98deg] flex items-center justify-center ">
          <span className="text-[50px] text-[#E5DBBD]">
            {formatNumberTime(timeCounts[indexConfigType])}
          </span>
        </div>
        {Array(80)
          .fill()
          .map((item, index) => {
            rot = rot + 360 / numberRay;
            return (
              <div
                key={index}
                style={{
                  transform: `rotate(${rot}deg) translate(85px) rotate(90deg)`,
                }}
                className={`w-[1px]  absolute left-[48%] top-[48%]  h-2 bg-white ${
                  (index / numberRay) * 60 < timeCounts[indexConfigType]
                    ? "hidden"
                    : "block"
                }`}
              ></div>
            );
          })}
      </div>
    </div>
  );
}
