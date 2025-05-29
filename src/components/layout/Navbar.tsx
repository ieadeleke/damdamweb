import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.svg";

interface NavInterface {
    blurry?: boolean
}

const Navbar = (props: NavInterface) => {
    return (
        <nav className={`flex items-center justify-between px-5 md:px-20 py-4 z-50 w-full max-w-[1920px] mx-auto gap-20 fixed top-0 ${props.blurry ? 'blurred-bg' : 'bg-black'}`}>
            <div>
                <Image src={LogoImg} alt="logo" quality={100} width={0} height={0} className="w-[148px] h-auto" />
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-10 items-center">
                    <li>
                        <Link href="/" className="text-sm text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="text-sm text-white">About Us</Link>
                    </li>
                    <li>
                        <Link href="/career" className="text-sm text-white">Careers</Link>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block">
                <Link href="/contact-us" className="bg-blue py-4 px-10 text-white text-sm rounded-full">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;