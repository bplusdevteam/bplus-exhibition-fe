export default function ListDot({ className, type = "vertical" }) {
  return (
    <div
      className={`${className}  flex-wrap gap-9 ${
        type === "vertical" ? "w-[170px]" : "w-[380px]"
      } -z-10 hidden md:flex`}
    >
      {Array(50)
        .fill()
        .map((item, index) => (
          <div
            key={index}
            className="w-[5px] h-[5px] rounded-full bg-[#7854F7]"
          ></div>
        ))}
    </div>
  );
}
