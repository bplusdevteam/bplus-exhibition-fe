export default function ContainerBg({
  className = "",
  children,
  bgMargin = "left",
  classNameChild="",
  classNameBg=""
}) {
  const styelsForType =
    bgMargin === "left"
      ? "ml-6  md:ml-[5%] xl:ml-[8%] 2xl:ml-[10%] rounded-tl-[200px] bg-[#FFF3DE]"
      : "mr-6  md:mr-[5%] xl:mr-[8%] 2xl:mr-[10%] rounded-tr-[200px] bg-[#E7E0FF]";
  return (
    <div className={`${className} relative `}>
      <div className={`w-full aspect-[1730/500] min-h-[300px] flex absolute top-0 -z-10 ${classNameBg}`}>
        <div className={`w-full h-full ${styelsForType} `}></div>
        <div></div>
      </div>
      <div className={`px-6 md:px-[5%] xl:px-[8%] 2xl:px-[10%] ${classNameChild}`}>{children}</div>
    </div>
  );
}
