import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const WhatWeDo = () => {
    return (
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
        </section>
    )
}

export default WhatWeDo;