/* eslint-disable @next/next/no-img-element */
import ButtonCustom from "@/components/common/ButtonCustom";
import { useEffect, useRef, useState } from "react";
import Api from "@/config/api";
import Layout from "../../layout/Layout";
import SectionCountDown from "./components/SectionCountDown";
import SectionOrators from "./components/SectionOrators";
import SectionLogo from "./components/SectionLogo";
import ModalRegisterExhibition from "./components/ModalRegisterExhibition";
import ListDot from "@/components/common/ListDot";

export default function Home() {
  const [pageContent, setPageContent] = useState();
  const [orators, setOrators] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const getContentPage = async () => {
    try {
      setIsLoading(true);
      const promisePage = Api.get("/pages/643103d4c1f32b0024a27941");
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
  const videoHeader =
    pageContent?.settings?.find((item) => item?.name === "HEADER_VIDEO_URL") ||
    {};
  const contentCountdown = pageContent?.settings?.find(
    (item) => item?.name === "COUNT_DOWN_END"
  );
  const logoContent = pageContent?.settings?.find(
    (item) => item?.name === "SPONSO_LOGO"
  );
  let urlYoutube = "";
  const YOUTUBE_URL_EMBED = "https://youtube.com/embed/";

  if (videoHeader?.textValue) {
    if (videoHeader?.textValue.includes("/watch?v=")) {
      urlYoutube = videoHeader?.textValue?.replace(
        /^.*\/watch\?v=/i,
        YOUTUBE_URL_EMBED
      );
    } else {
      const lastSlashIndex = videoHeader?.textValue?.lastIndexOf("/");
      urlYoutube = [
        YOUTUBE_URL_EMBED,
        videoHeader?.textValue.slice(lastSlashIndex + 1),
      ].join("");
    }
  }

  return (
    <Layout isLoading={isLoading}>
      <div
        className="w-full padding-container gap-x-[100px] py-[40px] md:py-[90px] flex md:flex-row flex-col-reverse relative"
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
          {/* <div>
            <p className="home-title-content-header">Building exactly the eCommerce website you want.</p>
            <span className="home-des-content-header">
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </span>
          </div> */}
          <ButtonCustom className="mt-6 md:mt-12 2xl:mt-14 w-[267px] text-base self-center md:self-auto">
            Start video
          </ButtonCustom>
        </div>
        <div className="w-full md:w-[60%]">
          <iframe
            title="youtube"
            width="100%"
            className="align-baseline w-full aspect-[887/556] rounded-[10px]"
            src={urlYoutube}
            allowFullScreen
          />
        </div>
        <ListDot className="absolute bottom-[30px] right-[60px]" />
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
