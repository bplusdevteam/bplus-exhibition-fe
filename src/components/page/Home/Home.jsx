/* eslint-disable @next/next/no-img-element */
import ButtonCustom from "@/components/common/ButtonCustom";
import { useEffect, useRef, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import SectionCountDown from "./components/SectionCountDown";
import SectionOrators from "./components/SectionOrators";
import SectionLogo from "./components/SectionLogo";
import ModalRegisterExhibition from "./components/ModalRegisterExhibition";

export default function Home() {
  const [pageContent, setPageContent] = useState();
  const [orators, setOrators] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState();

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const promisePage = Api.get("/pages/64089aacbe9c9f2b1eb86dd5");
      const promiseOrator = Api.get("/orators");
      // eslint-disable-next-line no-undef
      const [responsePage, responseOrator] = await Promise.all([
        promisePage,
        promiseOrator,
      ]);
      setPageContent(responsePage?.data);
      setOrators(responseOrator?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getContentPage();
  }, []);

  const contentHeader = pageContent?.settings?.find(
    (item) => item?.name === "HEADER_CONTENT"
  );
  const videoHeader = pageContent?.settings?.find(
    (item) => item?.name === "HEADER_VIDEO_URL"
  );
  const contentCountdown = pageContent?.settings?.find(
    (item) => item?.name === "COUNT_DOWN_END"
  );
  const logoContent = pageContent?.settings?.find(
    (item) => item?.name === "SPONSO_LOGO"
  );

  return (
    <Layout isLoading={isLoading}>
      <div
        className="w-full px-6  md:px-[5%] xl:px-[8%] 2xl:px-[10%] gap-x-[100px] py-[40px] md:py-[90px] flex md:flex-row flex-col-reverse"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 186, 73, 0.5) 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      >
        <div className="w-full md:w-[33%] mt-6 flex flex-col">
          <div
            dangerouslySetInnerHTML={{
              __html: contentHeader?.textValue?.replace(/\n/g, ""),
            }}
          />
          <ButtonCustom className="mt-6 md:mt-12 2xl:mt-14 w-[267px] text-base self-center md:self-auto">
            Start video
          </ButtonCustom>
        </div>
        <div className="w-full md:w-[60%]">
          <video
            src={videoHeader?.textValue || videoHeader?.MediaValue || ""}
            controls="controls"
            className="align-baseline w-full aspect-[887/556] rounded-[10px]"
          ></video>
        </div>
      </div>
      <SectionCountDown contentCountdown={contentCountdown} />
      <div className="flex w-full justify-center mt-8 xl:mt-14">
        <ButtonCustom
          className="xl:w-[500px]"
          onClick={() => setOpenModalRegister(true)}
        >
          Đăng kí tham dự triễn lãm
        </ButtonCustom>
        <ModalRegisterExhibition
          openModalRegister={openModalRegister}
          onClose={() => {
            setOpenModalRegister(false);
          }}
        />
      </div>
      <SectionOrators orators={orators} />
      <SectionLogo logoContent={logoContent} />
    </Layout>
  );
}
