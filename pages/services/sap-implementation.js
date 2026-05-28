import greenCheckIcon from '@/assets/images/icons/check-green.svg';
import service from '@/assets/images/service/service1.png';
import { HeaderBanner } from '@/components/banners/banners';
import {
  ServicesCtaCard,
  ServicesOurApproach,
  ServicesWhyChooseUs,
} from '@/components/ServicesPage';
import FAQ from '@/components/FAQ';
import SetHeaders from '@/layouts/SetHeaders';
import Image from 'next/image';

const ourImplementationApproach = [
  {
    title: 'Tailored Methodologies',
    description:
      'We align the right approach, Agile, Waterfall, Hybrid, or Phased, based on your business goals.',
  },
  {
    title: 'Sanocom Activate',
    description:
      'Our unique, results-driven methodology that ensures efficient delivery and lasting success.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Rigorous testing at every stage guarantees stability and performance.',
  },
  {
    title: 'User Enablement',
    description:
      'Comprehensive training and post-go-live support for confident adoption.',
  },
  {
    title: 'Scalable Models',
    description:
      'Choose phased rollout, hybrid, or full-scale deployment, flexible to your growth.',
  },
];

const whyChooseUs = [
  'Proven track record of successful global implementations since 2017.',
  'Expertise across multiple industries including Oil & Gas, Chemicals, Metals & Mining, and Agriculture.',
  'End-to-end delivery – from planning to support, ensuring seamless adoption.',
];

