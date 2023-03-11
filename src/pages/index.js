import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import ButtonCustom from "@/components/common/ButtonCustom";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <ButtonCustom>Start video</ButtonCustom>
    </>
  );
}
