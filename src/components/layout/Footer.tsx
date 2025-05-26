import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.svg";
import FooterImg from "@/assets/footer.png";

import Instagram from "@/assets/icons/ig.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Twitter from "@/assets/icons/twitter.svg";
import { Input } from "../ui/input";
import { FaArrowRightLong } from "react-icons/fa6";

interface FooterInterface {
    hideMail?: boolean
}

const Footer = (props: FooterInterface) => {
    return (
        <footer className="relative py-20 px-20">
            <div className={`${props.hideMail ? 'hidden' : 'flex'} items-end mb-20 gap-16 justify-between`}>
                <h2 className="text-6xl flex-1 max-w-[901px] leading-[1.3]">
                    Want to get more from DAMDAM GLOBAL?
                </h2>
                <div className="w-[650px]">
                    <div className="flex gap-0 items-center border-0 border-b-2 rounded-none border-solid border-white pb-3">
                        <Input className="py-6 bg-transparent border-0 rounded-none" placeholder="Your email" />
                        <div className="whitespace-nowrap">
                            <button className="bg-blue py-6 px-10 text-white text-sm rounded-full flex items-center gap-3">Request a Demo <FaArrowRightLong className="text-white text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Image src={FooterImg} alt="logo" quality={100} width={0} height={0} className="w-full h-full object-cover absolute inset-0" /> */}
            <div>
                <ul className="flex gap-24 items-center justify-center pt-20 border-t-2 border-solid border-[#4B4B4B]">
                    <li>
                        <Link href="" className="text-sm text-white"><img src={Instagram.src} className="w-[35px] h-auto" alt="instagram logo" /></Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white"><img src={LinkedIn.src} className="w-[35px] h-auto" alt="linkedin logo" /></Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white"><img src={Twitter.src} className="w-[35px] h-auto" alt="twitter logo" /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;