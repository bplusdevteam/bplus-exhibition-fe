/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import { getUrlImage } from "@/utils/utils";
import ContainerBg from "@/components/common/ContainerBg";
import TopPage from "@/components/pageComponents/TopPage";
import { useRouter } from "next/router";
import ModalQuestionOrators from "./components/ModalQuestionOrators";

export default function ProgramDetail() {
  const [programDetail, setProgramDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const router = useRouter();

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const responseProgram = await Api.get(`/programs/${router?.query?.id}`);
      setProgramDetail(responseProgram?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (router?.query?.id) {
      getContentPage();
    }
  }, [router?.query?.id]);

  const topPage = programDetail?.pageDetailProgram?.TOP_PAGE;
  const programAndOrators = programDetail?.pageDetailProgram?.ProgramAndOrators;

  const getWidthImage = (length) => {
    const width = Number(95 / length);
    const gap = Number(16 / (length - 1) / length);

    return length >= 2
      ? `calc(${width.toString()}% - ${gap.toString()}px)`
      : " w-full";
  };

  return (
    <>
      <Layout isLoading={isLoading}>
        <TopPage
          topPageContent={topPage}
          onClickBtn={() => {
            setShowModalQuestion(true);
          }}
        />
        <div className="mb-[100px]">
          {programAndOrators?.map((item, index) => (
            <ContainerBg
              key={index}
              bgMargin={`${index % 2 === 0 ? "right" : "left"}`}
              className={`my-6 py-12 md:mt-[100px] ${
                index % 2 === 0 ? "pr-6" : ""
              } `}
              classNameBg="mr-0"
            >
              <div
                className={`w-full mt-4 mb-6 md:mb-12 ${
                  index % 2 !== 0 ? "text-end" : ""
                } `}
              >
                <span className="text-2xl">Talkshow 01 / 18-03-23</span>
                <h2 className="uppercase text-3xl font-bold">
                  Industrial in the future
                </h2>
              </div>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }  gap-x-[30px] lg:gap-x-[80px]`}
              >
                <div
                  className={`flex w-[100%] ${
                    item?.mediaValue?.length >= 2 ? "md:w-[50%]" : "md:w-[40%]"
                  } gap-4 flex-wrap ${index % 2 !== 0 ? "justify-end" : ""} `}
                >
                  {item?.mediaValue?.map((image, index2) => (
                    <img
                      style={{
                        width: `${getWidthImage(item?.mediaValue?.length)}`,
                      }}
                      key={index2}
                      className={`max-w-[370px] min-w-[140px] rounded-md  object-cover object-center`}
                      src={getUrlImage(image?.url)}
                      alt=""
                    />
                  ))}
                </div>
                <div
                  className="flex-1 md:max-w-[40%] max-w-full"
                  dangerouslySetInnerHTML={{
                    __html: item?.textValue?.replace(/\n/g, ""),
                  }}
                />
              </div>
            </ContainerBg>
          ))}
        </div>
      </Layout>
      <ModalQuestionOrators
        openModalRegister={showModalQuestion}
        onClose={() => {
          setShowModalQuestion(false);
        }}
      />
    </>
  );
}
