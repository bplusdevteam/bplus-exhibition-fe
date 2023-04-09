/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";
import Slider from "react-slick";
import ButtonCustom from "@/components/common/ButtonCustom";
import { useRouter } from "next/router";

export default function Program() {
  const [pageContent, setPageContent] = useState();
  const [programs, setPrograms] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const promisePage = Api.get("/pages/64325f4dc1f32b0024a279f1");
      const promiseProgram = Api.get("/programs");
      // eslint-disable-next-line no-undef
      const [responsePage, responseProgram] = await Promise.all([
        promisePage,
        promiseProgram,
      ]);
      setPageContent(responsePage?.data);
      setPrograms(responseProgram?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  const topPage = pageContent?.settings?.find(
    (item) => item?.name === "TOP_PAGE_PROGRAMS"
  );

  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: false,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  console.log("prog", programs);

  return (
    <Layout isLoading={isLoading}>
      <TopPage topPageContent={topPage} />
      <div className="mb-[100px]">
        <ContainerBg
          bgMargin="right"
          className="my-6 py-12 md:mt-[100px]"
          classNameBg=" mr-0"
          classNameChild="flex flex-col mt-[70px]"
        >
          <Slider
            {...settings}
            ref={sliderRef}
            className="relative slick-program "
            prevArrow={<></>}
            nextArrow={<></>}
            useTransform={true}
          >
            {programs?.map((item, index) => (
              <div
                key={index}
                className="!w-[90%] md:!w-[220px] h-[500px] lg:h-[650px] relative cursor-pointer item-slide-program"
              >
                <img
                  className="w-full h-full object-cover object-center "
                  src={getUrlImage(item?.mediaValue[0]?.url)}
                  alt=""
                />
                <div
                  className="blur-img absolute  top-[200px] bottom-0 w-full left-0  flex gap-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, white, rgb(255 255 255 / 0%))",
                  }}
                ></div>
                <div className="absolute bottom-0  p-6 slide-program-content">
                  <h2 className="uppercase font-bold ">{item?.name}</h2>
                  <p className="text-sm mt-5">{item?.textValue}</p>
                  <ButtonCustom
                    type="secondary"
                    className="my-10 w-[130px] !h-[42px] text-sm !px-2"
                    onClick={() => {
                      if (item.slugPageDetail) {
                        router.push(item.slugPageDetail);
                        return;
                      }
                      router.push(`Program/${item.id}`);
                    }}
                  >
                    Chi tiết
                  </ButtonCustom>
                </div>
              </div>
            ))}
          </Slider>
        </ContainerBg>
      </div>
    </Layout>
  );
}
