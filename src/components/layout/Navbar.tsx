import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-20 py-4 z-50 w-full gap-20 fixed top-0 w-full blurred-bg">
            <div>
                <Image src={LogoImg} alt="logo" quality={100} width={0} height={0} className="w-[148px] h-auto" />
            </div>
            <div>
                <ul className="flex gap-10 items-center">
                    <li>
                        <Link href="" className="text-sm text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white">About Us</Link>
                    </li>
                    <li>
                        <Link href="" className="text-sm text-white">Careers</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link href="" className="bg-blue py-4 px-10 text-white text-sm rounded-full">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;