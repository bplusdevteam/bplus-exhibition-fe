/* eslint-disable @next/next/no-img-element */

import { Input } from "@material-tailwind/react";

export default function InputCustom({
  className = "",
  type = "",
  placeholder = "",
  onChange,
  name = "",
}) {
  return (
    <Input
      error={false}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={` !bg-[#EDEDED] focus:!border-t-blue-500 ${className}`}
      labelProps={{
        className: "before:content-none after:content-none",
      }}
      containerProps={{
        className: "!min-w-0",
      }}
    />
  );
}