function SapImplementationPage() {
  const implementationFAQs = [
    {
      question: "Why should we choose Sanocom Global as our SAP Implementation Partners?",
      answer: "We combine global expertise with local market insights in the USA, UAE, and UK. Our methodology focuses on minimizing downtime while maximizing ROI through customized SAP configurations."
    },
    {
      question: "How long does a standard SAP Implementation take?",
      answer: "Timelines vary based on the module (S/4HANA, SuccessFactors, etc.) and business size, typically ranging from 4 to 9 months. We provide a detailed project roadmap during the discovery phase."
    },
    {
      question: "Do you provide post-implementation support?",
      answer: "Yes, as full-cycle SAP Implementation Partners, we offer 24/7 hyper-care and long-term managed services to ensure your system evolves with your business."
    },
    {
      question: "What is SAP Implementation?",
      answer: (
        <p>
          SAP Implementation involves deploying software to optimize finance and supply chain processes. Sanocom Global delivers customized services, incorporating{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">SAP commodity management</a> and the{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">Sanocom Activate methodology</a> for faster results in the oil and gas industry.
        </p>
      )
    },
    {
      question: "Why Choose Sanocom for SAP Implementation?",
      answer: (
        <p>
          Sanocom specializes in{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">SAP IS-Oil & Gas</a>, integrating{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">SAP commodity trading & risk management</a> to handle market volatility. Their expert team ensures seamless configuration and training tailored to specific business goals.
        </p>
      )
    },
    {
      question: "What Does the SAP Implementation Process at Sanocom Entail?",
      answer: (
        <p>
          The process includes planning with defined goals, software configuration, rigorous testing, and user training for effective adoption. Sanocom uses flexible approaches like Agile, Waterfall, or their unique{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">Sanocom Activate methodology</a> to minimize risks.
        </p>
      )
    },
    {
      question: "What Are the Benefits of SAP Implementation with Sanocom?",
      answer: "Businesses gain streamlined operations, enhanced efficiency, and long-term value through cost-effective, scalable SAP solutions. Sanocom's certified professionals provide quality assurance and post-go-live support for sustained success."
    },
    {
      question: "How Does Sanocom Handle SAP Implementation for Oil & Gas?",
      answer: (
        <p>
          Sanocom focuses on{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">SAP IS-Oil Downstream</a> modules like{' '}
          <a href="/industries/sap-oil-gas-solutions" target="_blank" rel="noopener noreferrer">SAP secondary distribution management</a> during Implementation, integrating features for downstream operations. This drives transformation with deep process knowledge and global expertise.
        </p>
      )
    },
    {
      question: "What Support Follows Sanocom's SAP Implementation?",
      answer: "Post-implementation, Sanocom offers ongoing support, data migration, upgrades, and rollouts to ensure optimal performance. Their comprehensive services include monitoring, troubleshooting, and enhancements aligned with evolving needs."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should we choose Sanocom Global as our SAP Implementation Partners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine global expertise with local market insights in the USA, UAE, and UK. Our methodology focuses on minimizing downtime while maximizing ROI through customized SAP configurations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a standard SAP Implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines vary based on the module (S/4HANA, SuccessFactors, etc.) and business size, typically ranging from 4 to 9 months. We provide a detailed project roadmap during the discovery phase."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-implementation support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as full-cycle SAP Implementation Partners, we offer 24/7 hyper-care and long-term managed services to ensure your system evolves with your business."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SAP Implementation",
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
    "description": "Specialized SAP Implementation services and consulting for global enterprises.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sanocomglobal.com/services/sap-implementation"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SAP Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP ERP Implementation"
          }
        }
      ]
    }
  };

  return (
    <>
      <SetHeaders
        title="SAP Implementation Partners | Global SAP Consulting - USA, UAE, UK"
        description="Expert SAP Implementation Partners providing end-to-end deployment services across the USA, UAE, and UK. Streamline your business with SAP-certified consultants. Get a quote today."
        keywords="SAP Implementation, SAP Implementation Partners, SAP Consulting, SAP ERP Implementation, SAP S/4HANA Implementation, SAP Certified Consultants"
        canonicalRoute="/services/sap-implementation"
        image="https://sanocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-sanocom-section.381abdb9.png&w=640&q=75"
        schema={[faqSchema, serviceSchema]}
      />
      {/* Header Banner */}
      <HeaderBanner
        heading="Enterprise SAP Implementation Services: USA | UAE | UK"
        para="Drive digital transformation with Sanocom Global, your trusted SAP Implementation Partners. We specialize in delivering seamless, scalable, and industry-specific SAP Implementation services tailored for the unique market demands of the USA, UK, and Middle East. From initial roadmap planning to final go-live, our certified consultants ensure your ERP transition is efficient and risk-free."
        bgImg={service}
        btnText={null}
      />
      {/* Implementation Approach */}
      <ServicesOurApproach
        title="Our Implementation APPROACH"
        description="At Sanocom, we understand that every business is different. Different clients require different implementation methodologies, from Agile and Waterfall to Hybrid and Phased approaches. What makes us unique is our Sanocom Activate Methodology: a proven, highly successful framework tailored to deliver faster, smoother, and more reliable SAP implementations."
        approaches={ourImplementationApproach}
      />

      {/* Sap Implementation Journey */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our SAP Implementation Journey
          </h2>
          <p
            data-aos="flip-left"
            data-aos-delay="100"
            className="text-black opacity-70"
          >
            Over the years, Sanocom has partnered with leading organizations
            across the globe, delivering end-to-end SAP implementation services.
            Each project reflects our ability to adapt SAP solutions to unique
            industry needs.
          </p>
        </div>
        {/* Teams Card */}
        <div
          data-aos="zoom-in"
          className="md:py-8 max-md:px-2 rounded-md border border-black/25"
        >
          <div className="grid md:grid-cols-5 max-md:grid-rows-5">
            {/* first */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 leading-tight list-disc pl-4">
                  <li>
                    <span className="font-semibold">FIL OIL</span> -
                    Successfully implemented SAP IS-OIL solutions, streamlining
                    downstream operations
                  </li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2017
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
            {/* second */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 leading-tight list-disc pl-4">
                  <li>
                    <span className="font-semibold">TransMontaigne</span> -
                    Successfully implemented SAP S/4 HANA Oil & Gas Solutions
                  </li>
                  <li>
                    <span className="font-semibold">ENOC -UAE</span>
                  </li>
                  <li>
                    <span className="font-semibold">ZIZ-Moracco</span> -
                    Enhancing supply chain and operations. Which includes latest
                    modules S4SCSD Secondary Distribution Management IDM RFNO
                  </li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2019
                </p>
              </div>
            </div>
            {/* third */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 leading-tight list-disc pl-4">
                  <li>
                    <span className="font-semibold">
                      Nornickel - Russia & Switzerland
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Raizen - Brazil</span>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Centurion Shipping – Dubai
                    </span>
                  </li>
                  Successfully Implemented SAP Commodity Trading & Risk
                  Management with Industry Specific Solutions (CPE ,CPF & Deal
                  Capture )for Oil & Gas & Mining and enabling digital
                  transformation & optimizing their trade operations
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2021
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
            {/* forth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[100px_1fr] max-md:grid-cols-[100px_1fr] md:justify-center max-md:items-center">
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center object-contain">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 leading-tight list-disc pl-4">
                  <li>
                    <span className="font-semibold">
                      Al-Qaryan Group – Saudi Arabia
                    </span>{' '}
                    - Implemented SAP Commodity Management, for streamlining
                    Trading Operations for Metals
                  </li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2024
                </p>
              </div>
            </div>
            {/* fifth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 leading-tight list-disc pl-4">
                  <li>
                    <span className="font-semibold">Motiva – USA </span>-
                    Greenfield Implementation - SAP Hydro carbon Value Chain
                    with Commodity Trading & Risk Management
                  </li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  Ongoing
                </p>
              </div>
              {/* Center Border Line */}
              <div className="bg-secondary md:w-full md:h-[1px] max-md:w-[1px] max-md:h-full"></div>
              {/* Icon Circle */}
              <div className="w-full grid md:grid-rows-[1fr_100px] max-md:grid-cols-[1fr_100px] md:justify-center max-md:items-center">
                <div className="md:w-[1px] md:h-full max-md:h-[1px] max-md:w-full mx-auto bg-secondary"></div>
                <div className="w-[100px] h-[100px] rounded-full border border-secondary p-6 grid place-items-center">
                  <Image
                    src={greenCheckIcon}
                    alt="check icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chose Us  */}
      <ServicesWhyChooseUs options={whyChooseUs} />

      {/* FAQ Section */}
      <FAQ faqs={implementationFAQs} title="SAP Implementation - FAQs" />

      {/* CTA */}
      <ServicesCtaCard
        title="Partner with Us"
        description="Sanocom continues to shape digital transformation journeys through successful SAP implementations. Connect with us to explore how we can empower your organization with the right SAP solutions."
      />
    </>
  );
}

export default SapImplementationPage;
