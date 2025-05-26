'use client';

import Link from "next/link";
import Mail from "@/assets/icons/mail.svg";
import Location from "@/assets/icons/location.svg";
import Phone from "@/assets/icons/phone.svg";
import CareerImg from "@/assets/career.png";
import HeroImg from "@/assets/about.png";
import SearchImg from "@/assets/search.svg";
import BotHandImg from "@/assets/bot.png";
import Logo from "@/assets/logo.png";
import ArrowImg from "@/assets/arrow.png";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AboutUsPage = () => {

    const breakpoints = {
        0: {
            slidesPerView: 1.4
        },
        600: {
            slidesPerView: 2.4
        },
        1000: {
            slidesPerView: 3.4
        },
        1800: {
            slidesPerView: 4.4
        },
    }

    return (
        <AppLayout>
            <div className="px-20 py-36 pb-24">
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
                        <Image src={HeroImg} alt="mail" quality={100} width={1000} height={1000} className="max-w-[1178px] ml-auto h-full w-full object-fit object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex gap-0 mt-0 px-20 relative">
                <div className="w-[350px]"></div>
                <div className="flex-1 z-30">
                    <h3 className="text-4xl leading-normal leading-normal text-[#D5D5D5] mb-10 max-w-[1000px] mx-auto">
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
                <Image src={BotHandImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-auto object-fit object-cover absolute -top-16 left-0 z-20" />
            </div>
            <div className="mt-20 px-20">
                <div className="">
                    <div className="flex items-center justify-center mb-5 gap-5 text-center max-w-[1490px] mx-auto">
                        <h4 className="text-[50px] font- text-white mb-3 w-ma">From idea</h4>
                        <Image src={ArrowImg} alt="logo" quality={100} width={1000} height={1000} className="h-auto max-w-[400px] whitespace-nowrap" />
                        <h4 className="text-[50px] font- text-white mb-3">to impact</h4>
                    </div>
                    <Swiper
                        spaceBetween={20} breakpoints={breakpoints} centeredSlides={false} slidesOffsetBefore={50}
                    >
                        <SwiperSlide key={1} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                            <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                            <div>
                                <h4 className="text-white text-2xl mb-3">Discovery</h4>
                                <p className="text-white text-sm leading-loose font-camptonlight">
                                    We start by understanding your goals, challenges, and users. Our Discovery phase involves in-depth research, stakeholder interviews, and strategic alignment to ensure we&apos;re solving the right problem from the start.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={2} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                            <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                            <div>
                                <h4 className="text-white text-2xl mb-3">Design</h4>
                                <p className="text-white text-sm leading-loose font-camptonlight">
                                    Our design process focuses on creating intuitive, human-centered interfaces. We translate insights into clean, functional experiences that drive engagement and make complex systems easy to use.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={3} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                            <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                            <div>
                                <h4 className="text-white text-2xl mb-3">Development</h4>
                                <p className="text-white text-sm leading-loose font-camptonlight">
                                    Using modern frameworks and best practices, we develop scalable, secure, and high-performing solutions. Whether it&apos;s a web app, mobile platform, or enterprise system, our builds are made to last.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={4} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                            <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                            <div>
                                <h4 className="text-white text-2xl mb-3">AI Leaning</h4>
                                <p className="text-white text-sm leading-loose font-camptonlight">
                                    We integrate intelligent systems that learn and adapt. From predictive analytics to process automation, our AI-powered tools help you stay ahead by working smarter, not harder.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={5} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                            <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mb-20 object-fit object-cover" />
                            <div>
                                <h4 className="text-white text-2xl mb-3">ChatBox</h4>
                                <p className="text-white text-sm leading-loose font-camptonlight">
                                    Our advanced ChatBox solutions provide real-time engagement and 24/7 support. Designed for accuracy and personalization, they improve customer interaction while reducing operational load.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="mt-28 px-20 max-w-[1630px] mx-auto">
                <div className="text-center">
                    <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-7 object-fit object-cover" />
                    <h4 className="text-6xl font- text-white mb-3">We don&apos;t just design</h4>
                    <p className="text-base leading-loose text-white">
                        We create experiences that <span className="text-blue italic">connect</span>, <span className="text-blue italic">inspire</span>, and <span className="text-blue italic">convert</span>
                    </p>
                </div>
                <div className="py-20 mb-28 grid grid-cols-4 gap-10">
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-10 object-fit object-cover" />
                        <h4 className="text-2xl font- text-white mb-2">Client-centric approach</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Your vision is our utmost priority
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-10 object-fit object-cover" />
                        <h4 className="text-2xl font- text-white mb-2">Client-centric approach</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Your vision is our utmost priority
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-10 object-fit object-cover" />
                        <h4 className="text-2xl font- text-white mb-2">Results-driven strategy</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Creativity meets performance
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-10 object-fit object-cover" />
                        <h4 className="text-2xl font- text-white mb-2">Global experience</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Trusted by brands worldwide
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout >
    )
}

export default AboutUsPage;