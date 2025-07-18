import SearchImg from "@/assets/search.svg";
import { FaArrowRight } from "react-icons/fa";
import ImpactImg from "@/assets/icons/value/impact.png";
import ExcellenceImg from "@/assets/icons/value/excellence.png";
import CollaborationImg from "@/assets/icons/value/collaboration.png";
import InnovationImg from "@/assets/icons/value/innovation.png";
import IntegrityImg from "@/assets/icons/value/integrity.png";


import Image from "next/image";

const WhyWorkWithUs = () => {
    return (
        <div className="frame max-w-[1550px] mb-28 bg-[#1E1E1E] rounded-[24px] py-14 pr-20 mx-auto grid grid-cols-2">
            <div></div>
            <div>
                <h4 className="text-[#ACACAC] text-3xl mb-4">
                    Why Work With Us
                </h4>
                <p className="text-sm leading-loose text-[#AAAAAA]">
                    At DamDam Global, we believe your work should matter. That is why we focus on building solutions that solve real problems for real people. Whether we are helping governments digitize services or supporting businesses to grow through innovation, our work is purpose-driven and people-centred.
                </p>
            </div>
        </div>
    )
}

export default WhyWorkWithUs;