/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";

export default function GalaDinner() {
  const [pageContent, setPageContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const responsePage = await Api.get("/pages/641c6116c9400103df954ea0");
      setPageContent(responsePage?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  console.log("pageContent", pageContent);

  const topPage = pageContent?.settings?.find(
    (item) => item?.name === "TOP_PAGE_GALA"
  );
  const contentFirst = pageContent?.settings?.find(
    (item) => item?.name === "GALA_CONTENT_FIRST"
  );
  const listContent = pageContent?.settings?.filter(
    (item) => item?.group === "GALA_CONTENT"
  );
  const listTextOfFirstContent= contentFirst?.textValue?.split("/");

  return (
    <Layout isLoading={isLoading}>
      <TopPage topPageContent={topPage} />
      <div className="mb-[100px]">
        <ContainerBg
          bgMargin="right"
          className={`my-8 py-12 md:mt-[100px] pr-6`}
          classNameBg="h-full mr-0"
          classNameChild={`flex flex-col md:flex-row gap-x-[40px] lg:gap-x-[100px]`}
        >
          <div className="w-full md:pr-[100px]">
            <p className="title-primary uppercase mb-6">
              Gala
              <br />
              dinner
            </p>
            <div className="flex gap-x-[60px] items-center justify-center md:justify-between flex-wrap gap-y-6 ">
              {contentFirst?.mediaValue?.map((item, index) => (
                <div key={index} className="w-[180px] h-[180px] bg-black rounded-full flex items-center justify-center flex-col hover:bg-[#7854F7] ">
                  <img
                    className="rounded-md  max-w-[70px] object-cover object-center"
                    src={getUrlImage(item?.url)}
                    alt=""
                  />
                  <span className="text-white inline-block mt-4 w-[100px] text-sm text-center">{listTextOfFirstContent[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </ContainerBg>
      </div>
      <div className="mb-[100px]">
        {listContent?.map((item, index) => (
          <ContainerBg
            key={index}
            bgMargin={`${index % 2 !== 0 ? "right" : "left"}`}
            className={`my-8 py-12 md:mt-[100px] ${
              index % 2 !== 0 ? "pr-6" : ""
            } `}
            classNameBg="h-full mr-0"
            classNameChild={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse pl-12"
            }  gap-x-[40px] lg:gap-x-[100px]`}
          >
            <img
              className="w-[100%] md:w-[40%]  rounded-md  object-cover object-center"
              src={getUrlImage(item?.mediaValue[0]?.url)}
              alt=""
            />
            <div
              className="md:w-[40%] w-full"
              dangerouslySetInnerHTML={{
                __html: item?.textValue?.replace(/\n/g, ""),
              }}
            />
          </ContainerBg>
        ))}
      </div>
    </Layout>
  );
}
