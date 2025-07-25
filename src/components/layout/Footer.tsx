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
        <footer className="relative py-20 px-3 md;px-5 md:px-20 max-w-[1600px] mx-auto">
            <div className={`${props.hideMail ? 'hidden' : 'flex'} flex-col md:flex-row md:items-end mb-5 md:mb-20 gap-6 md:gap-16 justify-between`}>
                <h2 className="text-3xl md:text-5xl flex-1 max-w-[901px] leading-[1.5] md:leading-[1.3]">
                    Want to get more from DAMDAM GLOBAL?
                </h2>
                <div className="md:w-[620px]">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:items-center border-0 md:border-b-2 rounded-none border-solid border-white pb-3">
                        <Input className="py-6 bg-transparent rounded-none border-0 border-b-2 md:border-0 rounded-none border-solid border-white" placeholder="Your email" />
                        <div className="whitespace-nowrap">
                            <button className="bg-blue py-5 md:py-6 px-10 text-white text-sm rounded-full flex items-center gap-3">Request a Demo <FaArrowRightLong className="text-white text-xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Image src={FooterImg} alt="logo" quality={100} width={0} height={0} className="w-full h-full object-cover absolute inset-0" /> */}
            <div>
                <ul className="flex gap-14 md:gap-24 items-center justify-center pt-10 md:pt-20 md:border-t-2 border-solid border-[#4B4B4B]">
                    <li>
                        <Link href="" className="text-sm text-white"><img src={Instagram.src} className="w-[30px] md:w-[35px] h-auto" alt="instagram logo" /></Link>
                    </li>
                    <li>
                        <Link href="https://ng.linkedin.com/company/damdam-global" target="_blank" className="text-sm text-white"><img src={LinkedIn.src} className="w-[30px] md:w-[35px] h-auto" alt="linkedin logo" /></Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white"><img src={Twitter.src} className="w-[30px] md:w-[35px] h-auto" alt="twitter logo" /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;