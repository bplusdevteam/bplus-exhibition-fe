/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";

export default function ArtGallery() {
  const [pageContent, setPageContent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const responsePage = await Api.get("/pages/641c6f15c9400103df954eaf");
      setPageContent(responsePage?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  const topPage = pageContent?.settings?.find(
    (item) => item?.name === "TOP_PAGE_ARTGALLERY"
  );
  const listContent = pageContent?.settings?.filter(
    (item) => item?.group === "ARTGALLERY_CONTENT"
  );

  let listContenttemp;
  if (listContent?.length) {
    listContenttemp = Array(4).fill(listContent[0]);
  }

  return (
    <Layout isLoading={isLoading}>
      <TopPage topPageContent={topPage} />
      <div className="mb-[100px]">
        <ContainerBg
          bgMargin="right"
          className={`my-8 py-12 md:mt-[100px]`}
          classNameBg=" mr-0"
          classNameChild={`flex flex-col md:flex-row flex-wrap justify-between w-full mt-[100px] gap-y-10`}
        >
          {listContenttemp?.map((item, index) => (
            <div key={index} className="w-full md:w-[48%]  ">
              <img
                className="w-full  object-cover object-center  "
                src={getUrlImage(item?.mediaValue[0]?.url)}
                alt=""
              />
              <div
                className="mt-6"
                dangerouslySetInnerHTML={{
                  __html: item?.textValue?.replace(/\n/g, ""),
                }}
              />
            </div>
          ))}
        </ContainerBg>
      </div>
    </Layout>
  );
}
