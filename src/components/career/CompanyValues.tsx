import SearchImg from "@/assets/search.svg";
import { FaArrowRight } from "react-icons/fa";
import ImpactImg from "@/assets/icons/value/impact.png";
import ExcellenceImg from "@/assets/icons/value/excellence.png";
import CollaborationImg from "@/assets/icons/value/collaboration.png";
import InnovationImg from "@/assets/icons/value/innovation.png";
import IntegrityImg from "@/assets/icons/value/integrity.png";


import Image from "next/image";

const CompanyValues = () => {
    return (
        <div className="pb-28 pt-36 max-w-[1150px] mx-auto">
            <div className="text-center">
                <h4 className="text-3xl md:text-6xl max-w-[500px] leading-tighter md:leading-tighter  mx-auto font-camptonsemibold text-white mb-5">Our Core Values in Action</h4>
                <p className="text-sm leading-loose md:leading-loose text-white max-w-[700px] mx-auto">
                    We are not a typical tech company; we are a team of thinkers, doers, and dreamers. We value honesty, excellence, and curiosity. Collaboration is at the heart of how we work, and we believe in building together, learning from each other, and celebrating wins as a team
                </p>
            </div>
            <div className="mt-14 flex flex-col md:grid grid-cols-3 gap-5">
                <div className="border border-solid border-[#FFFFFF38] bg-[#121212] py-8 px-6 rounded-[25px] text-center max-w-[380px]">
                    <Image src={ImpactImg} alt="mail" quality={100} width={1000} height={1000} className="h-[80px] mx-auto mb-4 w-auto object-center object-cover" />

                    <h4 className="mb-3 text-[#D5D5D5] font-camptonbold text-xl">Impact</h4>
                    <p className="text-sm md:text-base text-[#ABABAC] leading-loose md:leading-loose mb-8">
                        Every project is an opportunity to do work that matters.
                    </p>
                    <button className="text-base font-bold text-[#31A5DE] flex justify-center items-center text-center w-max mx-auto  gap-3">About Us <FaArrowRight /></button>
                </div>
                <div className="border border-solid border-[#FFFFFF38] bg-[#121212] py-8 px-6 rounded-[25px] text-center max-w-[380px]">
                    <Image src={InnovationImg} alt="mail" quality={100} width={1000} height={1000} className="h-[80px] mx-auto mb-4 w-auto object-center object-cover" />

                    <h4 className="mb-3 text-[#D5D5D5] font-camptonbold text-xl">Innovation</h4>
                    <p className="text-sm md:text-base text-[#ABABAC] leading-loose md:leading-loose mb-8">
                        We think beyond the obvious and embrace new solutions.
                    </p>
                    <button className="text-base font-bold text-[#31A5DE] flex justify-center items-center text-center w-max mx-auto  gap-3">About Us <FaArrowRight /></button>
                </div>
                <div className="border border-solid border-[#FFFFFF38] bg-[#121212] py-8 px-6 rounded-[25px] text-center max-w-[380px]">
                    <Image src={IntegrityImg} alt="mail" quality={100} width={1000} height={1000} className="h-[80px] mx-auto mb-4 w-auto object-center object-cover" />

                    <h4 className="mb-3 text-[#D5D5D5] font-camptonbold text-xl">Integrity</h4>
                    <p className="text-sm md:text-base text-[#ABABAC] leading-loose md:leading-loose mb-8">
                        We do the right thing, even when no one is watching.
                    </p>
                    <button className="text-base font-bold text-[#31A5DE] flex justify-center items-center text-center w-max mx-auto  gap-3">About Us <FaArrowRight /></button>
                </div>
            </div>
            <div className="mt-5 w-max mx-auto flex flex-col md:grid grid-cols-2 gap-5">
                <div className="border border-solid border-[#FFFFFF38] bg-[#121212] py-8 px-6 rounded-[25px] text-center max-w-[380px]">
                    <Image src={CollaborationImg} alt="mail" quality={100} width={1000} height={1000} className="h-[80px] mx-auto mb-4 w-auto object-center object-cover" />

                    <h4 className="mb-3 text-[#D5D5D5] font-camptonbold text-xl">Collaboration</h4>
                    <p className="text-sm md:text-base text-[#ABABAC] leading-loose md:leading-loose mb-8">
                        We listen, respect, and build better together.
                    </p>
                    <button className="text-base font-bold text-[#31A5DE] flex justify-center items-center text-center w-max mx-auto  gap-3">About Us <FaArrowRight /></button>
                </div>
                <div className="border border-solid border-[#FFFFFF38] bg-[#121212] py-8 px-6 rounded-[25px] text-center max-w-[380px]">
                    <Image src={ExcellenceImg} alt="mail" quality={100} width={1000} height={1000} className="h-[80px] mx-auto mb-4 w-auto object-center object-cover" />

                    <h4 className="mb-3 text-[#D5D5D5] font-camptonbold text-xl">Excellence</h4>
                    <p className="text-sm md:text-base text-[#ABABAC] leading-loose md:leading-loose mb-8">
                        We hold ourselves to high standards and then raise them.
                    </p>
                    <button className="text-base font-bold text-[#31A5DE] flex justify-center items-center text-center w-max mx-auto  gap-3">About Us <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default CompanyValues;