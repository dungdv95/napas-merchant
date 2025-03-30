"use client";
import { Button } from "@/components/ui/button";
import PDFViewer from "./pdf-viewer";
import { useRouter } from "next/navigation";

export default function PageTerm() {
  const router = useRouter();
  return (
    <div className="h-full mx-5 my-4 flex flex-col gap-4 overflow-y-hidden">
      <span className="text-[#1B1D29] text-[18px] font-semibold text-center">
        Điều khoản và điều kiện
      </span>

      <PDFViewer />
      <Button
        variant={"default"}
        className="h-11 bg-[#FFC709] hover:bg-[#FFC709]/80 text-[#1B1D29] font-semibold text-base"
        onClick={() => router.push("/select-account")}
      >
        Xác nhận điều khoản trên
      </Button>
    </div>
  );
}
