import Link from "next/link";
import Mail from "@/assets/icons/mail.svg";
import Location from "@/assets/icons/location.svg";
import Phone from "@/assets/icons/phone.svg";
import CareerImg from "@/assets/career.png";
import HeroImg from "@/assets/about.png";
import SearchImg from "@/assets/search.svg";
import BotHandImg from "@/assets/bot.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/Layout";

const AboutUsPage = () => {
    return (
        <AppLayout>
            <div className="px-20 py-20">
                <div className="grid grid-cols-2 gap-20 items-start max-w-[1630px] mx-auto pb-24">
                    <div className="">
                        <h3 className="text-7xl leading-[1.2] text-white">
                            Creativity with Purpose
                        </h3>
                    </div>
                    <div className="max-w-[700px] mx-auto">
                        <p className="text-base leading-loose mb-10 text-[#B2B2B2]">
                            DamDam Global builds transformative tech that empowers businesses, governments, and organizations to scale with purpose. From digital infrastructure to seamless payments, we engineer progress.
                        </p>
                        <p className="text-base leading-loose text-[#B2B2B2]">
                            At DamDam Global, we believe in purposeful innovation. We&apos;re a technology company committed to building resilient, future-ready systems that accelerate progress for private and public institutions alike.
                        </p>
                    </div>
                </div>
                <div className="flex gap-0">
                    <div className="w-[350px]"></div>
                    <div className="flex-1">
                        <Image src={HeroImg} alt="mail" quality={100} width={100} height={100} className="max-w-[1178px] ml-auto h-full w-full object-fit object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex gap-0 mt-20 px-20 relative">
                <div className="w-[350px]"></div>
                <div className="flex-1 z-50">
                    <h3 className="text-4xl leading-normal leading-normal text-[#D5D5D5] mb-10">
                        Our solutions power digital transformation — enabling efficiency, security, and impact at scale.
                    </h3>
                    <div className="w-[773px] mx-auto">
                        <div className="mb-8">
                            <h4 className="text-[28px] mb-4">Digital Infrastructure</h4>
                            <p className="text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Robust, scalable systems that serve as the backbone for modern operations — from APIs to cloud-native architecture.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-[28px] mb-4">Seamless Payments</h4>
                            <p className="text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Secure, intelligent payment systems that simplify financial flows across organizations, platforms, and services.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-[28px] mb-4">Enterprise Platforms</h4>
                            <p className="text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                End-to-end tools tailored for complex operational needs — from workforce systems to customer engagement platforms.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-[28px] mb-4">Government Technology</h4>
                            <p className="text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Solutions that support tax, identity, billing, and transparency — built to scale and serve the public good.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-[28px] mb-4">Custom Software Development</h4>
                            <p className="text-base leading-loose md:leading-loose text-[#B2B2B2] w-[90%]">
                                Tailored digital products designed to meet your specific objectives — functional, efficient, and elegant.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={BotHandImg} alt="mail" quality={100} width={100} height={100} className="h-full w-auto object-fit object-cover absolute -top-16 left-0 z-30" />
            </div>
            <div className="mt-20 px-20">
                <div className="grid grid-cols-3 gap-5">
                    <div className="bg-[#191919] p-5 rounded-[9px]">
                        <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Design</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Our design process focuses on creating intuitive, human-centered interfaces. We translate insights into clean, functional experiences that drive engagement and make complex systems easy to use.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#191919] p-5 rounded-[9px]">
                        <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Design</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Our design process focuses on creating intuitive, human-centered interfaces. We translate insights into clean, functional experiences that drive engagement and make complex systems easy to use.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#191919] p-5 rounded-[9px]">
                        <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Design</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Our design process focuses on creating intuitive, human-centered interfaces. We translate insights into clean, functional experiences that drive engagement and make complex systems easy to use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 px-20 max-w-[1630px] mx-auto">
                <div className="text-center">
                    <h4 className="text-6xl font- text-white mb-5">We don&apos;t just design</h4>
                    <p className="text-xl leading-loose text-white">
                        We create experiences that <span className="text-blue italic">connect</span>, <span className="text-blue italic">inspire</span>, and <span className="text-blue italic">convert</span>
                    </p>
                </div>
                <div className="mt-14 grid grid-cols-4 gap-10">
                    <div className="bg-[#121212] p-6 rounded-[12px]">
                        <div className="flex justify-between mb-2 items-center">
                            <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                            <Image src={SearchImg} alt="mail" quality={100} width={100} height={100} className="h-full w-[40px]" />
                        </div>
                        <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                        <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p>
                        <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                    </div>
                    <div className="bg-[#121212] p-6 rounded-[12px]">
                        <div className="flex justify-between mb-2 items-center">
                            <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                            <Image src={SearchImg} alt="mail" quality={100} width={100} height={100} className="h-full w-[40px]" />
                        </div>
                        <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                        <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p>
                        <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                    </div>
                    <div className="bg-[#121212] p-6 rounded-[12px]">
                        <div className="flex justify-between mb-2 items-center">
                            <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                            <Image src={SearchImg} alt="mail" quality={100} width={100} height={100} className="h-full w-[40px]" />
                        </div>
                        <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                        <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p>
                        <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                    </div>
                    <div className="bg-[#121212] p-6 rounded-[12px]">
                        <div className="flex justify-between mb-2 items-center">
                            <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                            <Image src={SearchImg} alt="mail" quality={100} width={100} height={100} className="h-full w-[40px]" />
                        </div>
                        <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                        <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p>
                        <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                    </div>
                    <div className="bg-[#121212] p-6 rounded-[12px]">
                        <div className="flex justify-between mb-2 items-center">
                            <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                            <Image src={SearchImg} alt="mail" quality={100} width={100} height={100} className="h-full w-[40px]" />
                        </div>
                        <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                        <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                            We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                        </p>
                        <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                    </div>
                </div>
            </div>
        </AppLayout >
    )
}

export default AboutUsPage;