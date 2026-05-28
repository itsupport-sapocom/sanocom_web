import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import { CtaBanner } from '@/components/banners/ctaBanners';
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';
import FAQ from '@/components/FAQ';

// Images
import bgBanner from "@/assets/images/bgImages/industryOilAndGas.png";
import industryAbout from '@/assets/images/industry/oilGas/industryAbout.png'
import industrySolution from '@/assets/images/industry/oilGas/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryOilGasChallengeData, industryOilGasSuccessData, industryOilGasFutureData } from '@/configs/config';

function OilGasPage() {
  const oilGasFAQs = [
    {
      question: "What is SAP Secondary Distribution Management?",
      answer: "SAP Secondary Distribution Management (SDM) optimizes the order-to-cash process for oil and gas downstream operations, handling distribution from terminals to customers, wholesalers, and service stations. It automates logistics, forecasting, and dispatching and integrates with transportation providers for efficient fuel delivery. Sapocom Global leverages SDM to streamline secondary distribution for oil and gas clients."
    },
    {
      question: "How does SAP Retail Fuel Network Operation work?",
      answer: "SAP Retail Fuel Network Operation (RFNO) manages service station networks by automating payment flows, quantity reconciliations, and retail fuel processes like sales tracking and inventory control. It complements SDM by focusing on end-consumer retailing, boosting profitability through precise station reconciliations. This solution helps oil and gas firms enhance network-wide operations seamlessly."
    },
    {
      question: "What are the key features of SAP IS-Oil Downstream?",
      answer: "SAP IS-Oil Downstream, including OGSD components, covers purchase, storage, transportation, and sales of fuels and lubricants in petroleum trade. It supports business processes for wholesalers, resellers, and stations with tools like route optimization and demand forecasting. Sapocom Global implements these for smarter upstream and downstream efficiency."
    },
    {
      question: "Benefits of SAP Secondary Distribution Management for Oil & Gas",
      answer: "It centralizes customer data, automates order generation via consumption forecasts, and enables route planning to reduce costs and delays. Integration with SAP ERP eliminates manual entries and handles price fluctuations effectively. Oil and gas companies gain competitive edges in secondary distribution through Sapocom's expertise."
    },
    {
      question: "How does SAP IS-Oil Downstream integrate with SAP TM?",
      answer: "SAP IS-Oil Downstream integrates with SAP Transportation Management (TM) for advanced scheduling, logistics execution, and secondary distribution from depots to outlets. This ensures real-time tracking, stock control, and invoicing alignment. Sapocom Global supports such integrations for comprehensive oil and gas solutions."
    },
    {
      question: "Why choose Sapocom Global for SAP Retail Fuel Network Operation?",
      answer: "Sapocom Global specializes in SAP IS-Oil Downstream implementations, including RFNO and SDM, for retail station reconciliations and network optimization. Clients benefit from tailored solutions like S4SCSD, IDM, and remote logistics management to cut costs and increase profits. Their oil and gas focus delivers industry-specific results."
    }
  ];

  return (
    <>
      <SetHeaders title='SAP IS Oil & Gas Solutions for Smarter Operations' description='Power your business with SAP IS Oil & Gas and SAP IS-Oil Downstream solutions. Boost efficiency & cut costs. Contact us today!' keywords='SAP IS Oil & Gas, SAP IS Oil, SAP Downstream, SAP IS-Oil Downstream, SAP Secondary Distribution Management, SAP Retail Fuel Network Operation, SAP TSW (Trader Scheduler Workbench)' canonicalRoute='/industries/oil-and-gas' image='https://www.sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FindustryAbout.aaf59981.png&w=750&q=75' />

      <HeaderBanner heading='SAP IS Oil & Gas - Transform Your Operations With Us' para='Empower your OG&E business to drive the renewable energy future with our cutting-edge digital solutions, unlocking your full potential for sustainable growth.' bgImg={bgBanner} />

      <AboutIndustry
        title='Overview'
        heading='We prepare you for a digital and sustainable oil and gas industry future.'
        description='Our solutions can help you leverage the latest technology to streamline operations, reduce your environmental impact, and drive success in a rapidly changing landscape'
        image={industryAbout}
        keyPoints={[' Real-time trading, scheduling', 'Supply and distribution chain management', 'Access to a common data set for consistency across activities', 'Reliability-centered and prescriptive maintenance']}
      />

      <IndustryFeatures
        title='Challenges'
        heading='Challenges in SAP IS Oil & Gas Industry'
        description='Like every industry, Oil & Gas industry has its share of issues to tackl'
        featuresData={industryOilGasChallengeData}
      />

      <IndustrySolution
        successPoints={industryOilGasSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryFuture
        title='services'
        heading='SAP Services Tailored to the Oil and Gas Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryOilGasFutureData}
      />

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSapocom />

      <FAQ faqs={oilGasFAQs} title="SAP Oil & Gas Solutions - FAQs" />

      <CtaBanner />

      <ClientReviews
        message="SAPOCOM experts played a key role in implementation and launch of functionality of new commodity price engine CPE/ CPF in one of the biggest mining projects starting from configuration and supporting developments, testing and defect resolution.From the outset, the team demonstrated an impressive level of professionalism and expertise. The team's communication was excellent, and we always felt informed and involved throughout the project. We are grateful for contribution of SAPOCOM colleagues and hope for future perspective cooperation."
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />

    </>
  )
}

export default OilGasPage
