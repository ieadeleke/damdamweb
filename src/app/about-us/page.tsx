'use client';

import AppLayout from "@/components/layout/Layout";
import AboutHero from "@/components/aboutus/AboutHero";
import Solutions from "@/components/aboutus/Solutions";
import IdeaToImpact from "@/components/aboutus/IdeaToImpact";
import PageSummary from "@/components/aboutus/PageSummary";
import DigitalInfrastructure from "@/components/aboutus/DigitalInfrastructure";


const AboutUsPage = () => {
    return (
        <AppLayout>
            <AboutHero />
            <Solutions />
            <IdeaToImpact />
            <PageSummary />
            <DigitalInfrastructure />
        </AppLayout >
    )
}

export default AboutUsPage;