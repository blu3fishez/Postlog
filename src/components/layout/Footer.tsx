import Image from "next/image";
import GithubIcon from "../../../public/github-icon.png";

export default function Footer() {
  return <footer className="w-[100%] bg-[rgba(0,0,0,0.3)] b-0 text-base font-light gap-6 h-[80px]">
    <div className="mobile:w-[90vw] m-auto pt-[15px] px-[10px]">
      <p className="flex flex-row m-0 text-[--black] text-base">
        Support me by following on 
        <a className="flex flex-row items-center text-[--black]" href="https://github.com/blu3fishez">
          <Image className="my-0 mx-[5px]" src={GithubIcon} alt="favicon" width={16} height={16} />
          <span className="underline">github</span>
        </a>
      </p>
      <p className="m-0 text-gray-500 text-sm">© 2023 blu3fishez, Powered by github.io</p>
    </div>
  </footer>
}
