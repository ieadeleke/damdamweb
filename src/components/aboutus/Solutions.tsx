import HeroImg from "@/assets/about.png";
import Image from "next/image";
import BotHandImg from "@/assets/bot.png";


const Solutions = () => {
    return (
        <div className="flex gap-0 mt-0 px-5 md:px-20 relative">
            <div className="md:w-[350px]"></div>
            <div className="flex-1 z-30">
                <h3 className="text-xl md:text-4xl leading-normal md:leading-relaxed text-[#D5D5D5] mb-10 max-w-[1000px] mx-auto">
                    Our solutions power digital transformation. This enables efficiency, security, and impact at scale.
                </h3>
                <div className="md:w-[600px] 3xl:w-[773px] mx-auto">
                    <div className="mb-8">
                        <h4 className="text-lg md:text-[28px] mb-1 md:mb-2 md:mb-4">Digital Infrastructure</h4>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                            Robust, scalable systems that serve as the backbone for modern operations; from APIs to cloud-native architecture.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg md:text-[28px] mb-1 md:mb-2 md:mb-4">Seamless Payments</h4>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                            Secure, intelligent payment systems that simplify financial flows across organizations, platforms, and services.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg md:text-[28px] mb-1 md:mb-2 md:mb-4">Enterprise Platforms</h4>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                            End-to-end tools tailored for complex operational needs; from workforce systems to customer engagement platforms.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg md:text-[28px] mb-1 md:mb-2 md:mb-4">Government Technology</h4>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2]">
                            Solutions that support tax, identity, billing, and transparency that is built to scale and serve the public good.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-lg md:text-[28px] mb-1 md:mb-2 md:mb-4">Custom Software Development</h4>
                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#B2B2B2] md:w-[90%]">
                            Tailored digital products designed to meet your specific objectives.
                        </p>
                    </div>
                </div>
            </div>
            <Image src={BotHandImg} alt="mail" quality={100} width={1000} height={1000} className="hidden md:block h-full w-auto object-fit object-cover absolute -top-16 left-0 z-20" />
        </div>
    )
}

export default Solutions;