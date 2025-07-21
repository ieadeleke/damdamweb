import HeroImg from "@/assets/about.png";
import Image from "next/image";

const AboutHero = () => {
    return (
        <div className="px-5 md:px-20 py-36 pb-12 md:pb-20">
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
                    <p className="text-sm md:text-base leading-loose md:leading-loose font-camptonlight mb-5 md:mb-10 text-[#B2B2B2]">
                        DamDam Global is a technology consulting and software development company on a mission to accelerate Africa&apos;s digital transformation. We design and deliver powerful digital solutions that help organizations run smarter, serve better, and scale faster. Our work goes beyond code, we partner with our clients to solve real problems using technology.
                    </p>
                    <p className="text-sm md:text-base leading-loose md:leading-loose font-camptonlight text-[#B2B2B2]">
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
    )
}

export default AboutHero;