import ButtonCustom from "@/components/common/ButtonCustom";
import InputCustom from "@/components/common/InputCustom";
import {
  Dialog,
  DialogBody,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";

/* eslint-disable @next/next/no-img-element */
export default function ModalQuestionOrators({ openModalRegister, onClose }) {
  const isSuccess = false;
  return (
    <Dialog
      open={openModalRegister}
      handler={() => {
        onClose();
      }}
      className="max-w-none w-[90%] md:w-[60%] lg:w-[40%]  lg:min-w-[600px]"
    >
      <DialogBody className="p-6 md:p-14 flex flex-col items-center">
        <h1 className="text-[28px] font-[600] text-[#1E1E1E]">
          QUESTIONS FOR ORATOR
        </h1>
        {isSuccess ? (
          <div className="text-center mt-8">
            <span> Thank for your question!</span>
            <p>Please visit our exhibition for answer</p>
          </div>
        ) : (
          <>
            <p className="text-[#8C8C8C] mt-6">
              Xin mời bạn điền thông tin và đặt câu hỏi cho diễn giả
            </p>
            <form className="mt-8 w-full max-w-[500px]">
              <div className="mb-4 flex flex-col gap-6">
                <InputCustom type="tel" placeholder="Full name" />
                <InputCustom type="tel" placeholder="Phone number" />
                <InputCustom type="tel" placeholder="Email for work" />
                <div className="flex gap-x-4">
                  <InputCustom type="tel" placeholder="Company" />
                  <InputCustom type="tel" placeholder="Position" />
                </div>
                <Textarea
                  className={` !bg-[#EDEDED] focus:!border-t-blue-500 `}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "!min-w-0",
                  }}
                  placeholder="Your question?"
                />
              </div>
              <ButtonCustom className="mt-8" fullWidth>
                Submit
              </ButtonCustom>
            </form>
          </>
        )}
      </DialogBody>
    </Dialog>
  );
}
