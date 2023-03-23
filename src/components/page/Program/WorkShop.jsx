/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";

export default function WorkShop() {
  const [pageContent, setPageContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const responsePage = await Api.get("/pages/641c55c91965c682f9eb1079");
      setPageContent(responsePage?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  const topPage = pageContent?.settings?.find(
    (item) => item?.name === "TOP_PAGE_WORK_SHOP"
  );
  const listContent = pageContent?.settings?.filter(
    (item) => item?.group === "WORK_SHOP_CONTENT"
  );

  return (
    <Layout isLoading={isLoading}>
      <TopPage topPageContent={topPage} />
      <div className="mb-[100px]">
        {listContent?.map((item, index) => (
          <ContainerBg
            key={index}
            bgMargin={`${index % 2 === 0 ? "right" : "left"}`}
            className={`my-8 py-12 md:mt-[100px] ${
              index % 2 === 0 ? "pr-6" : ""
            } `}
            classNameBg="h-full mr-0"
            classNameChild={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse pl-12"
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
