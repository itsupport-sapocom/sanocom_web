import React from 'react'
import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import WhyChooseSapocom from '@/components/WhyChooseSapocom';
import AboutIndustry from '@/components/AboutIndustry';
import IndustryFuture from '@/components/IndustryFuture';
import IndustryFeatures from '@/components/IndustryFeatures';
import { CtaBanner } from '@/components/banners/ctaBanners';
import IndustryCtaWithDetails from '@/components/IndustryCtaWithDetails';
import IndustrySolution from '@/components/IndustrySolution';
import IndustryClient from '@/components/IndustryClient';
import ClientReviews from '@/components/ClientReviews';

// Images
import bgBanner from "@/assets/images/bgImages/industryChemical.png";
import industryAbout from '@/assets/images/industry/chemical/industryAbout.png'
import industrySolution from '@/assets/images/industry/chemical/industrySolution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryClients, industryChemicalFutureData, industryChemicalSuccessData, industryDetailsData, industryChemicalDetailsData, industryChemicalChallengeData } from '@/configs/config';

export default function Chemical() {
  return (
    <>
      <SetHeaders title='Chemical Industry | Sapocom' />
      <HeaderBanner heading='Chemical Industry Solutions: USA | UAE | UK' para='Unique integrated software for the chemical industry to accelerate the adoption of a sustainable energy mix' bgImg={bgBanner} />

      <AboutIndustry
        title='Overview'
        heading='Cutting-Edge SAP Technology to Revolutionize the Chemical Industry'
        description='We study, test, and analyze the impact of artificial intelligence, augmented/virtual reality, machine learning, and NLP and measure their'
        image={industryAbout}
        keyPoints={['Circular value chain management', 'Synchronised processes to optimise asset performance', 'Product compliance management', 'Connected truck, rail, marine, pipeline, and yard management']}
      />

      <IndustryFeatures
        title='CHALLENGES'
        heading='Challenges in the Chemical Industry'
        description='The chemical industry is facing several challenges that affect its growth and profitability as mentioned below.'
        featuresData={industryChemicalChallengeData}
      />

      <IndustrySolution
        successPoints={industryChemicalSuccessData}
        imageIndustrySuccess={industrySolution}
      />

      <IndustryFuture
        title='services'
        heading='SAP Services Tailored to the Chemical Industry'
        description='Here you can have a short description of some digital technologies '
        cardsData={industryChemicalFutureData}
      />


      <IndustryCtaWithDetails
        title='benefits'
        heading='We give the best solutions to help business revenues skyrocket further!'
        description='Our commitment to quality and client satisfaction is what makes us stand out among the crow'
        cta='/contact-us'
        industryData={industryChemicalDetailsData}
      />


      <IndustryClient
        title='clients'
        heading='We have been serving companies all over the globe'
        description='Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.'
        clientData={industryClients}
      />

      <WhyChooseSapocom />

      <CtaBanner />

      <ClientReviews
        message='We successfully went live in January 2022 with key functionalities which is  Commodity Pricing Engine &Global Trade Management. SAPOCOM played a critical role across configuration, development, testing, and defect resolution. Their strong expertise in commodity Management ensured a smooth and efficient implementation. The team demonstrated exceptional responsiveness and commitment throughout the project lifecycle. We look forward to continued collaboration ahead.'
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />

    </>
  )
}


