'use client';

import AppLayout from "@/components/layout/Layout";
import Image from "next/image";

import Laswa from "@/assets/laswa.png";
import Pay4It from "@/assets/pay4it.png";
import Paynest from "@/assets/paynest.png";
import Shikini from "@/assets/shikini.png";
import LIRS from "@/assets/lirs.png";
import Businex from "@/assets/businex.png";
import Booktime from "@/assets/booktime.png";
import VisionImg from "@/assets/vision.png";
import ValuesImg from "@/assets/values.png";
import MissionImg from "@/assets/mission.png";
import GlobeImg from "@/assets/globe.png";
import Companies from "@/assets/companies.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import TestimonialCarousel from "@/components/testimonial";


export default function Home() {

  const [currentValuesView, setCurrentValuesView] = useState<number>(0);

  return (
    <AppLayout blurry={true}>
      <section className="hero-bg flex items-center px-3 md:px-20 pt-24 md:max-w-[1900px] mx-auto">
        <div className="md:max-w-[1700px] mx-auto">
          <div className="hidden md:block">
            <h1 className="text-4xl md:text-7xl text-white md:flex mb-1 md:mb-5 gap-10 items-center">
              <p className="text-blue text-sm w-[50%] mb-3 md:mb-0 md:text-lg md:w-[230px]">
                Innovating the Future, One Line of Code at a Time.
              </p>Stay ahead of the curve with
            </h1>
            <h1 className="text-4xl md:text-7xl text-white mb-3 md:mb-10">
              Future ready digital solutions
            </h1>
          </div>
          <div className="block md:hidden">
            <p className="text-blue text-sm leading-loose md:leading-normal w-[50%] mb-3 md:mb-0 md:w-full md:text-lg md:w-[230px]">
              Innovating the Future, One Line of Code at a Time.
            </p>
            <h1 className="text-4xl md:text-7xl leading-[1.3] text-white mb-3 md:mb-10">
              Stay ahead of the curve with Future ready digital solutions
            </h1>
          </div>
          <p className="text-white text-sm md:text-lg leading-loose md:leading-relaxed md:w-[650px] mb-10 font-camptonlight">
            DamDam Global is a forward-thinking technology consulting and software development company committed to driving business and government transformation through digital innovation. We specialise in designing and implementing smart, efficient, and scalable solutions that simplify service delivery, improve revenue generation, and promote accountability.
          </p>
          <div className="flex gap-0 items-center">
            <p className="text-sm md:text-base text-[#C5C5C5] font-camptonlight md:w-[240px]">
              Trusted by leading organizations across sectors.
            </p>
            <Image src={Companies} alt="companies" quality={100} width={700} height={700} className="max-w-[260px] h-full w-full" />
          </div>
        </div>
      </section>
      <div className="bg-blue w-full h-[90px]"></div>
      <section className="px-5 md:px-10 pt-20 md:pt-28 max-w-[1600px] mx-auto">
        <h4 className="text-blue text-base md:text-xl mb-2 md:mb-4">What We Do</h4>
        <p className="text- leading-loose md:leading-[1.6] text-[#B2B2B2] max-w-[1400px] text-base md:text-[26px] mb-5 md:mb-0">
          DamDam Global develops digital solutions that solve complex business and governance problems.
        </p>
        <p className="text- leading-loose md:leading-[1.6] text-[#B2B2B2] max-w-[1400px] text-base md:text-[26px] mb-20 md:mb-20">
          Whether it is creating custom software, automating processes, or consulting on digital transformation, we help institutions evolve with confidence and clarity.
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between mb-5 md:mb-14">
          <h4 className="text-2xl md:text-3xl md:text-[46px]">Our Core Offerings:</h4>
          <Link href="/contact-us" className="w-max hidden md:flex items-center gap-5 border-2 md:border border-solid bg-white border-white rounded-full py-4 px-8 md:px-12 text-black">Contact Us <FaArrowRight className="text-[#B2B2B2] text-2xl text-black" /></Link>
        </div>
        <div className="flex flex-col md:grid grid-cols-4 gap-2 md:gap-6">
          <div className="md:border-r border-solid border-[#373737] py-5 md:py-10 md:pr-6">
            <h4 className="text-white mb-1 md:mb-3 text-lg md:text-xl 4xl:text-2xl font-camptonsemi">Technology Consulting</h4>
            <p className="text- leading-loose md:leading-relaxed text-[#B2B2B2] max-w-[400px] text-sm md:text-base 4xl:text-lg font-camptonlight">
              We work with organisations to understand their digital needs, develop a clear strategy, and implement solutions that work. Whether you are launching a new initiative or improving an existing system, we bring clarity to complexity.
            </p>
          </div>
          <div className="md:border-r border-solid border-[#373737] py-5 md:py-10 md:pr-6">
            <h4 className="text-white mb-1 md:mb-3 text-lg md:text-xl 4xl:text-2xl font-camptonsemi">Software Development:</h4>
            <p className="text- leading-loose md:leading-relaxed text-[#B2B2B2] max-w-[400px] text-sm md:text-base 4xl:text-lg font-camptonlight">
              We design, develop, and deploy user-focused web and mobile applications. From MVPs to enterprise-grade platforms, our development process is agile, secure, and built for scale.
            </p>
          </div>
          <div className="md:border-r border-solid border-[#373737] py-5 md:py-10 md:pr-6">
            <h4 className="text-white mb-1 md:mb-3 text-lg md:text-xl 4xl:text-2xl font-camptonsemi">Process Automation</h4>
            <p className="text- leading-loose md:leading-relaxed text-[#B2B2B2] max-w-[400px] text-sm md:text-base 4xl:text-lg font-camptonlight">
              We build intelligent systems that eliminate manual inefficiencies. From revenue tracking to service delivery automation, we help organisations save time and improve accountability.
            </p>
          </div>
          <div className="py-5 md:py-10">
            <h4 className="text-white mb-1 md:mb-3 text-lg md:text-xl 4xl:text-2xl font-camptonsemi">Fintech Solutions</h4>
            <p className="text- leading-loose md:leading-relaxed text-[#B2B2B2] max-w-[400px] text-sm md:text-base 4xl:text-lg font-camptonlight">
              We develop financial technology platforms that enable digital payments, improve tax collection, and streamline revenue generation for government and business entities alike.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col md:grid grid-cols-15/1 md:flex-row items-center gap-3">
          <div className="flex-1 offerings-bg h-full w-full">
          </div>
          <div className="max-w-[760px] py-12">
            <h4 className="text-3xl md:text-[46px] md:-ml-16 mb-4">Our Core Offerings</h4>
            <ul className="flex flex-col gap-5 mb-7 pl-3">
              <li className="text-base md:text-sm leading-relaxed md:leading-normal text-[#B2B2B2] font-camptonlight">
                <span className="text-white font-camptonsemibold">Technology Consulting: </span>
                We work with organisations to understand their digital needs, develop a clear strategy, and implement solutions that work. Whether you are launching a new initiative or improving an existing system, we bring clarity to complexity.
                Strategic focus on both public and private sector needs.
              </li>
              <li className="text-base md:text-sm leading-relaxed md:leading-normal text-[#B2B2B2] font-camptonlight">
                <span className="text-white font-camptonsemibold">Software Development: </span>
                We design, develop, and deploy user-focused web and mobile applications. From MVPs to enterprise-grade platforms, our development process is agile, secure, and built for scale.
              </li>
              <li className="text-base md:text-sm leading-relaxed md:leading-normal text-[#B2B2B2] font-camptonlight">
                <span className="text-white font-camptonsemibold">Process Automation: </span>
                We build intelligent systems that eliminate manual inefficiencies. From revenue tracking to service delivery automation, we help organisations save time and improve accountability.
              </li>
              <li className="text-base md:text-sm leading-relaxed md:leading-normal text-[#B2B2B2] font-camptonlight">
                <span className="text-white font-camptonsemibold">Fintech Solutions: </span>
                We develop financial technology platforms that enable digital payments, improve tax collection, and streamline revenue generation for government and business entities alike.
              </li>
            </ul>
            <Link href="/contact-us" className="w-max flex items-center gap-5 border-2 md:border border-solid bg-white border-white rounded-full py-4 px-8 md:px-12 text-black">Contact Us <FaArrowRight className="text-[#B2B2B2] text-2xl text-black" /></Link>
          </div>
        </div> */}
      </section>
      <section className="px-5 md:px-40 pt-10 md:pb-28 max-w-[1600px] mx-auto">
        <div className="flex flex-col-reverse md:grid grid-cols-2 md:items-center gap-5 md:gap-36">
          <div>
            <h4 className="text-white text-xl mb-1 md:mb-4 font-camptonbold">Our Vision</h4>
            <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[460px]">
              We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
            </p>
          </div>
          <div>
            <Image src={VisionImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:grid grid-cols-2 md:items-center gap-5 md:gap-36">
          <div>
            <Image src={MissionImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
          <div>
            <h4 className="text-white text-xl mb-1 md:mb-4 font-camptonbold">Our Mission</h4>
            <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[490px]">
              Our mission is to create powerful, user-focused digital solutions that drive growth, simplify processes, and unlock new opportunities for our clients.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse md:grid grid-cols-2 md:items-center gap-5 md:gap-36">
          <div className="max-w-[490px]">
            <h4 className="text-white text-xl mb-8 font-camptonbold">Our Values</h4>
            <div className="mb-5">
              <div onClick={() => setCurrentValuesView(0)} className="cursor-pointer flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Impact</h4>
                {currentValuesView === 0 ? <FaAngleDown className="text-white text-base" /> : <FaAngleRight className="text-white text-base" />}
              </div>
              <div className={`values-text ${currentValuesView === 0 ? 'show-text' : ''}`}>
                <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                  We are driven by results that matter. At DamDam Global, we focus on delivering solutions that create measurable impact for our clients and their communities. Every product we build and every strategy we implement is guided by our commitment to long-term value and sustainable growth.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <div onClick={() => setCurrentValuesView(1)} className="cursor-pointer flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Innovation</h4>
                {currentValuesView === 1 ? <FaAngleDown className="text-white text-base" /> : <FaAngleRight className="text-white text-base" />}
              </div>
              <div className={`values-text ${currentValuesView === 1 ? 'show-text' : ''}`}>
                <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                  We challenge the status quo to unlock new possibilities. Innovation is at the heart of what we do; from leveraging cutting-edge technologies to designing creative solutions that solve real-world problems. We do not just keep up with change; we lead it.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <div onClick={() => setCurrentValuesView(2)} className="cursor-pointer flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Integrity</h4>
                {currentValuesView === 2 ? <FaAngleDown className="text-white text-base" /> : <FaAngleRight className="text-white text-base" />}
              </div>
              <div className={`values-text ${currentValuesView === 2 ? 'show-text' : ''}`}>
                <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                  Trust is the foundation of every relationship we build. We operate with transparency, accountability and consistency, ensuring our actions align with our words. At DamDam Global, integrity is non-negotiable.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <div onClick={() => setCurrentValuesView(3)} className="cursor-pointer flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Collaboration</h4>
                {currentValuesView === 3 ? <FaAngleDown className="text-white text-base" /> : <FaAngleRight className="text-white text-base" />}
              </div>
              <div className={`values-text ${currentValuesView === 3 ? 'show-text' : ''}`}>
                <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                  We believe in the power of working together. Our approach is deeply collaborative, both internally as teams and with our clients and partners. By bringing diverse perspectives to the table, we co-create solutions that are stronger, smarter, and more inclusive.
                </p>
              </div>
            </div>
            <div className="">
              <div onClick={() => setCurrentValuesView(4)} className="cursor-pointer flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Excellence</h4>
                {currentValuesView === 4 ? <FaAngleDown className="text-white text-base" /> : <FaAngleRight className="text-white text-base" />}
              </div>
              <div className={`values-text ${currentValuesView === 4 ? 'show-text' : ''}`}>
                <p className="text-sm md:text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                  We hold ourselves to the highest standards. From strategy to execution, we strive for excellence in every detail. We do not settle for “good enough”, we deliver work that reflects our dedication to quality, precision, and professionalism.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={ValuesImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
        </div>
      </section>
      <section className="px-5 md:px-20 pt-20 pb-20 md:pt-28 md:pb-28 max-w-[1600px] mx-auto">
        <h4 className="text-blue mb-4 md:mb-5 text-base md:text-3xl">
          Portfolio
        </h4>
        <p className="text- leading-loose md:leading-normal md: max-w-[1200px] mb-10 md:mb-16 text-[#B2B2B2] text-base md:text-4xl">
          Our product ecosystem is designed to accelerate growth, enhance public service delivery, and simplify how businesses and citizens engage with technology.
        </p>
        <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-10">
          <div>
            <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
              <Image src={Pay4It} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">Pay4it</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-[15px] base font-camptonlight md:max-w-[650px]">
                  Pay4IT empowers businesses, individuals, and governments with innovative financial technology solutions. Whether you are a merchant, a service provider, or an entrepreneur, we have a suite of business solutions specially curated for you. Pay4IT enables digital payments, drives transparency, efficiency, and economic growth across diverse sectors.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://payment.usepay4it.com/#/auth/register" target="_blank" rel="noreferrer">
              <Image src={Paynest} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">PayNest</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                  It simplifies three key areas of financial compliance; the PAYE API, Withholding API, and the Lagos State Government Bill Payment API. This solution facilitates efficient tax calculations and payments directly to Lagos State Internal Revenue Service (LIRS).
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
              <Image src={Businex} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">BusiNex</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                  Automates payroll, tax deductions and compliance.
                </p>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                  Businex is a payroll and compliance solution. It automates salary processing, ensures compliance, and integrates tax remittance directly with the Lagos State Inland Revenue Service (LIRS). Businesses no longer need to spend hours calculating deductions, generating payroll reports, and remitting payments manually. Businex optimise these processes by ensuring efficiency, accuracy, and compliance
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
              <Image src={Booktime} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">BOOKTIME</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                  BookTime is a cutting-edge digital visitor management system.
                </p>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                  It transforms the traditional approach to visitor logs by providing businesses with a streamlined and highly customisable solution to elevate their visitor experiences.
                </p>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                  From visitor check-ins to real-time analytics, BookTime transforms the way organizations manage their guests, ensuring a modern, efficient, and secure visitor experience.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
              <Image src={Laswa} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">Laswa</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                  Custom digital infrastructure for the Lagos State Waterways Authority enhancing trip tracking, ticketing, and marine service oversight through smart technology.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://madamshikini.lagosstate.gov.ng/" target="_blank" rel="noreferrer">
              <Image src={Shikini} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">Madam Shikini</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                  Madam Shikini is an AI-powered chatbot built to assist Lagos residents with instant access to government services, payment guidance, and everyday civic information.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://madamshikini.lagosstate.gov.ng/" target="_blank" rel="noreferrer">
              <Image src={LIRS} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
              <div>
                <h4 className="text-xl md:text-2xl mb-4 text-white">LIRS</h4>
                <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                  DamDam Global combines field operations, technology enablement, and lean management to ensure high-yield performance. With a focused team of field agents and dedicated operational support, the strategy maximises reach, reduces inefficiencies, and guarantees transparent collections.
                </p>
                  {/* The markets in this zone serve over 360,000 traders, making them high-potential zones for informal sector tax remittance and a viable ecosystem for digital enumeration and collections. Given the scale of commercial activity, the informal sector within these markets offers a huge opportunity to generate revenue through physical and technology-enabled tax collection. */}
              </div>
            </Link>
          </div>
        </div>
      </section>
      <TestimonialCarousel />
    </AppLayout>
  );
}
