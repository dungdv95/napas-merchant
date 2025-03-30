"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="h-full mt-14 mx-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-black text-2xl font-semibold">Nhập mã OTP</span>
        <span className="text-center text-[#82869E] text-base">
          Mã xác nhận OTP đã được gửi tới số{" "}
          <p className="text-[#1B1D29] font-semibold">091**** 456.</p>
        </span>
      </div>
      <div className="flex flex-col items-center gap-6">
        <span className="text-[#82869E] text-base">
          Bạn vui lòng nhập mã để tiếp tục.
        </span>
        <Suspense fallback={<div>Loading...</div>}>
          <OtpConfirm />
        </Suspense>
      </div>
    </div>
  );
}

function OtpConfirm() {
  const [timeOtp, setTimeOtp] = useState(60);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const type = useSearchParams().get("type");

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeOtp > 0) {
        setTimeOtp(timeOtp - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeOtp]);

  useEffect(() => {
    if (otp.length === 6) {
      if (type === "link-account") {
        router.push("/link-account?status=failure");
      } else {
        router.push("/transfer-money/status?status=success");
      }
    }
  }, [otp]);

  return (
    <div className="flex flex-col gap-8 items-center">
      <InputOTP
        value={otp}
        onChange={setOtp}
        maxLength={6}
        disabled={!timeOtp}
        containerClassName="!gap-3"
      >
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709] data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={0}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709]  data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={1}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709]  data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={2}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709]  data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={3}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709]  data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={4}
          />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot
            className="!rounded-none !border-0 shadow-none !border-b-2 data-[active=true]:border-b-[#FFC709]  data-[active=true]:ring-0 data-[active=true]:ring-offset-0"
            index={5}
          />
        </InputOTPGroup>
      </InputOTP>
      <span className="text-[#82869E] text-[13px]">{`Gửi lại mã (${timeOtp}s)`}</span>
    </div>
  );
}
