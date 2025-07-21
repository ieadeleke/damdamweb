'use client';

import Laswa from "@/assets/laswa.png";
import Pay4It from "@/assets/pay4it.png";
import Paynest from "@/assets/paynest.png";
import Shikini from "@/assets/shikini.png";
import LIRS from "@/assets/lirs.png";
import Businex from "@/assets/businex.png";
import Booktime from "@/assets/booktime.png";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const PortfolioPage = () => {
    const [currentValuesView, setCurrentValuesView] = useState<number>(0);
    return (
        <section className="px-5 md:px-20 pt-20 pb-20 md:pt-28 md:pb-28 max-w-[1600px] mx-auto">
            <h4 className="text-blue mb-4 md:mb-5 text-base md:text-3xl">
                Portfolio
            </h4>
            <p className="text- leading-loose md:leading-normal md: max-w-[1200px] mb-10 md:mb-16 text-[#B2B2B2] text-base md:text-4xl">
                Our product ecosystem is designed to accelerate growth, enhance public service delivery, and simplify how businesses and citizens engage with technology.
            </p>
            <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-10">
                <div>
                    <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
                        <Image src={Pay4It} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">Pay4it</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-[15px] base font-camptonlight md:max-w-[650px]">
                                Pay4IT empowers businesses, individuals, and governments with innovative financial technology solutions. Whether you are a merchant, a service provider, or an entrepreneur, we have a suite of business solutions specially curated for you. Pay4IT enables digital payments, drives transparency, efficiency, and economic growth across diverse sectors.
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://payment.usepay4it.com/#/auth/register" target="_blank" rel="noreferrer">
                        <Image src={Paynest} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">PayNest</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                                It simplifies three key areas of financial compliance; the PAYE API, Withholding API, and the Lagos State Government Bill Payment API. This solution facilitates efficient tax calculations and payments directly to Lagos State Internal Revenue Service (LIRS).
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
                        <Image src={Businex} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">BusiNex</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                                Automates payroll, tax deductions and compliance.
                            </p>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                                Businex is a payroll and compliance solution. It automates salary processing, ensures compliance, and integrates tax remittance directly with the Lagos State Inland Revenue Service (LIRS). Businesses no longer need to spend hours calculating deductions, generating payroll reports, and remitting payments manually. Businex optimise these processes by ensuring efficiency, accuracy, and compliance
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
                        <Image src={Booktime} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">BOOKTIME</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[640px]">
                                BookTime is a cutting-edge digital visitor management system.
                            </p>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                                It transforms the traditional approach to visitor logs by providing businesses with a streamlined and highly customisable solution to elevate their visitor experiences.
                            </p>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight md:max-w-[650px]">
                                From visitor check-ins to real-time analytics, BookTime transforms the way organizations manage their guests, ensuring a modern, efficient, and secure visitor experience.
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://usepay4it.com" target="_blank" rel="noreferrer">
                        <Image src={Laswa} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">Laswa</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                                Custom digital infrastructure for the Lagos State Waterways Authority enhancing trip tracking, ticketing, and marine service oversight through smart technology.
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://madamshikini.lagosstate.gov.ng/" target="_blank" rel="noreferrer">
                        <Image src={Shikini} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-5" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">Madam Shikini</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                                Madam Shikini is an AI-powered chatbot built to assist Lagos residents with instant access to government services, payment guidance, and everyday civic information.
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="https://madamshikini.lagosstate.gov.ng/" target="_blank" rel="noreferrer">
                        <Image src={LIRS} alt="mail" quality={100} width={1000} height={1000} className="h-[250px] md:h-[400px] w-full object-fit object-cover mb-6" />
                        <div>
                            <h4 className="text-xl md:text-2xl mb-4 text-white">LIRS</h4>
                            <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-sm md:text-base font-camptonlight max-w-[620px]">
                                DamDam Global combines field operations, technology enablement, and lean management to ensure high-yield performance. With a focused team of field agents and dedicated operational support, the strategy maximises reach, reduces inefficiencies, and guarantees transparent collections.
                            </p>
                            {/* The markets in this zone serve over 360,000 traders, making them high-potential zones for informal sector tax remittance and a viable ecosystem for digital enumeration and collections. Given the scale of commercial activity, the informal sector within these markets offers a huge opportunity to generate revenue through physical and technology-enabled tax collection. */}
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage;