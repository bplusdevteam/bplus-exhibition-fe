/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";
import ButtonCustom from "@/components/common/ButtonCustom";
import PlusBg from "@/components/common/PlusBg";

export default function Competition() {
  const [pageContent, setPageContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const responsePage = await Api.get("/pages/641fe993aa00af1e9a83c3bc");
      setPageContent(responsePage?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  const topPage = pageContent?.settings?.find(
    (item) => item?.name === "TOP_PAGE_COMPETITION"
  );

  const industrialContent = pageContent?.settings?.find(
    (item) => item?.name === "INDUSTRIAL_DESIGN"
  );
  const middleContent = pageContent?.settings?.find(
    (item) => item?.name === "MIDDLE_CONTENT_COMPETITION"
  );

  const bottomContent = pageContent?.settings?.find(
    (item) => item?.name === "BOTTOM_CONTENT_COMPETITION"
  );

  return (
    <Layout isLoading={isLoading}>
      <TopPage topPageContent={topPage} />
      <div className="md:my-[100px]">
        <ContainerBg
          bgMargin="right"
          className="relative"
          classNameBg=" mr-0"
          classNameChild={`flex flex-col md:flex-row flex-wrap  w-full  gap-y-10`}
        >
          <div className="flex flex-col w-full md:w-[550px] items-end">
            <div className="relative">
              <img
                className="w-[320px]"
                src={getUrlImage(industrialContent?.mediaValue[0]?.url)}
                alt=""
              />
              <div className="absolute bottom-0 bg-[#999FE3] w-[300px] h-[300px] -z-10 rounded-sm"></div>
            </div>
            <div className=" relative w-full z-10 md:-mt-[80px] pl-8">
              <img
                className="w-[380px] ml-6"
                src={getUrlImage(industrialContent?.mediaValue[1]?.url)}
                alt=""
              />
              <div className="absolute bottom-0 bg-[#FED892] w-[250px] h-[200px] md:h-[250px] -z-10 rounded-sm"></div>
            </div>
            <div className=" relative w-full flex justify-center -mt-10 md:-mt-[150px] z-20 pl-[100px]">
              <img
                className="w-[150px]"
                src={getUrlImage(industrialContent?.mediaValue[2]?.url)}
                alt=""
              />
              <div className="absolute bottom-0 bg-[#F47B9E] w-[200px] h-[180px] -z-10 rounded-sm"></div>
            </div>
          </div>
          <div
            className="md:mt-[100px] md:px-10 flex-1"
            dangerouslySetInnerHTML={{
              __html: industrialContent?.textValue?.replace(/\n/g, ""),
            }}
          />
          <PlusBg className="absolute bottom-0 right-[100px]"/>

        </ContainerBg>
      </div>
      <div className="padding-container">
        <div className="md:w-full h-[320px] relative mb-[50px] md:mb-[100px] -mx-6 md:-mx-0">
          <img
            className="w-full h-full object-cover object-center"
            src={getUrlImage(middleContent?.mediaValue[0]?.url)}
            alt=""
          />
          <div className="w-full h-full absolute flex items-center justify-center z-10 top-0">
            <ButtonCustom className="my-10">
              Đăng kí tham dự cuộc thi
            </ButtonCustom>
          </div>
        </div>
        <div className="flex mb-[100px] gap-x-20 flex-col md:flex-row ">
          <img className="max-h-[320px] w-full  md:w-[40%]" src={getUrlImage(bottomContent?.mediaValue[0]?.url)} alt="" />
          <div
            className="w-full md:w-[60%] mt-6 md:mt-0"
            dangerouslySetInnerHTML={{
              __html: bottomContent?.textValue?.replace(/\n/g, ""),
            }}
          />
        </div>
      </div>
    </Layout>
  );
}