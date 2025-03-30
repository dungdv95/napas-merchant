import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <Link
          href="/link-account"
          className="px-4 py-2 bg-green-600 hover:bg-green-600/80 rounded-md text-white"
        >
          Liên kết tài khoản
        </Link>
        <Link
          href="/transfer-money"
          className="px-4 py-2 bg-green-600 hover:bg-green-600/80 rounded-md text-white"
        >
          Chuyển tiền
        </Link>
      </div>
    </div>
  );
}
