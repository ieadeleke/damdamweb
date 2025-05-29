import CareerImg from "@/assets/career.png";
import HeroImg from "@/assets/image.png";
import SearchImg from "@/assets/search.svg";
import Image from "next/image";
import AppLayout from "@/components/layout/Layout";

const CareersPage = () => {
    return (
        <AppLayout>
            <div className="px-5 md:px-20 p0">
                <div className="flex gap-0 p-0 max-w-[1630px] mx-auto">
                    <div className="hidden md:block md:w-[500px]">
                        <Image src={CareerImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-auto" />
                    </div>
                    <div className="flex-1 text-right pt-32 pb-20 md:pb-32">
                        <p className="text-sm md:text-lg text-[#DADADA] mb-4 md:mb-2 w-[50%] md:w-[425px] ml-auto">At DamDam Global, we're more than a tech company</p>
                        <h2 className="text-5xl md:text-8xl leading-[1.4] md:leading-[1.2] text-white font-camptonbold">
                            Your Tech <br /> Career Starts
                        </h2>
                        <h2 className="text-5xl md:text-8xl leading-[1.4] md:leading-[1.2] flex gap-4 justify-end items-center text-white font-camptonbold">
                            <p className="text-[#DADADA] text-right text-sm md:text-lg w-[290px] font-camptonlight hidden md:block">
                                We&apos;re a collective of problem-solvers, builders, and bold thinkers.
                            </p>
                            Here +
                        </h2>
                        <p className="text-[#DADADA] leading-loose text-right text-sm md:text-lg w-[290px] ml-auto font-camptonlight block md:hidden">
                            We&apos;re a collective of problem-solvers, builders, and bold thinkers.
                        </p>
                    </div>
                </div>
                <Image src={HeroImg} alt="mail" quality={100} width={1000} height={1000} className="max-w-[1630px] mx-auto h-full w-full rounded-[20px] object-fit object-cover" />
                <div className="mt-20 pb-28 max-w-[1630px] mx-auto">
                    <div className="text-center">
                        <h4 className="text-3xl md:text-4xl font-camptonsemibold text-white mb-3">Featured Jobs</h4>
                        <p className="text-base leading-loose text-white">
                            Join a team that&apos;s building real solutions and making real impact.
                        </p>
                    </div>
                    <div className="mt-14 flex flex-col md:grid grid-cols-3 gap-10">
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-4 md:mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-4 md:mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-4 md:mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-4 md:mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-4 md:mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-sm md:text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-12 md:px-16 text-sm py-3 md:py-4 rounded-full text-white">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default CareersPage;