import Image from "next/image";
import UserImg from "@/assets/icons/damdam/user.svg";
import CuttingImg from "@/assets/icons/damdam/cutting.svg";
import ResultsImg from "@/assets/icons/damdam/results.svg";
import GlobeImg from "@/assets/icons/damdam/globe.svg";
import Logo from "@/assets/logo.png";


const PageSummary = () => {
    return (
        <div className="mt-28 px-5 md:px-20 max-w-[1630px] mx-auto">
            <div className="text-center">
                <Image src={Logo} alt="logo" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-7 object-fit object-cover" />
                <h4 className="text-3xl md:text-6xl font- text-white mb-4">We don&apos;t just develop your ideas</h4>
                <p className="text-sm md:text-base leading-loose text-white">
                    We create experiences that <span className="text-blue italic">connect</span>, <span className="text-blue italic">inspire</span>, and <span className="text-blue italic">convert</span>
                </p>
            </div>
            <div className="py-14 md:py-20 md:px-6 mb-5 md:mb-8 flex flex-col md:grid grid-cols-4 gap-10 max-w-[1466px] mx-auto">
                <div className="text-center">
                    <Image src={UserImg} alt="user" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                    <h4 className="text-xl md:text-2xl font- text-white mb-2">Client-centric approach</h4>
                    <p className="text-sm text-[#B2B2B2] leading-loose">
                        Your vision is our utmost priority
                    </p>
                </div>
                <div className="text-center">
                    <Image src={CuttingImg} alt="cutting-edge design" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                    <h4 className="text-xl md:text-2xl font- text-white mb-2">Cutting-edge design</h4>
                    <p className="text-sm text-[#B2B2B2] leading-loose">
                        Modern, sleek, and user-focused solutions
                    </p>
                </div>
                <div className="text-center">
                    <Image src={ResultsImg} alt="results driven" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                    <h4 className="text-xl md:text-2xl font- text-white mb-2">Results-driven strategy</h4>
                    <p className="text-sm text-[#B2B2B2] leading-loose">
                        Creativity meets performance
                    </p>
                </div>
                <div className="text-center">
                    <Image src={GlobeImg} alt="globe" quality={100} width={1000} height={1000} className="h-auto w-[40px] mx-auto mb-5 md:mb-10 object-fit object-cover" />
                    <h4 className="text-xl md:text-2xl font- text-white mb-2">Global experience</h4>
                    <p className="text-sm text-[#B2B2B2] leading-loose">
                        Trusted by brands worldwide
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageSummary;