import CareerImg from "@/assets/career.png";
import HeroImg from "@/assets/image.png";
import SearchImg from "@/assets/search.svg";
import Image from "next/image";
import AppLayout from "@/components/layout/Layout";
import AllJobs from "@/components/career/CareerJobs";
import JobHero from "@/components/career/CareerHero";
import CompanyValues from "@/components/career/CompanyValues";
import WhyWorkWithUs from "@/components/career/WhyWork";
import WhatWeLookFor from "@/components/career/WhatWeLookFor";

const CareersPage = () => {
    return (
        <AppLayout>
            <div className="px-5 md:px-20 p0">
                <AllJobs />
                <JobHero />
                <CompanyValues />
                <WhatWeLookFor />
                <WhyWorkWithUs />
            </div>
        </AppLayout>
    )
}

export default CareersPage;