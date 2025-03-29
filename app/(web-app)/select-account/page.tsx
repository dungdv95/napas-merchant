"use client";

import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AccountProps = {
  id: string;
  account: string;
};

const accounts: AccountProps[] = [
  {
    id: "1",
    account: "107 0xx xx0 400",
  },
  {
    id: "2",
    account: "222 3xx xx0 400",
  },
  {
    id: "3",
    account: "123 2xx xx0 120",
  },
  {
    id: "4",
    account: "644 2xx xx0 400",
  },
];

export default function SelectAccount() {
  const [selected, setSelected] = useState<AccountProps>(accounts[0]);

  return (
    <div className="h-full mt-12 mb-6 mx-4 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <span className="text-[#1B1D29] text-[18px] font-semibold text-center">
          Chọn tài khoản để sử dụng dịch vụ
        </span>
        <div className="flex flex-col gap-2">
          {accounts.map((items, index) => (
            <div
              key={index}
              className={cn(
                "px-4 py-5 bg-white rounded-md flex items-center gap-4 cursor-pointer",
                items?.id === selected?.id && "border border-[#0072BC]"
              )}
              onClick={() => setSelected(items)}
            >
              {selected?.id === items.id ? (
                <Icons.circleSelect />
              ) : (
                <Icons.circleUnSelect />
              )}
              <span className="text-[#1B1D29] text-base">{items?.account}</span>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant={"default"}
        className="h-11 bg-[#FFC709] hover:bg-[#FFC709]/80 text-[#1B1D29] font-semibold text-base"
      >
        Đăng nhập
      </Button>
    </div>
  );
}
