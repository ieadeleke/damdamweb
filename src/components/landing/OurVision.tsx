'use client';
import VisionImg from "@/assets/vision.png";
import ValuesImg from "@/assets/values.png";
import MissionImg from "@/assets/mission.png";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const OurVision = () => {
    const [currentValuesView, setCurrentValuesView] = useState<number>(0);
    return (
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
    )
}

export default OurVision;