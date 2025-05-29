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
import { useState } from "react";
import SoftwareImg from "@/assets/software.png";


const AboutUsPage = () => {

    const [currentInfrastructureView, setCurrentInfrastructureView] = useState<number>(0);

    const breakpoints = {
        0: {
            slidesPerView: 1.1
        },
        600: {
            slidesPerView: 2.2
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
            <div className="px-5 md:px-20 py-36 pb-12 md:pb-24">
                {/* <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-0 md:items-start max-w-[1630px] mx-auto pb-10 md:pb-24"> */}
                <div className="flex flex-col md:flex md:flex-row grid-cols-2 gap-5 md:gap-16 md:items-start max-w-[1630px] mx-auto pb-10 md:pb-24">
                    <div className="w-max">
                        <h3 className="hidden md:block text-5xl md:text-7xl leading-[1.4] md:leading-[1.2] text-white">
                            Creativity with <br /> Purpose
                        </h3>
                        <h3 className="block md:hidden text-5xl md:text-7xl leading-[1.4] md:leading-[1.2] text-white">
                            Creativity <br /> with Purpose
                        </h3>
                    </div>
                    <div className="max-w-[880px flex-1 mx-aut">
                        <p className="text-base leading-loose mb-5 md:mb-10 text-[#B2B2B2]">
                            DamDam Global is a technology consulting and software development company on a mission to accelerate Africa&apos;s digital transformation. We design and deliver powerful digital solutions that help organizations run smarter, serve better, and scale faster. Our work goes beyond code, we partner with our clients to solve real problems using technology.
                        </p>
                        <p className="text-base leading-loose text-[#B2B2B2]">
                            We have worked with government agencies, financial institutions, and startups to improve revenue collection, streamline service delivery, and build systems that drive efficiency, accountability, and growth.
                        </p>
                    </div>
                </div>
                <div className="flex gap-0">
                    <div className="md:w-[350px]"></div>
                    <div className="flex-1">
                        <Image src={HeroImg} alt="mail" quality={100} width={1000} height={1000} className="max-w-[1178px] ml-auto h-full w-full object-fit object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex gap-0 mt-0 px-5 md:px-20 relative">
                <div className="md:w-[350px]"></div>
                <div className="flex-1 z-30">
                    <h3 className="text-2xl md:text-4xl leading-normal leading-normal text-[#D5D5D5] mb-10 max-w-[1000px] mx-auto">
                        Our solutions power digital transformation — enabling efficiency, security, and impact at scale.
                    </h3>
                    <div className="md:w-[773px] mx-auto">
                        <div className="mb-8">
                            <h4 className="text-xl md:text-[28px] mb-2 md:mb-4">Digital Infrastructure</h4>
                            <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Robust, scalable systems that serve as the backbone for modern operations — from APIs to cloud-native architecture.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xl md:text-[28px] mb-2 md:mb-4">Seamless Payments</h4>
                            <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Secure, intelligent payment systems that simplify financial flows across organizations, platforms, and services.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xl md:text-[28px] mb-2 md:mb-4">Enterprise Platforms</h4>
                            <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                End-to-end tools tailored for complex operational needs — from workforce systems to customer engagement platforms.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xl md:text-[28px] mb-2 md:mb-4">Government Technology</h4>
                            <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                                Solutions that support tax, identity, billing, and transparency — built to scale and serve the public good.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xl md:text-[28px] mb-2 md:mb-4">Custom Software Development</h4>
                            <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2] md:w-[90%]">
                                Tailored digital products designed to meet your specific objectives — functional, efficient, and elegant.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={BotHandImg} alt="mail" quality={100} width={1000} height={1000} className="hidden md:block h-full w-auto object-fit object-cover absolute -top-16 left-0 z-20" />
            </div>
            <div className="mt-16 md:mt-20 ">
                <div className="">
                    <div className="flex flex-row w-full items-center justify-center mb-5 gap-3 md:gap-5 text-center max-w-[1490px] md:mx-auto md:px-20">
                        <h4 className="text-4xl md:text-[50px] font- text-white mb-3 w-ma">From idea</h4>
                        <Image src={ArrowImg} alt="logo" quality={100} width={1000} height={1000} className="hidden md:block h-auto max-w-[400px] whitespace-nowrap" />
                        <h4 className="text-4xl md:text-[50px] font- text-white mb-3">to impact</h4>
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
            <div className="mt-28 px-5 md:px-20 max-w-[1630px] mx-auto">
                <div className="text-center">
                    <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-7 object-fit object-cover" />
                    <h4 className="text-3xl md:text-6xl font- text-white mb-4">We don&apos;t just develop your ideas</h4>
                    <p className="text-sm md:text-base leading-loose text-white">
                        We create experiences that <span className="text-blue italic">connect</span>, <span className="text-blue italic">inspire</span>, and <span className="text-blue italic">convert</span>
                    </p>
                </div>
                <div className="py-14 md:py-20 md:px-6 mb-12 md:mb-8 flex flex-col md:grid grid-cols-4 gap-10 max-w-[1466px] mx-auto">
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                        <h4 className="text-xl md:text-2xl font- text-white mb-2">Client-centric approach</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Your vision is our utmost priority
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                        <h4 className="text-xl md:text-2xl font- text-white mb-2">Cutting-edge design</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Modern, sleek, and user-focused solutions
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                        <h4 className="text-xl md:text-2xl font- text-white mb-2">Results-driven strategy</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Creativity meets performance
                        </p>
                    </div>
                    <div className="text-center">
                        <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                        <h4 className="text-xl md:text-2xl font- text-white mb-2">Global experience</h4>
                        <p className="text-sm text-[#B2B2B2] leading-loose">
                            Trusted by brands worldwide
                        </p>
                    </div>
                </div>
            </div>
            <section className="px-5 md:px-48 py-28 bg-[#101010]">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-20 justify-between mb-5 md:mb-14">
                    <h3 className="text-3xl md:text-6xl text-white leading-relaxed md:leading-[1.1] md:max-w-[300px]">
                        Digital Infrastructure
                    </h3>
                    <p className="text-base md:text-lg leading-loose md:leading-loose font-camptonlight text-[#B2B2B2] max-w-[500px]">
                        At DamDam Global, we provide practical, reliable, and tailored technology services that help businesses and government agencies grow, improve operations, and deliver better services to their users.
                    </p>
                </div>
                <div className="border-2 border-solid border-[#8B8B8B] max-w-[1420px] flex md:hidden flex-col justify-betwee mx-auto py-4 rounded-[20px] gap-0">
                    <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-0 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(0)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">Software Development</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">01</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 0 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        At Damdam Global, we build robust, scalable software solutions that power core operations for businesses, governments, and institutions. From enterprise applications to custom-built platforms, our software is engineered to solve real-world challenges, drive efficiency, and support long-term digital growth.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(1)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">UI & UX Design</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">02</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 1 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        We craft user experiences that are intuitive, accessible, and visually impactful. By blending strategy with design thinking, we ensure every interface not only looks good but works seamlessly. Our UI/UX approach focuses on user needs, ensuring engagement, ease of use, and real results.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(2)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">Data Analytics & AI</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">03</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 2 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        We harness the power of data to unlock insights, drive smarter decisions, and automate complex processes. Our AI-driven solutions help organizations anticipate trends, personalize services, and operate with precision. At Damdam, data isn't just collected — it&apos;s transformed into action.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra pt-6 pb-1 px-2`} onClick={() => setCurrentInfrastructureView(3)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">IT Consultancy & Digital Transformation</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">04</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 3 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        We guide organizations through every stage of digital evolution — from strategy to execution. Our consultancy services align technology with business goals, helping clients modernize legacy systems, adopt new tools, and build future-ready operations.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra pt-6 pb-1 px-2`} onClick={() => setCurrentInfrastructureView(4)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">Cloud Solutions & Infrastructure</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">05</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 4 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        Damdam Global delivers secure, scalable cloud solutions that support agility and growth. From cloud migration to infrastructure optimization, we help teams work smarter, collaborate seamlessly, and scale without limits — all while ensuring top-tier data security and performance.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra pt-6 pb-1 px-2`} onClick={() => setCurrentInfrastructureView(5)}>
                        <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                            <div className="flex w-full flex-co items-center relative justify-between h-full">
                                <div>
                                    <h4 className="text-lg text-white w-full vertical-tex whitespace-nowrap">Payment Portals & Payroll Services</h4>
                                </div>
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">06</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 5 ? 'view' : ''}`}>
                                <div className="mb-5">
                                    <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                        We design and deploy efficient, compliant, and user-friendly payment and payroll systems tailored to organizational needs. Whether it's streamlining government collections or automating company-wide disbursements, our platforms ensure transactions are fast, transparent, and secure.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-solid border-[#8B8B8B] h-[600px] max-w-[1420px] hidden md:flex justify-betwee mx-auto py-4 px-3 rounded-[20px]">
                    {/* pr-32 */}
                    {/* ${currentInfrastructureView === 1 ? 'w-[800px]' : ''} */}
                    <div className={`flex h-full relative cursor-pointer infra px-4 ${currentInfrastructureView === 0 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(0)}>
                        <div className={`flex gap-5 h-full relative`}>
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#E5E5E5]">01</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 0 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Software Development</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        At Damdam Global, we build robust, scalable software solutions that power core operations for businesses, governments, and institutions. From enterprise applications to custom-built platforms, our software is engineered to solve real-world challenges, drive efficiency, and support long-term digital growth.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Software Development</h4>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra border-x-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 1 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(1)}>
                        <div className="flex gap-5 h-full relative">
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#8B8B8B]">02</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 1 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">UI & UX Design</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        We craft user experiences that are intuitive, accessible, and visually impactful. By blending strategy with design thinking, we ensure every interface not only looks good but works seamlessly. Our UI/UX approach focuses on user needs, ensuring engagement, ease of use, and real results.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">UI & UX Design</h4>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 2 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(2)}>
                        <div className="flex gap-5 h-full relative">
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#8B8B8B]">03</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 2 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Data Analytics & AI</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        We harness the power of data to unlock insights, drive smarter decisions, and automate complex processes. Our AI-driven solutions help organizations anticipate trends, personalize services, and operate with precision. At Damdam, data isn't just collected — it&apos;s transformed into action.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Data Analytics & AI</h4>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 3 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(3)}>
                        <div className="flex gap-5 h-full relative">
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#8B8B8B]">04</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 3 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">IT Consultancy & Digital Transformation</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        We guide organizations through every stage of digital evolution — from strategy to execution. Our consultancy services align technology with business goals, helping clients modernize legacy systems, adopt new tools, and build future-ready operations.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">IT Consultancy & Digital Transformation</h4>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 4 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(4)}>
                        <div className="flex gap-5 h-full relative">
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#8B8B8B]">05</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 4 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Cloud Solutions & Infrastructure</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        Damdam Global delivers secure, scalable cloud solutions that support agility and growth. From cloud migration to infrastructure optimization, we help teams work smarter, collaborate seamlessly, and scale without limits — all while ensuring top-tier data security and performance.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Cloud Solutions & Infrastructure</h4>
                        </div>
                    </div>
                    <div className={`flex h-full relative cursor-pointer infra px-6 ${currentInfrastructureView === 5 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(5)}>
                        <div className="flex gap-5 h-full relative">
                            <div className="flex flex-col items-start relative w-max justify-between h-full">
                                <div>
                                    <h4 className="text-base text-[#8B8B8B]">06</h4>
                                </div>
                            </div>
                            <div className={`main-view ${currentInfrastructureView === 5 ? 'view' : ''}`}>
                                <div className="w-[450px mb-5">
                                    <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Payment Portals & Payroll Services</h4>
                                    <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                        We design and deploy efficient, compliant, and user-friendly payment and payroll systems tailored to organizational needs. Whether it's streamlining government collections or automating company-wide disbursements, our platforms ensure transactions are fast, transparent, and secure.
                                    </p>
                                </div>
                                <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                            </div>
                            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Payment Portals & Payroll Services</h4>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout >
    )
}

export default AboutUsPage;