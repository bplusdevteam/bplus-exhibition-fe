/* eslint-disable @next/next/no-img-element */

import { Button } from "@material-tailwind/react";

export default function ButtonCustom({
  className = "",
  variant = "filled",
  size = "md",
  fullWidth = false,
  children,
  onClick = () => {},
  type = "primary",
}) {
  const bg = type === "primary" ? "bg-[#7854F7]" : "bg-[#000000]";
  return (
    <Button
      className={`${bg} h-fit  text-lg md:h-[60px]  px-[40px] md:px-[90px] rounded-[60px] normal-case ${className}`}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
