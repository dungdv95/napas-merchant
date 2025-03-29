"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUser, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="mt-20 mx-4 bg-white rounded-2xl px-6 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#1B1D29] text-xl font-bold">Đăng nhập</span>
            <span className="text-[#82869E]">
              Nhập thông tin tài khoản của bạn
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1">
              <Input
                type="text"
                className="h-11 col-start-1 row-start-1 py-1.5 pr-3 pl-10"
                placeholder="Số điện thoại hoặc tên đăng nhập"
              />

              <CircleUser className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400" />
            </div>
            <div className="grid grid-cols-1">
              <Input
                type="text"
                className="h-11 col-start-1 row-start-1 py-1.5 pr-3 pl-10"
                placeholder="Mật khẩu"
              />

              <LockKeyhole className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400" />
            </div>
          </div>
          <Button
            variant={"default"}
            className="h-11 bg-[#FFC709] hover:bg-[#FFC709]/80 text-[#1B1D29] font-semibold text-base"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="gap-0">
          <AlertDialogHeader className="gap-0">
            <AlertDialogTitle></AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-[#1B1D29] text-[18px] font-bold text-center">
                Sai thông tin đăng nhập
              </span>
              <span className="text-[#313442] text-center">
                Tên đăng nhập hoặc mật khẩu chưa chính xác. Bạn còn 4 lần thử.
                Tài khoản của bạn sẽ bị tạm khoá trong 24 giờ sau 5 lần thử.
              </span>
            </div>
            <Button
              variant={"default"}
              className="h-11 bg-[#FFC709] hover:bg-[#FFC709]/80 text-[#1B1D29] font-semibold text-base"
            >
              Thử lại
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
