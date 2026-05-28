import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import { CtaBanner } from '@/components/banners/ctaBanners';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';
import FAQ from '@/components/FAQ';

// images
import bgBanner from "@/assets/images/bgImages/industryMining.png";
import industryAbout from '@/assets/images/industry/metalMining/industryAbout.png'
import industrySolution from '@/assets/images/industry/metalMining/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryMetalFutureData, industryMetalChallengeData, industryMetalSolutionProviding } from '@/configs/config';
import IndustryPartsDetail from '@/components/IndustryPartsDetail';

export default function MetalMining() {
    const metalMiningFAQs = [
        {
            question: "What is SAP Commodity Management for the mining industry?",
            answer: "SAP Commodity Management is an end-to-end solution designed to manage the complexities of buying, selling, and hedging metals. It integrates SAP CTRM to manage market price risks and physical logistics in a single system."
        },
        {
            question: "How does the Commodity Pricing Engine (CPE) work?",
            answer: "The Commodity Pricing Engine (CPE) automates complex pricing based on market quotes (like LME or COMEX). It uses a specific Commodity Pricing Formula to calculate values based on purity, weight, and market volatility in real-time."
        },
        {
            question: "Does Sanocom Global provide SAP CTRM support in the UAE and USA?",
            answer: "Yes, Sanocom Global provides specialized SAP CTRM and Commodity Management consulting across the USA, UAE, and UK, focusing on digital transformation for global metals and mining enterprises."
        },
        {
            question: "What is SAP Commodity Management?",
            answer: "SAP Commodity Management streamlines trading, risk management, and logistics for metal and mining industries. It unifies processes like procurement, sales, and inventory on a single platform, reducing errors and enhancing supply chain visibility. Sanocom Global tailors it for mining operations to boost efficiency and profitability."
        },
        {
            question: "How does SAP CTRM benefit the metal and mining sector?",
            answer: "SAP Commodity Trading and Risk Management (CTRM) handles complex trades, contracts, and market volatility with real-time analytics and compliance tools. It supports deal capture, position management, and hedging for metals like iron ore and copper. Mining firms using Sanocom's expertise gain optimized trading cycles and reduced risks."
        },
        {
            question: "What is the Commodity Pricing Engine in SAP?",
            answer: "The Commodity Pricing Engine (CPE) automates complex pricing using business rules, quality parameters, assays, and market variables. It calculates accurate prices for commodities efficiently, integrating with SAP ERP for seamless invoicing. Sanocom implements CPE to handle mining-specific pricing challenges effectively."
        },
        {
            question: "Key Features of SAP Commodity Management for Mining",
            answer: "Core features include supply chain planning, contract management, logistics execution, and risk analytics tailored for metals. It enables long-term forecasting, shipment tracking, and integration with mine operations. Sanocom Global delivers these for streamlined metal and mining workflows."
        },
        {
            question: "How does SAP CTRM integrate with Commodity Pricing Engine?",
            answer: "SAP CTRM links with CPE for dynamic pricing during trades, factoring in formulas for premiums, discounts, and assays. This ensures precise settlements and real-time adjustments to market fluctuations. Sanocom's solutions enhance this integration for mining profitability."
        },
        {
            question: "Why partner with Sanocom Global for SAP Commodity Management?",
            answer: "Sanocom specializes in SAP CTRM and CPE implementations for metal and mining, offering end-to-end services like global trade management and custom formulas. Clients achieve cost savings, compliance, and scalable operations through their industry-focused expertise."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is SAP Commodity Management for the mining industry?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP Commodity Management is an end-to-end solution designed to manage the complexities of buying, selling, and hedging metals. It integrates SAP CTRM to manage market price risks and physical logistics in a single system."
                }
            },
            {
                "@type": "Question",
                "name": "How does the Commodity Pricing Engine (CPE) work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Commodity Pricing Engine (CPE) automates complex pricing based on market quotes (like LME or COMEX). It uses a specific Commodity Pricing Formula to calculate values based on purity, weight, and market volatility in real-time."
                }
            },
            {
                "@type": "Question",
                "name": "Does Sanocom Global provide SAP CTRM support in the UAE and USA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sanocom Global provides specialized SAP CTRM and Commodity Management consulting across the USA, UAE, and UK, focusing on digital transformation for global metals and mining enterprises."
                }
            },
            {
                "@type": "Question",
                "name": "What is SAP Commodity Management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP Commodity Management streamlines trading, risk management, and logistics for metal and mining industries. It unifies processes like procurement, sales, and inventory on a single platform, reducing errors and enhancing supply chain visibility. Sanocom Global tailors it for mining operations to boost efficiency and profitability."
                }
            },
            {
                "@type": "Question",
                "name": "How does SAP CTRM benefit the metal and mining sector?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP Commodity Trading and Risk Management (CTRM) handles complex trades, contracts, and market volatility with real-time analytics and compliance tools. It supports deal capture, position management, and hedging for metals like iron ore and copper. Mining firms using Sanocom's expertise gain optimized trading cycles and reduced risks."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Commodity Pricing Engine in SAP?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Commodity Pricing Engine (CPE) automates complex pricing using business rules, quality parameters, assays, and market variables. It calculates accurate prices for commodities efficiently, integrating with SAP ERP for seamless invoicing. Sanocom implements CPE to handle mining-specific pricing challenges effectively."
                }
            },
            {
                "@type": "Question",
                "name": "Key Features of SAP Commodity Management for Mining",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Core features include supply chain planning, contract management, logistics execution, and risk analytics tailored for metals. It enables long-term forecasting, shipment tracking, and integration with mine operations. Sanocom Global delivers these for streamlined metal and mining workflows."
                }
            },
            {
                "@type": "Question",
                "name": "How does SAP CTRM integrate with Commodity Pricing Engine?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP CTRM links with CPE for dynamic pricing during trades, factoring in formulas for premiums, discounts, and assays. This ensures precise settlements and real-time adjustments to market fluctuations. Sanocom's solutions enhance this integration for mining profitability."
                }
            },
            {
                "@type": "Question",
                "name": "Why partner with Sanocom Global for SAP Commodity Management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sanocom specializes in SAP CTRM and CPE implementations for metal and mining, offering end-to-end services like global trade management and custom formulas. Clients achieve cost savings, compliance, and scalable operations through their industry-focused expertise."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SAP Commodity Management for Metals & Mining",
        "description": "Comprehensive SAP CTRM and Commodity Pricing Engine solutions for the global mining industry.",
        "provider": {
            "@type": "Organization",
            "name": "Sanocom Global",
            "url": "https://www.sapocomglobal.com"
        },
        "areaServed": [
            { "@type": "Country", "name": "USA" },
            { "@type": "Country", "name": "UAE" },
            { "@type": "Country", "name": "UK" }
        ],
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the Commodity Pricing Engine?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Commodity Pricing Engine (CPE) is a tool within SAP that automates complex pricing calculations using a Commodity Pricing Formula based on real-time market data."
                    }
                }
            ]
        }
    };

    return (
        <>
            <SetHeaders title='SAP CTRM & Commodity Management for Metals | Sanocom Global' description='Master SAP Commodity Trading & Risk Management (CTRM). Optimize Metals & Mining with Commodity Pricing Engines (CPE) and formulas. Expertise for USA, UAE, & UK.' keywords='SAP Commodity Management, SAP Commodity Trading & Risk Management, SAP CTRM, Commodity Pricing Engine, Commodity Pricing Formula, SAP CPE, LME, COMEX' canonicalRoute='/industries/sap-commodity-management-metals-mining' image='https://www.sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FindustryAbout.0ac98855.png&w=750&q=75' schema={[faqSchema, serviceSchema]} />

            <HeaderBanner heading='SAP Commodity Management for Metals and Mining: USA | UAE | UK' para='Ignite the Future of Metal and Mining with SAP CTRM: Unleash Enhanced Business Processes and Propel Productivity towards Sustainable Growth! ' bgImg={bgBanner} />

            <AboutIndustry
                title='OVERVIEW'
                heading='Grow exponentially in the Metal and Mining industry with our SAP solutions'
                description="Our SAP technical expertise empowers your metal and mining operations with cutting-edge solutions for enhanced efficiency and profitability."
                image={industryAbout}
                keyPoints={['Nonbulk transportation management', 'Portfolio and project management', ' Asset management', 'Warehouse management']}
            />

            <IndustryFeatures
                heading='Challenges Observed in the Metal and Mining Industry'
                description="The metal and mining industry faces a multitude of challenges that affect 
        its operations, profitability, and sustainability. These challenges can significantly
        impact the industry's success."
                featuresData={industryMetalChallengeData}
            />

            <IndustryPartsDetail details={industryMetalSolutionProviding} />

            <IndustryFuture
                title='service'
                heading='SAP Services Tailored to the Mining Industry'
                description='Here you can have a short description of some digital technologies '
                cardsData={industryMetalFutureData}
            />

            {/* <IndustrySolution
        successPoints={industryChemicalSuccessData}
        imageIndustrySuccess={industrySolution}
      /> */}

            <IndustryClient
                title='clients'
                heading='We have been serving companies all over the globe'
                description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
                clientData={industryClients}
            />

            <WhyChooseSapocom />

            <FAQ faqs={metalMiningFAQs} title="SAP Metal & Mining Solutions - FAQs" />

            <CtaBanner />

            <ClientReviews
                message='We successfully went live in January 2022 with key functionalities which is  Commodity Pricing Engine & Global Trade Management. Sanocom played a critical role across configuration, development, testing, and defect resolution. Their strong expertise in commodity Management ensured a smooth and efficient implementation. The team demonstrated exceptional responsiveness and commitment throughout the project lifecycle. We look forward to continued collaboration ahead.'
                name='Vladimir Soloviev'
                position='Executive Director at PWC'
                image={clientImage}
            />
        </>
    )
}


