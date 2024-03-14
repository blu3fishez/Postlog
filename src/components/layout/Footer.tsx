import { prefix } from "@/config";
import Image from "next/image";

export default function Footer() {
  return <footer className="w-[--main-width] m-auto b-0 text-base font-light gap-6 h-[80px]">
    <div className="max-w-[--main-width] pt-[15px] px-[10px]">
      <p className="flex flex-row m-0 text-[--black] text-base">
        Support me by following on 
        <a className="flex flex-row items-center text-[--black]" href="https://github.com/chayhan">
          <Image className="my-0 mx-[5px]" src={`${prefix}/github-icon.png`} alt="favicon" width={16} height={16} />
          <span className="underline">github</span>
        </a>
      </p>
      <p className="m-0 text-[--gray] text-sm">© 2023 chayhan, Powered by github.io</p>
    </div>
  </footer>
}
