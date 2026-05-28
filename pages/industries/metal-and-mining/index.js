import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSanocom from '@/components/WhyChooseSanocom';
import { CtaBanner } from '@/components/banners/ctaBanners';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';
import FAQ from '@/components/FAQ';

// images
import bgBanner from "@/assets/images/bgImages/industryMining.png";
import industryAbout from '@/assets/images/industry/metalMining/industryAbout.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryMetalFutureData, industryMetalChallengeData, industryMetalSolutionProviding } from '@/configs/config';
import IndustryPartsDetail from '@/components/IndustryPartsDetail';

export default function MetalMining() {
  const metalMiningFAQs = [
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

  return (
    <>
      <SetHeaders title='SAP Commodity Management - Metal & Mining Solutions' description='Optimize with SAP Commodity Management, SAP CTRM & SAP Commodity Trading & Risk Management for metal & mining. Contact us!' keywords='SAP Commodity Management, SAP Commodity Trading & Risk Management, SAP CTRM, Commodity Pricing Engine, Commodity Pricing Formula' canonicalRoute='/industries/sap-commodity-management-metals-mining' image='https://www.sanocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FindustryAbout.0ac98855.png&w=750&q=75' />

      <HeaderBanner heading='SAP Commodity Management for Metal & Mining Industry' para='Ignite the Future of Metal and Mining with SAP CTRM: Unleash Enhanced Business Processes and Propel Productivity towards Sustainable Growth! ' bgImg={bgBanner} />

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

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSanocom />

      <FAQ faqs={metalMiningFAQs} title="SAP Metal & Mining Solutions - FAQs" />

      <CtaBanner />

      <ClientReviews
        message='We successfully went live in January 2022 with key functionalities which is  Commodity Pricing Engine &Global Trade Management. Sanocom played a critical role across configuration, development, testing, and defect resolution. Their strong expertise in commodity Management ensured a smooth and efficient implementation. The team demonstrated exceptional responsiveness and commitment throughout the project lifecycle. We look forward to continued collaboration ahead.'
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />
    </>
  )
}
