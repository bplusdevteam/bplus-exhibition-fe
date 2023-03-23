import ContainerBg from "@/components/common/ContainerBg";
import { getUrlImage } from "@/utils/utils";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import arNext from "../../../../assets/image/arNext.svg";
import arPrev from "../../../../assets/image/arPrev.svg";
/* eslint-disable @next/next/no-img-element */
export default function SectionLogo({ logoContent }) {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <ContainerBg
      bgMargin="left"
      className="my-14 pt-12 pb-8 md:pb-10 xl:pb-16 overflow-hidden"
      classNameChild="!pr-0"
      classNameBg="h-full"
    >
      <div className="">
        <h1 className="text-3xl text-[600] uppercase md:pl-[180px] text-right mr-4 md:mr-0 md:text-left">
          sponsor logo
        </h1>
        <div className="slide-logo mt-5 md:mt-10">
          <Slider
            {...settings}
            ref={sliderRef}
            className="relative ml-8 md:ml-[180px]"
            prevArrow={<></>}
            nextArrow={<></>}
          >
            {logoContent?.mediaValue?.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    sliderRef?.current?.slickNext();
                  }}
                  className={`w-[140px] md:w-[190px] aspect-square bg-white rounded-[10px] flex items-center justify-center mr-1`}
                >
                  <img
                    className="w-[90px]"
                    src={getUrlImage(item.url)}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" flex pl-[80px] mt-6 justify-end md:justify-start mr-4 md:mr-0">
          <Image
            onClick={() => {
              sliderRef?.current?.slickPrev();
            }}
            src={arNext}
            alt=""
            className="mr-5 w-9"
          />
          <Image
            onClick={() => {
              sliderRef?.current?.slickNext();
            }}
            className="w-9"
            src={arPrev}
            alt=""
          />
        </div>
      </div>
    </ContainerBg>
  );
}
