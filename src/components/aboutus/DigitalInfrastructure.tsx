'use client';

import SoftwareImg from "@/assets/software.png";
import Image from "next/image";
import { useState } from "react";


const DigitalInfrastructure = () => {
    const [currentInfrastructureView, setCurrentInfrastructureView] = useState<number>(0);
    return (
        <section className="px-5 md:px-48 py-20 md:py-28 bg-[#101010]">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-20 justify-between mb-5 md:mb-14">
                <h3 className="text-2xl md:text-6xl text-white leading-relaxed md:leading-[1.1] md:max-w-[300px]">
                    Digital Infrastructure
                </h3>
                <p className="text-sm md:text-lg leading-loose md:leading-loose font-camptonlight text-[#B2B2B2] max-w-[500px]">
                    At DamDam Global, we provide practical, reliable, and tailored technology services that help businesses and government agencies grow, improve operations, and deliver better services to their users.
                </p>
            </div>
            <div data-no-animate className="border-2 border-solid border-[#8B8B8B] max-w-[1420px] flex md:hidden flex-col justify-betwee mx-auto py-4 rounded-[20px] gap-0">
                <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-0 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(0)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">Software Development</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">01</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 0 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    At Damdam Global, we build robust, scalable software solutions that power core operations for businesses, governments, and institutions. From enterprise applications to custom-built platforms, our software is engineered to solve real-world challenges, drive efficiency, and support long-term digital growth.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
                <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(1)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">UI & UX Design</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">02</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 1 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    We craft user experiences that are intuitive, accessible, and visually impactful. By blending strategy with design thinking, we ensure every interface not only looks good but works seamlessly. Our UI/UX approach focuses on user needs, ensuring engagement, ease of use, and real results.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
                <div className={`flex h-full w-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(2)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">Data Analytics & AI</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">03</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 2 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    We harness the power of data to unlock insights, drive smarter decisions, and automate complex processes. Our AI-driven solutions help organizations anticipate trends, personalize services, and operate with precision. At Damdam, data isn't just collected — it&apos;s transformed into action.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(3)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">IT Consultancy & Digital Transformation</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">04</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 3 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    We guide organizations through every stage of digital evolution — from strategy to execution. Our consultancy services align technology with business goals, helping clients modernize legacy systems, adopt new tools, and build future-ready operations.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-b-2 pt-6 pb-1 border-solid border-[#8B8B8B] px-2`} onClick={() => setCurrentInfrastructureView(4)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">Cloud Solutions & Infrastructure</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">05</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 4 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    Damdam Global delivers secure, scalable cloud solutions that support agility and growth. From cloud migration to infrastructure optimization, we help teams work smarter, collaborate seamlessly, and scale without limits — all while ensuring top-tier data security and performance.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra pt-6 pb-0 px-2`} onClick={() => setCurrentInfrastructureView(5)}>
                    <div className={`flex flex-col gap-5 h-full w-full relative items-center`}>
                        <div className="flex w-full flex-co items-center relative justify-between h-full">
                            <div>
                                <h4 className="text-base md:text-lg text-white w-full vertical-tex whitespace-nowrap">Payment Portals & Payroll Services</h4>
                            </div>
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">06</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 5 ? 'view' : ''}`}>
                            <div className="mb-5">
                                <p className="text-sm font-camptonlight leading-loose md:leading-loose text-[#BCBCBC]">
                                    We design and deploy efficient, compliant, and user-friendly payment and payroll systems tailored to organizational needs. Whether it's streamlining government collections or automating company-wide disbursements, our platforms ensure transactions are fast, transparent, and secure.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full md:w-[450px] object-fit object-cover mb-4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-solid border-[#8B8B8B] h-[600px] max-w-[1420px] hidden md:flex justify-betwee mx-auto py-4 px-3 rounded-[20px]">
                {/* pr-32 */}
                {/* ${currentInfrastructureView === 1 ? 'w-[800px]' : ''} */}
                <div className={`flex h-full relative cursor-pointer infra px-4 ${currentInfrastructureView === 0 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(0)}>
                    <div className={`flex gap-5 h-full relative`}>
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#E5E5E5]">01</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 0 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Software Development</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    At Damdam Global, we build robust, scalable software solutions that power core operations for businesses, governments, and institutions. From enterprise applications to custom-built platforms, our software is engineered to solve real-world challenges, drive efficiency, and support long-term digital growth.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Software Development</h4>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-x-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 1 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(1)}>
                    <div className="flex gap-5 h-full relative">
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#8B8B8B]">02</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 1 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">UI & UX Design</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    We craft user experiences that are intuitive, accessible, and visually impactful. By blending strategy with design thinking, we ensure every interface not only looks good but works seamlessly. Our UI/UX approach focuses on user needs, ensuring engagement, ease of use, and real results.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">UI & UX Design</h4>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 2 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(2)}>
                    <div className="flex gap-5 h-full relative">
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#8B8B8B]">03</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 2 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Data Analytics & AI</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    We harness the power of data to unlock insights, drive smarter decisions, and automate complex processes. Our AI-driven solutions help organizations anticipate trends, personalize services, and operate with precision. At Damdam, data isn't just collected — it&apos;s transformed into action.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Data Analytics & AI</h4>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 3 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(3)}>
                    <div className="flex gap-5 h-full relative">
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#8B8B8B]">04</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 3 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">IT Consultancy & Digital Transformation</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    We guide organizations through every stage of digital evolution — from strategy to execution. Our consultancy services align technology with business goals, helping clients modernize legacy systems, adopt new tools, and build future-ready operations.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">IT Consultancy & Digital Transformation</h4>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra border-r-2 px-6 border-solid border-[#8B8B8B] ${currentInfrastructureView === 4 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(4)}>
                    <div className="flex gap-5 h-full relative">
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#8B8B8B]">05</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 4 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Cloud Solutions & Infrastructure</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    Damdam Global delivers secure, scalable cloud solutions that support agility and growth. From cloud migration to infrastructure optimization, we help teams work smarter, collaborate seamlessly, and scale without limits — all while ensuring top-tier data security and performance.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Cloud Solutions & Infrastructure</h4>
                    </div>
                </div>
                <div className={`flex h-full relative cursor-pointer infra px-6 ${currentInfrastructureView === 5 && 'w-[800px]'}`} onClick={() => setCurrentInfrastructureView(5)}>
                    <div className="flex gap-5 h-full relative">
                        <div className="flex flex-col items-start relative w-max justify-between h-full">
                            <div>
                                <h4 className="text-base text-[#8B8B8B]">06</h4>
                            </div>
                        </div>
                        <div className={`main-view ${currentInfrastructureView === 5 ? 'view' : ''}`}>
                            <div className="w-[450px mb-5">
                                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Payment Portals & Payroll Services</h4>
                                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                                    We design and deploy efficient, compliant, and user-friendly payment and payroll systems tailored to organizational needs. Whether it's streamlining government collections or automating company-wide disbursements, our platforms ensure transactions are fast, transparent, and secure.
                                </p>
                            </div>
                            <Image src={SoftwareImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-[450px] object-fit object-cover" />
                        </div>
                        <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-[0.8]">Payment Portals & Payroll Services</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DigitalInfrastructure;