/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import { ButtonProps } from "@material-tailwind/react";
import { useState } from "react";

export default function ButtonCustom({
  className = "",
  variant = "filled",
  size = "md",
  color="#7854F7",
  fullWidth = false,
  children,
  onClick=()=>{}
}) {
  return (
    <Button
      className={`${className} bg-[${color}] h-[70px] px-[90px] rounded-[60px]`}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
