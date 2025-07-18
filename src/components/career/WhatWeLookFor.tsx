import SearchImg from "@/assets/search.svg";
import { FaArrowRight } from "react-icons/fa";
import ImpactImg from "@/assets/icons/value/impact.png";
import ExcellenceImg from "@/assets/icons/value/excellence.png";
import CollaborationImg from "@/assets/icons/value/collaboration.png";
import InnovationImg from "@/assets/icons/value/innovation.png";
import IntegrityImg from "@/assets/icons/value/integrity.png";


import Image from "next/image";

const WhatWeLookFor = () => {
    return (
        <div className="lookfor max-w-[1550px] mb-28 bg-[#1E1E1E] rounded-[24px] py-14 pr-20 mx-auto grid grid-cols-2">
            <div></div>
            <div>
                <h4 className="text-white text-5xl mb-4">
                    <span className="text-[#31A5DE]">What</span> We Look For
                </h4>
                <p className="text-[15px] leading-loose text-white mb-4">
                    We are always searching for people who are:
                </p>
                <ul className="flex flex-col gap-4 pl-3 mb-6">
                    <li className="text-base">
                        1. Curious and eager to learn</li>
                    <li className="text-base">2. Passionate about solving problems with technology</li>
                    <li className="text-base">3. Independent but collaborative</li>
                    <li className="text-base">4. Open to feedback and improvement</li>
                    <li className="text-base">5. Excited to contribute to projects that make a difference
                    </li>
                </ul>
                <p className="text-[15px] border-l-4 border-[#31A5DE] py-2 pl-3 leading-loose text-white">
                    Whether you are a software engineer, designer, strategist, or project manager, we welcome people from diverse backgrounds who are ready to grow with us.
                </p>
            </div>
        </div>
    )
}

export default WhatWeLookFor;