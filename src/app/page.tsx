import AppLayout from "@/components/layout/Layout";
import Image from "next/image";

import Laswa from "@/assets/laswa.png";
import Pay4It from "@/assets/pay4it.png";
import Paynest from "@/assets/paynest.png";
import Shikini from "@/assets/shikini.png";
import Businex from "@/assets/businex.png";
import VisionImg from "@/assets/vision.png";
import ValuesImg from "@/assets/values.png";
import MissionImg from "@/assets/mission.png";
import SoftwareImg from "@/assets/software.png";
import GlobeImg from "@/assets/globe.png";
import Companies from "@/assets/companies.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import { FaAngleDown, FaAngleRight } from "react-icons/fa6";


export default function Home() {
  return (
    <AppLayout>
      <section className="hero-bg flex items-center px-20 pt-24">
        <div>
          <h1 className="text-7xl text-white flex mb-5 gap-10 items-center">
            <p className="text-blue text-lg w-[230px]">
              Innovating the Future, One Line of Code at a Time.
            </p>Stay ahead of the curve with
          </h1>
          <h1 className="text-7xl text-white mb-10">
            Future ready digital solutions
          </h1>
          <p className="text-white text-lg leading-relaxed md:leading-relaxed w-[550px] mb-10 font-camptonlight">
            DamDam Global builds transformative tech that empowers businesses, governments, and organizations to scale with purpose. From digital infrastructure to seamless payments, we engineer progress.
          </p>
          <div className="flex gap-0 items-center">
            <p className="text-[#C5C5C5] font-camptonlight w-[240px]">
              Trusted by leading organizations across sectors.
            </p>
            <Image src={Companies} alt="companies" quality={100} width={700} height={700} className="max-w-[260px] h-full w-full" />
          </div>
        </div>
      </section>
      <div className="bg-blue w-full h-[90px]"></div>
      <section className="px-20 py-28 bg-[#101010]">
        <h4 className="text-blue text-xl mb-4">WHO WE ARE</h4>
        <p className="text- leading-[1.6] text-[#B2B2B2] max-w-[1300px] text-3xl mb-24">
          DamDam Global builds transformative technology that empowers businesses, governments, and organizations to scale with purpose. From digital infrastructure to seamless payments — we don&apos;t just build tech; we build momentum.
        </p>
        <div className="flex items-center gap-5">
          <div className="flex-1">
            <Image src={GlobeImg} alt="mail" quality={100} width={1000} height={1000} className="max-w-[1178px] ml-auto h-full w-full object-fit object-cover" />
          </div>
          <div className="w-[480px]">
            <h4 className="text-[46px] -ml-16 mb-5">What sets us Apart:</h4>
            <ul className="list-disc flex flex-col gap-5 mb-7 pl-8">
              <li className="text-lg leading-normal text-[#B2B2B2]">
                Strategic focus on both public and private sector needs
              </li>
              <li className="text-lg leading-normal text-[#B2B2B2]">
                Scalable, cloud-native digital infrastructure
              </li>
              <li className="text-lg leading-normal text-[#B2B2B2]">
                Expertise in payments, data systems, and enterprise tech
              </li>
            </ul>
            <Link href='' className="w-max flex items-center gap-5 border border-solid border-white rounded-full py-4 px-12">Contact Us <FaArrowRight className="text-[#B2B2B2] text-2xl" /></Link>
          </div>
        </div>
      </section>
      <section className="px-40 py-28">
        <div className="grid grid-cols-2 items-center gap-36">
          <div>
            <h4 className="text-white text-xl mb-4 font-camptonbold">Our Vision</h4>
            <p className="text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[460px]">
              We aim to become Africa&apos;s most trusted partner for digital transformation delivering innovative and reliable technology that helps businesses and public institutions thrive.
            </p>
          </div>
          <div>
            <Image src={VisionImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 items-center gap-36">
          <div>
            <Image src={MissionImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
          <div>
            <h4 className="text-white text-xl mb-4 font-camptonbold">Our Mission</h4>
            <p className="text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[490px]">
              Our mission is simple: to create powerful, user-focused digital solutions that drive growth, simplify processes, and unlock new opportunities for our clients.
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 items-center gap-36">
          <div className="max-w-[490px]">
            <h4 className="text-white text-xl mb-8 font-camptonbold">Our Values</h4>
            <div className="mb-5">
              <div className="flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Impact</h4>
                <FaAngleDown className="text-white text-base" />
              </div>
              <p className="text-base font-camptonlight leading-loose md:leading-loose text-[#B2B2B2] max-w-[440px]">
                Our mission is simple: to create powerful, user-focused digital solutions that drive growth, simplify processes, and unlock new opportunities for our clients.
              </p>
            </div>
            <div className="mb-5">
              <div className="flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Innovation</h4>
                <FaAngleRight className="text-white text-base" />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Integrity</h4>
                <FaAngleRight className="text-white text-base" />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Collaboration</h4>
                <FaAngleRight className="text-white text-base" />
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-3 justify-between">
                <h4 className="text-white text-base font-camptonbold">Excellence</h4>
                <FaAngleRight className="text-white text-base" />
              </div>
            </div>
          </div>
          <div>
            <Image src={ValuesImg} alt="mail" quality={100} width={1000} height={1000} className="h-auto w-full object-fit object-cover mb-3" />
          </div>
        </div>
      </section>
      <section className="px-48 py-28 bg-[#101010]">
        <div className="flex items-center gap-20 justify-between mb-14">
          <h3 className="text-6xl text-white leading-[1.1] max-w-[300px]">
            Digital Infrastructure
          </h3>
          <p className="text-lg leading-loose md:leading-loose font-camptonlight text-[#B2B2B2] max-w-[500px]">
            At DamDam Global, we provide practical, reliable, and tailored technology services that help businesses and government agencies grow, improve operations, and deliver better services to their users.
          </p>
        </div>
        <div className="border-2 border-solid border-[#8B8B8B] h-[581px] max-w-[1420px] flex justify-betwee mx-auto py-4 px-3 rounded-[20px]">
          {/* pr-32 */}
          <div className="flex gap-5 h-full relative w-[800px]">
            <div className="flex flex-col items-start relative w-max justify-between h-full">
              <div>
                <h4 className="text-base text-[#E5E5E5]">01</h4>
              </div>
            </div>
            <div className="">
              <div className="w-[450px] mb-5">
                <h4 className="text-xl font-camptonsemibold mb-2 text-[#BCBCBC]">Software Development</h4>
                <p className="text-sm font-camptonlight leading-relaxed md:leading-relaxed text-[#BCBCBC]">
                  We design and develop custom web and mobile applications that are built around your goals. From internal tools to large-scale platforms, our team delivers secure, scalable, and user-friendly software.
                </p>
              </div>
              <Image src={SoftwareImg} alt="mail" quality={100} width={800} height={800} className="h-auto w-full object-fit object-cover" />
            </div>
            <h4 className="text-lg text-[#8B8B8B] w-full vertical-text absolute bottom-0 -mb-5 left-0">Software Development</h4>
          </div>
          <div className="flex h-full relative border-x-2 px-6 border-solid border-[#8B8B8B]">
            <div className="flex gap-5 h-full relative">
              <div className="flex flex-col items-start relative w-max justify-between h-full">
                <div>
                  <h4 className="text-base text-[#8B8B8B]">02</h4>
                </div>
              </div>
              <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-2">UI & UX Design</h4>
            </div>
          </div>
          <div className="flex h-full relative border-r-2 px-6 border-solid border-[#8B8B8B]">
            <div className="flex gap-5 h-full relative">
              <div className="flex flex-col items-start relative w-max justify-between h-full">
                <div>
                  <h4 className="text-base text-[#8B8B8B]">03</h4>
                </div>
              </div>
              <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-2">Data Analytics & AI</h4>
            </div>
          </div>
          <div className="flex h-full relative border-r-2 px-6 border-solid border-[#8B8B8B]">
            <div className="flex gap-5 h-full relative">
              <div className="flex flex-col items-start relative w-max justify-between h-full">
                <div>
                  <h4 className="text-base text-[#8B8B8B]">04</h4>
                </div>
              </div>
              <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-2">IT Consultancy & Digital Transformation</h4>
            </div>
          </div>
          <div className="flex h-full relative border-r-2 px-6 border-solid border-[#8B8B8B]">
            <div className="flex gap-5 h-full relative">
              <div className="flex flex-col items-start relative w-max justify-between h-full">
                <div>
                  <h4 className="text-base text-[#8B8B8B]">05</h4>
                </div>
              </div>
              <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-2">Cloud Solutions & Infrastructure</h4>
            </div>
          </div>
          <div className="flex h-full relative px-6">
            <div className="flex gap-5 h-full relative">
              <div className="flex flex-col items-start relative w-max justify-between h-full">
                <div>
                  <h4 className="text-base text-[#8B8B8B]">06</h4>
                </div>
              </div>
              <h4 className="text-lg text-[#8B8B8B] w-full vertical-text whitespace-nowrap absolute bottom-0 -mb-5 -left-2">Payment Portals & Payroll Services</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-28">
        <h4 className="text-blue mb-5 text-3xl">
          Our Products
        </h4>
        <p className="text- leading-normal max-w-[1200px] mb-16 text-[#B2B2B2] text-4xl">
          Our product ecosystem is designed to accelerate growth, enhance public service delivery, and simplify how businesses and citizens engage with technology.
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Image src={Pay4It} alt="mail" quality={100} width={1000} height={1000} className="h-[400px] w-full object-fit object-cover mb-4" />
            <div>
              <h4 className="text-2xl mb-2 text-white">Pay4it</h4>
              <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-base font-camptonlight max-w-[650px]">
                A seamless bill payment and collection solution for government and corporate agencies, streamlining everything from taxes to utilities through web, mobile, and POS integrations.
              </p>
            </div>
          </div>
          <div>
            <Image src={Paynest} alt="mail" quality={100} width={1000} height={1000} className="h-[400px] w-full object-fit object-cover mb-4" />
            <div>
              <h4 className="text-2xl mb-2 text-white">PayNest</h4>
              <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-base font-camptonlight max-w-[650px]">
                PayNest is our dedicated merchant dashboard, giving businesses full access to our powerful APIs for PAYE, Withholding Tax, and other remittance services.
              </p>
            </div>
          </div>
          <div>
            <Image src={Businex} alt="mail" quality={100} width={1000} height={1000} className="h-[400px] w-full object-fit object-cover mb-3" />
            <div>
              <h4 className="text-2xl mb-2 text-white">BusiNex</h4>
              <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-base font-camptonlight max-w-[650px]">
                Empowering businesses with payroll tools, employee records and compliance. Automate payroll, taxes, and employee compensation with ease.
              </p>
            </div>
          </div>
          <div>
            <Image src={Laswa} alt="mail" quality={100} width={1000} height={1000} className="h-[400px] w-full object-fit object-cover mb-3" />
            <div>
              <h4 className="text-2xl mb-2 text-white">Laswa</h4>
              <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-base font-camptonlight max-w-[620px]">
                Custom digital infrastructure for the Lagos State Waterways Authority enhancing trip tracking, ticketing, and marine service oversight through smart technology.
              </p>
            </div>
          </div>
          <div>
            <Image src={Shikini} alt="mail" quality={100} width={1000} height={1000} className="h-[400px] w-full object-fit object-cover mb-3" />
            <div>
              <h4 className="text-2xl mb-2 text-white">Madam Shikini</h4>
              <p className="text- leading-loose md:leading-loose text-[#B2B2B2] text-base font-camptonlight max-w-[620px]">
                Madam Shikini is an AI-powered chatbot built to assist Lagos residents with instant access to government services, payment guidance, and everyday civic information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
