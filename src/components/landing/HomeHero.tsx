import Companies from "@/assets/companies.png";
import Image from "next/image";

const HomeHero = () => {
    return (
        <section className="hero-bg flex items-center px-3 md:px-20 pt-24 md:max-w-[1900px] mx-auto">
            <div className="md:max-w-[1700px] mx-auto">
                <div className="hidden md:block">
                    <h1 className="text-4xl md:text-7xl text-white md:flex mb-1 md:mb-5 gap-10 items-center">
                        <p className="text-blue text-sm w-[50%] mb-3 md:mb-0 md:text-lg md:w-[230px]">
                            Innovating the Future, One Line of Code at a Time.
                        </p>Stay ahead of the curve with
                    </h1>
                    <h1 className="text-4xl md:text-7xl text-white mb-3 md:mb-10">
                        Future ready digital solutions
                    </h1>
                </div>
                <div className="block md:hidden">
                    <p className="text-blue text-sm leading-loose md:leading-normal w-[50%] mb-3 md:mb-0 md:w-full md:text-lg md:w-[230px]">
                        Innovating the Future, One Line of Code at a Time.
                    </p>
                    <h1 className="text-4xl md:text-7xl leading-[1.3] text-white mb-3 md:mb-10">
                        Stay ahead of the curve with Future ready digital solutions
                    </h1>
                </div>
                <p className="text-white text-sm md:text-lg leading-loose md:leading-relaxed md:w-[650px] mb-10 font-camptonlight">
                    DamDam Global is a forward-thinking technology consulting and software development company committed to driving business and government transformation through digital innovation. We specialise in designing and implementing smart, efficient, and scalable solutions that simplify service delivery, improve revenue generation, and promote accountability.
                </p>
                <div className="flex gap-0 items-center">
                    <p className="text-sm md:text-base text-[#C5C5C5] font-camptonlight md:w-[240px]">
                        Trusted by leading organizations across sectors.
                    </p>
                    <Image src={Companies} alt="companies" quality={100} width={700} height={700} className="max-w-[260px] h-full w-full" />
                </div>
            </div>
        </section>
    )
}

export default HomeHero;