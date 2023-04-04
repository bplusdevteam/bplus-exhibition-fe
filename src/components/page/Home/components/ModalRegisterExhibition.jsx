import ButtonCustom from "@/components/common/ButtonCustom";
import InputCustom from "@/components/common/InputCustom";
import Api from "@/config/api";
import { Dialog, DialogBody, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function ModalRegisterExhibition({
  openModalRegister,
  onClose,
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const register = async () => {
    try {
      const res = await Api.post("/registers", {
        ...dataForm,
      });
      if (res?.status === 200) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Dialog
      open={openModalRegister}
      handler={() => {
        onClose();
        setIsSuccess(false);
      }}
      className="max-w-none w-[90%] md:w-[60%] lg:w-[40%]  lg:min-w-[600px]"
    >
      <DialogBody className="p-6 md:p-14 flex flex-col items-center">
        <h1 className="text-[28px] font-[600] text-[#1E1E1E]">REGISTER FORM</h1>
        {isSuccess ? (
          <div className="text-center mt-8">
            <span>Thank for register our exhibition!</span>
            <p>
              Please check your email to get QR code to participant in
              exhibition.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[#8C8C8C] mt-6">
              Xin mời bạn điền thông tin đăng ký tham gia triễn lãm
            </p>
            <form
              className="mt-8 w-full max-w-[500px]"
              onSubmit={(e) => {
                e.preventDefault();
                register();
              }}
            >
              <div className="mb-4 flex flex-col gap-6">
                <InputCustom
                  type="tel"
                  placeholder="Full name"
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      name: e.target.value,
                    });
                  }}
                />
                <InputCustom
                  type="tel"
                  placeholder="Phone number"
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      phoneNumber: e.target.value,
                    });
                  }}
                />
                <InputCustom
                  type="email"
                  placeholder="Email for work"
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      email: e.target.value,
                    });
                  }}
                />
                <div className="flex gap-x-4">
                  <InputCustom
                    type="tel"
                    placeholder="Company"
                    onChange={(e) => {
                      setDataForm({
                        ...dataForm,
                        company: e.target.value,
                      });
                    }}
                  />
                  <InputCustom
                    type="tel"
                    placeholder="Position"
                    onChange={(e) => {
                      setDataForm({
                        ...dataForm,
                        position: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-x-4 gap-y-6">
                  <InputCustom
                    type="date"
                    placeholder="The date of attendance"
                    onChange={(e) => {
                      setDataForm({
                        ...dataForm,
                        dateAttendance: e.target.value,
                      });
                    }}
                  />
                  <Select
                    label="AM/ PM"
                    className={` bg-[#EDEDED]  !min-w-0 `}
                    onChange={(e) => {
                      console.log("eee", e);
                    }}
                    // selected={(e) => {
                    //   // console.log("eeeeee", e);
                    //   // setDataForm({
                    //   //   ...dataForm,
                    //   //   halfAday: e,
                    //   // });
                    // }}
                  >
                    <Option>AM</Option>
                    <Option>PM</Option>
                  </Select>
                </div>
              </div>
              <ButtonCustom
                className="mt-8"
                fullWidth
                buttonType="submit"
                // onClick={register}
              >
                Submit
              </ButtonCustom>
            </form>
          </>
        )}
      </DialogBody>
    </Dialog>
  );
}
