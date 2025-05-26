import CareerImg from "@/assets/career.png";
import HeroImg from "@/assets/image.png";
import SearchImg from "@/assets/search.svg";
import Image from "next/image";
import AppLayout from "@/components/layout/Layout";

const CareersPage = () => {
    return (
        <AppLayout>
            <div className="px-20 p0">
                <div className="flex gap-0 p-0 max-w-[1630px] mx-auto">
                    <div className="w-[500px]">
                        <Image src={CareerImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-auto" />
                    </div>
                    <div className="flex-1 text-right py-32">
                        <p className="text-lg text-[#DADADA] mb-2 w-[425px] ml-auto">At DamDam Global, we're more than a tech company</p>
                        <h2 className="text-8xl leading-[1.2] text-white font-camptonbold">
                            Your Tech <br /> Career Starts
                        </h2>
                        <h2 className="text-8xl leading-[1.2] flex gap-2 justify-end items-center text-white font-camptonbold">
                            <p className="text-[#DADADA] text-right text-lg w-[290px] font-camptonlight">
                                We&apos;re a collective of problem-solvers, builders, and bold thinkers.
                            </p>Here +
                        </h2>
                    </div>
                </div>
                <Image src={HeroImg} alt="mail" quality={100} width={1000} height={1000} className="max-w-[1630px] mx-auto h-full w-full rounded-[20px] object-fit object-cover" />
                <div className="mt-20 pb-28 max-w-[1630px] mx-auto">
                    <div className="text-center">
                        <h4 className="text-4xl font- text-white mb-3">Featured Jobs</h4>
                        <p className="text-base leading-loose text-white">
                            Join a team that&apos;s building real solutions and making real impact.
                        </p>
                    </div>
                    <div className="mt-14 grid grid-cols-3 gap-10">
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                        </div>
                        <div className="bg-[#121212] p-6 rounded-[12px]">
                            <div className="flex justify-between mb-2 items-center">
                                <h2 className="text-blue text-3xl font-camptonbold">01</h2>
                                <Image src={SearchImg} alt="mail" quality={100} width={1000} height={1000} className="h-full w-[40px]" />
                            </div>
                            <h4 className="text-[#D5D5D5] font-camptonbold text-xl mb-3">Legacy Response Strategist</h4>
                            <p className="text-[13px] text-[#8D8D8D] leading-loose md:leading-loose mb-4">
                                We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
                            </p>
                            <button className="bg-blue px-16 text-sm py-4 rounded-full text-white">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default CareersPage;