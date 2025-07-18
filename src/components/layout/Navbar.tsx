'use client';

import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/assets/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { Drawer } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface NavInterface {
    blurry?: boolean
}

const Navbar = (props: NavInterface) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const toggleDrawer = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <nav className={`flex items-center justify-between px-3 md:px-20 py-4 z-50 w-full max-w-[1920px] mx-auto gap-20 fixed top-0 ${props.blurry ? 'blurred-bg' : 'bg-black'}`}>
            <div>
                <Image src={LogoImg} alt="logo" quality={100} width={0} height={0} className="w-[135px] md:w-[148px] h-auto" />
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
            <div className="block md:hidden">
                <CgMenuRight className="text-3xl text-white" onClick={toggleDrawer} />
            </div>
            <Drawer open={openMenu} onClose={toggleDrawer} footer={null}>
                <div>
                    <div className="px-3 pt-6 pb-12 flex items-center justify-between">
                        <div className="">
                            <Image src={LogoImg} alt="logo" quality={100} width={0} height={0} className="w-[135px] md:w-[148px] h-auto" />
                        </div>
                        <div onClick={toggleDrawer}>
                            <FaTimes className="text-3xl text-[#ff0000]" />
                        </div>
                    </div>
                    <ul className="flex items-center justify-center flex-col h-[65vh] text-center gap-7">
                        <li className="pb-4 text-black">
                            <Link href="/" className="text-3xl text-[#B2B2B2] font-medium p-4">
                                Home</Link>
                        </li>
                        <li className="pb-4 text-black">
                            <Link href="/about-us" className="text-3xl text-[#B2B2B2] font-medium p-4">
                                About Us</Link>
                        </li>
                        <li className="pb-4 text-black">
                            <Link href="/career" className="text-3xl text-[#B2B2B2] font-medium p-4">
                                Careers</Link>
                        </li>
                        <li className="pb-4 text-black">
                            <Link href="/contact-us" className="text-3xl text-[#B2B2B2] font-medium p-4">
                                Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </nav>
    )
}

export default Navbar;