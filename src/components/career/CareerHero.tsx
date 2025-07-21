import CareerImg from "@/assets/career.png";
import StarImg from "@/assets/star.png";

import Image from "next/image";

const JobHero = () => {
    return (
        <div className="flex gap-0 p-0 mb-20 md:mb-32 relative max-w-[1630px] mx-auto">
            <div className="hidden md:block md:w-[500px]">
                <Image src={CareerImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-auto" />
            </div>
            <div className="flex-1 text-right pt-0 md:pt-32 pb-10 md:pb-32">
                <p className="text-sm md:text-xl text-[#DADADA] mb-4 md:mb-2 w-[50%] md:w-[425px] ml-auto capitalize">A future you can build</p>
                <h2 className="text-4xl md:text-6xl leading-[1.4] mb-4 md:leading-[1.2] text-white font-camptonbold">
                    Work That Matters. A Team That Supports
                </h2>
                {/* <p className="text-[#DADADA] text-right text-sm md:text-base font-camptonlight hidden md:block">
                    Work That Matters. A Team That Supports. A Future You Can Build.
                </p> */}
                <p className="text-[#DADADA] max-w-[800px] leading-loose md:leading-loose text-right text-sm md:text-base ml-auto font-camptonlight">
                    At DamDam Global, we are not just building software, we are building the future. We believe in the power of people and technology to create lasting impact. That is why we are always looking for thinkers, builders, and problem-solvers who want to work on meaningful projects that change how businesses and governments operate.
                </p>
                <p className="text-[#DADADA] max-w-[800px] leading-loose md:leading-loose text-right text-sm md:text-base ml-auto font-camptonlight">
                    We offer more than jobs; we offer career journeys. Whether you are a software engineer, designer, strategist, or project manager, you will find a place here to learn, grow, and do your best work.
                </p>
            </div>
            <div className="absolute -bottom-16 md:-bottom-28 right-0">
                <Image src={StarImg} alt="rings" quality={100} width={1000} height={1000} className="h-[60px] md:h-[180px] mx-auto mb-4 w-auto object-center object-cover" />
            </div>
        </div>
    )
}

export default JobHero;