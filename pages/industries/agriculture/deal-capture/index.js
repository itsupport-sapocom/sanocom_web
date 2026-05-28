import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSanocom from '@/components/WhyChooseSanocom';
import { CtaBanner } from '@/components/banners/ctaBanners';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';
import FAQ from '@/components/FAQ';

// images
import bgBanner from "@/assets/images/bgImages/industryAgriculture.png";
import industryAbout from '@/assets/images/industry/agriculture/industryAbout.png'
import industrySolution from '@/assets/images/industry/agriculture/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryAgricultureFutureData, industryagricultureSuccessData, industryAgricultureChallengeData } from '@/configs/config';

export default function AgricultureDealCapture() {
  const dealCaptureFAQs = [
    {
      question: "What is Deal Capture in agricultural trading?",
      answer: "Deal Capture is the process of recording the specific details of a commodity trade—including price, volume, delivery dates, and counterparties—into a centralized system to ensure accuracy and risk management."
    },
    {
      question: "Does Sanocom support multi-currency deal capture for global markets?",
      answer: "Yes. Our platform is built for global trade, allowing users in the USA, UAE, and UK to capture deals in multiple currencies with automated exchange rate integration."
    },
    {
      question: "How does automated deal capture reduce operational risk?",
      answer: "By eliminating manual data entry, automated deal capture reduces 'fat-finger' errors, ensures real-time position reporting, and maintains an audit trail for regulatory compliance."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Deal Capture in agricultural trading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deal Capture is the process of recording the specific details of a commodity trade—including price, volume, delivery dates, and counterparties—into a centralized system to ensure accuracy and risk management."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sanocom support multi-currency deal capture for global markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our platform is built for global trade, allowing users in the USA, UAE, and UK to capture deals in multiple currencies with automated exchange rate integration."
        }
      },
      {
        "@type": "Question",
        "name": "How does automated deal capture reduce operational risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By eliminating manual data entry, automated deal capture reduces 'fat-finger' errors, ensures real-time position reporting, and maintains an audit trail for regulatory compliance."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Agricultural Deal Capture Software",
    "provider": {
      "@type": "Organization",
      "name": "Sanocom Global",
      "url": "https://sanocomglobal.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "USA" },
      { "@type": "Country", "name": "UAE" },
      { "@type": "Country", "name": "UK" }
    ],
    "description": "Advanced Deal Capture solutions for the agricultural industry, streamlining global commodity trading and risk management.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agri-Trading Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Deal Capture"
          }
        }
      ]
    }
  };

  return (
    <>
      <SetHeaders
        title='Agricultural Deal Capture Software | Global Trading in USA, UAE, UK'
        description="Optimize your agri-trading with Sanocom's Deal Capture solution. Centralize trade entry, manage risk, and ensure compliance across the USA, UAE, and UK markets. Get a demo today!"
        keywords='Deal Capture, Agricultural Deal Capture, Commodity Trading, Agricultural Trading Software, Agri-Trading, Multi-Currency Trading, Global Trade Management'
        canonicalRoute='/industries/agriculture/deal-capture'
        image='https://www.sanocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FindustryAbout.da7f652b.png&w=750&q=75'
        schema={[faqSchema, serviceSchema]}
      />

      <HeaderBanner
        heading='The Future of Agricultural Deal Capture: Seamless Global Trade Management: USA | UAE | UK'
        para='Streamline your agricultural commodity trading with our advanced Deal Capture solutions. Designed for traders in the USA, UAE, and UK, our platform automates data entry, mitigates risk, and ensures real-time visibility across global supply chains.'
        bgImg={bgBanner}
      />

      <AboutIndustry
        title='Overview'
        heading='Transform Your Agricultural Business With Our Cutting-Edge Solutions That Lead The Industry'
        description="Are you in the agriculture industry and struggling to keep track of prices and logistics? Look no further than Sanocom's Agricultural Contract Management (ACM) module!"
        image={industryAbout}
        keyPoints={['Automated data entry for faster deal processing', 'Connected truck, rail, marine, pipeline management', "Process monitoring across supply, production, inventory, and demand", 'Inclusion of crop details in the sales terms in grower contracts']}
      />

      <IndustryFeatures
        title='challenges'
        heading='Challenges The Agri-Industry'
        description='A one liner for this section'
        featuresData={industryAgricultureChallengeData}
      />

      <IndustryFuture
        title='Service'
        heading='Connecting Agriculture to the Future with SAP Technologies'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryAgricultureFutureData}
      />

      <IndustrySolution
        successPoints={industryagricultureSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSanocom />

      <FAQ faqs={dealCaptureFAQs} title="Agricultural Deal Capture - FAQs" />

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
