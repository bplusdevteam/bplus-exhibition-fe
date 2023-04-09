/* eslint-disable @next/next/no-img-element */
import Api from "@/config/api";
import { getUrlImage } from "@/utils/utils";
import { useEffect, useState } from "react";
import MyMapComponent from "../common/Map";

export default function Footer() {
  const [infoAddress, setInfoAddress] = useState();
  const [dataFooter, setDataFooter] = useState();
  const getInfoMap = async () => {
    if (dataFooter) {
      const infoMap = await Api.get(
        `/geocode/json?address=${dataFooter?.Address}&key=${process.env.KEY_MAP}`,
        {},
        "https://maps.googleapis.com/maps/api"
      );
      setInfoAddress(infoMap?.data?.results[0]);
    }
  };

  const getDataFooter = async () => {
    const res = await Api.get("/footer");
    setDataFooter(res?.data);
  };

  useEffect(() => {
    getInfoMap();
  }, [dataFooter]);

  useEffect(() => {
    getDataFooter();
  }, []);

  return (
    <footer className="flex justify-between flex-col md:flex-row  px-6 md:px-[5%] xl:px-[8%] 2xl:px-[10%] bg-black text-white py-[56px]">
      <div className=" flex flex-col w-full md:w-[430px] text-lg">
        <img
          src={getUrlImage(dataFooter?.logo?.url)}
          alt="logo-bplush"
          className="max-w-[200px]"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: dataFooter?.textValueLeft?.replace(/\n/g, ""),
          }}
        />
        {/*         
        <p className="my-4 md:my-8">
          Bplusfurniture is one of the fastest-growing eCommerce communities.
          We’re proud that the helpfulness of the community and a wealth of
          online resources are frequently cited as reasons our users love it.
        </p>
        <span>Email: bplusfurniture@info.com</span>
        <span>Hotline: 0908 999 999</span>
        <span>Website: www.bplusfurniture.com.vn</span> */}
      </div>
      <div className="w-full md:w-[500px] h-[250px] md:h-[300px] mt-4 md:mt-0 rounded-[10px] overflow-hidden">
        {infoAddress && (
          <MyMapComponent position={infoAddress?.geometry?.location} />
        )}
      </div>
    </footer>
  );
}
