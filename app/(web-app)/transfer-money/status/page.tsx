"use client";

import { Icons } from "@/components/icons/icons";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StatusTransMoney />
    </Suspense>
  );
}

function StatusTransMoney() {
  const status = useSearchParams().get("status");
  return (
    <div className="h-full px-4 flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        {status === "success" ? <Success /> : <Failure />}
      </div>
    </div>
  );
}

function Success() {
  return (
    <>
      <Icons.successIcon />
      <span className="text-[#6BB61F] text-[18px] font-semibold">
        Chuyển tiền thành công
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col text-[#313442] items-center">
          <span>Bạn đã chuyển tiền thành công tới</span>
          <span>PHAM VAN DANG</span>
        </div>
        <div className="flex gap-1 justify-center">
          <span className="text-[#868C96]">Thời gian:</span>
          <span className="text-[#3D4657]">16:20 - 20/05/2023</span>
        </div>
      </div>
    </>
  );
}

function Failure() {
  return (
    <>
      <Icons.failureIcon />
      <span className="text-[#C22C2C] text-[18px] font-semibold">
        Giao dịch không thành công
      </span>
      <div className="text-[#1B1D29] text-center px-4">
        Bạn vui lòng thử lại hoặc liên hệ tổng đài{" "}
        <span className="text-[#0072BC]">1900 5555 92</span> để được hỗ trợ tra
        soát.
      </div>
    </>
  );
}
