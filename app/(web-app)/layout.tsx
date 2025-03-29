import { Icons } from "@/components/icons/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Napas Merchant",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="relative flex items-center px-4 py-2  bg-gradient-to-r from-[#FFD00A] via-[#FCDA4B] to-[#FFE576]">
        <Icons.logo />
        <div className="absolute top-[-20px] right-0">
          <Icons.headerBanner />
        </div>
      </div>
      <div className="flex-auto flex flex-col overflow-hidden">{children}</div>
    </div>
  );
}
