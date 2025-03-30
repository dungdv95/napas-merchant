"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-full px-4 py-6 flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Thông tin người chuyển</span>
          <div className="bg-white px-4 py-5 rounded-md flex flex-col gap-6">
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Chủ tài khoản</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                PHAM VAN DANG
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Số tài khoản</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                333 555 7777
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Số dư khả dụng</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                13,000,333 đ
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Thông tin người hưởng thụ</span>
          <div className="bg-white px-4 py-5 rounded-md flex flex-col gap-6">
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Chủ tài khoản</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                PHAM VAN DANG
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Số tài khoản</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                333 555 7777
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Ngân hàng</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                Vietcombank
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Số tiền giao dịch</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                13,000,333 đ
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-1/2 text-[#82869E]">Nội dung</span>
              <span className="w-1/2 text-end text-[#313442] font-semibold">
                Chuyen tien thanh toán
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant={"default"}
          className="h-11 w-1/2 bg-[#BCBFD6] hover:bg-[#BCBFD6]/80 text-[#1B1D29] font-semibold text-base"
        >
          Huỷ bỏ
        </Button>
        <Button
          variant={"default"}
          className="h-11 w-1/2 bg-[#FFC709] hover:bg-[#FFC709]/80 text-[#1B1D29] font-semibold text-base"
          onClick={() => router.push("/otp-confirm?type=transfer")}
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}
