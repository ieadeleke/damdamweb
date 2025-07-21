import ArrowImg from "@/assets/arrow.png";
import Image from "next/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import AIImg from "@/assets/icons/damdam/ai.svg";
import BotsImg from "@/assets/icons/damdam/bots.svg";
import DesignImg from "@/assets/icons/damdam/design.svg";
import DevImg from "@/assets/icons/damdam/dev.svg";
import DiscoveryImg from "@/assets/icons/damdam/discovery.svg";

const IdeaToImpact = () => {
    const breakpoints = {
        0: {
            slidesPerView: 1.1
        },
        600: {
            slidesPerView: 2.2
        },
        1000: {
            slidesPerView: 3.4
        },
        1800: {
            slidesPerView: 4.4
        },
    }
    return (
        <div className="mt-16 md:mt-20 ">
            <div className="">
                <div className="flex flex-row w-full items-center justify-center mb-5 gap-3 md:gap-5 text-center max-w-[1490px] md:mx-auto md:px-20">
                    <h4 className="text-4xl md:text-[50px] font- text-white mb-3 w-ma">From idea</h4>
                    <Image src={ArrowImg} alt="logo" quality={100} width={1000} height={1000} className="hidden md:block h-auto max-w-[400px] whitespace-nowrap" />
                    <h4 className="text-4xl md:text-[50px] font- text-white mb-3">to impact</h4>
                </div>
                <Swiper
                    spaceBetween={20} breakpoints={breakpoints} centeredSlides={false} slidesOffsetBefore={50}
                >
                    <SwiperSlide key={1} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                        <Image src={DiscoveryImg} alt="discovery" quality={100} width={1000} height={1000} className="h-auto w-[30px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Discovery</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                We start by understanding your goals, challenges, and users. Our Discovery phase involves in-depth research, stakeholder interviews, and strategic alignment to ensure we&apos;re solving the right problem from the start.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                        <Image src={DesignImg} alt="design" quality={100} width={1000} height={1000} className="h-auto w-[30px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Design</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Our design process focuses on creating intuitive, human-centered interfaces. We translate insights into clean, functional experiences that drive engagement and make complex systems easy to use.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={3} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                        <Image src={DevImg} alt="development" quality={100} width={1000} height={1000} className="h-auto w-[35px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">Development</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Using modern frameworks and best practices, we develop scalable, secure, and high-performing solutions. Whether it&apos;s a web app, mobile platform, or enterprise system, our builds are made to last.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={4} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                        <Image src={AIImg} alt="ai" quality={100} width={1000} height={1000} className="h-auto w-[30px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">AI Leaning</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                We integrate intelligent systems that learn and adapt. From predictive analytics to process automation, our AI-powered tools help you stay ahead by working smarter, not harder.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={5} className="p-5 rounded-[9px] min-h-[340px] rounded-[9px] slider-bg">
                        <Image src={BotsImg} alt="bot" quality={100} width={1000} height={1000} className="h-auto w-[50px] mb-20 object-fit object-cover" />
                        <div>
                            <h4 className="text-white text-2xl mb-3">ChatBox</h4>
                            <p className="text-white text-sm leading-loose font-camptonlight">
                                Our advanced ChatBox solutions provide real-time engagement and 24/7 support. Designed for accuracy and personalization, they improve customer interaction while reducing operational load.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default IdeaToImpact;