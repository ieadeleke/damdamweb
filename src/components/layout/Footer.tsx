import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.svg";
import FooterImg from "@/assets/footer.png";

import Instagram from "@/assets/icons/ig.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Twitter from "@/assets/icons/twitter.svg";


const Footer = () => {
    return (
        <footer className="bg-black relative py-20">
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