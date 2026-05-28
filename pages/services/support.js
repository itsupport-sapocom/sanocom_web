import greenCheckIcon from '@/assets/images/icons/check-green.svg';
import service from '@/assets/images/service/service6.png';
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
    title: 'Quick Troubleshooting',
    description:
      'Timely resolution of system-related problems to reduce downtime and keep your operations running smoothly.',
  },
  {
    title: 'Continuous Monitoring',
    description:
      'Ongoing system health checks, performance monitoring, and preventative maintenance to avoid disruptions before they happen.',
  },
  {
    title: 'Upgrades & Enhancements',
    description:
      'Regular updates, patches, and enhancements to ensure your SAP system adapts to your evolving business requirements.',
  },
];

const whyChooseUs = [
  'Always Available – 24×7 support to handle critical issues without delay',
  'Trusted Experts – Certified SAP professionals with proven industry experience',
  'Tailored Plans – Support packages designed to fit your budget and needs',
  'Clear & Simple – Transparent process with regular updates and reporting',
];

function SupportPage() {
  const supportFAQs = [
    {
      question: "What services do SAP Support Partners provide?",
      answer: "As SAP Support Partners, we provide end-to-end services including system monitoring, bug fixes, security patches, performance tuning, and 24/7 technical helpdesk support tailored to your region's time zone."
    },
    {
      question: "Does Sapocom Global support businesses in the UAE and UK?",
      answer: "Yes. We offer localized SAP support across the UAE and UK, ensuring compliance with local regulations and providing support during standard business hours in London and Dubai, as well as the USA."
    },
    {
      question: "Why choose a dedicated partner over standard SAP support?",
      answer: "A dedicated partner offers personalized, proactive maintenance and faster response times (SLAs) compared to generic support channels, helping you minimize downtime and maximize ROI."
    },
    {
      question: "What Are SAP Support Partners?",
      answer: "SAP Support Partners are certified organizations recognized by SAP for providing expert maintenance, troubleshooting, and optimization of SAP systems. They extend your team's capabilities, ensuring seamless operations and maximizing ROI on SAP investments. Sapocom Global acts as a trusted SAP Support Partner, delivering reliable services through their support page."
    },
    {
      question: "Benefits of Choosing SAP Support Partners",
      answer: "Partnering with SAP Support Partners offers trust through SAP-verified expertise, reduced implementation risks, and access to the latest tools and training. They provide ongoing support, minimizing downtime and aligning solutions with business goals. Businesses gain long-term value with scalable, up-to-date SAP environments."
    },
    {
      question: "How Do SAP Support Partners Ensure System Reliability?",
      answer: "SAP Support Partners deliver proactive monitoring, rapid issue resolution, and timely updates to prevent outages and maintain performance. Their certified teams follow SAP best practices for continuous maintenance and scalability. Sapocom Global emphasizes this for uninterrupted SAP operations."
    },
    {
      question: "What Services Do SAP Support Partners Provide?",
      answer: "Services include strategic consulting, system integration, post-implementation support, and customized training from evaluation to optimization. They handle complex deployments and ensure compliance with evolving SAP standards. Sapocom Global offers these comprehensive services tailored to client needs."
    },
    {
      question: "Why Select Sapocom Global as an SAP Support Partner?",
      answer: "Sapocom Global stands out with industry-specific SAP expertise, including oil & gas solutions, and proven support for seamless digital transformation. Clients benefit from cost savings, enhanced efficiency, and personalized ongoing assistance. Their support services drive business continuity and growth."
    },
    {
      question: "How to Become or Work with SAP Support Partners?",
      answer: "SAP Support Partners join via the PartnerEdge program, meeting rigorous training and performance benchmarks for certification. Businesses should evaluate partners based on expertise, track record, and alignment with goals for optimal results. Contact Sapocom Global for partnership or support collaboration."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do SAP Support Partners provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As SAP Support Partners, we provide end-to-end services including system monitoring, bug fixes, security patches, performance tuning, and 24/7 technical helpdesk support tailored to your region's time zone."
        }
      },
      {
        "@type": "Question",
        "name": "Does Sapocom Global support businesses in the UAE and UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer localized SAP support across the UAE and UK, ensuring compliance with local regulations and providing support during standard business hours in London and Dubai, as well as the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose a dedicated partner over standard SAP support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A dedicated partner offers personalized, proactive maintenance and faster response times (SLAs) compared to generic support channels, helping you minimize downtime and maximize ROI."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SAP Support Services",
    "provider": {
      "@type": "Organization",
      "name": "Sapocom Global",
      "url": "https://sapocomglobal.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "USA" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "description": "Professional SAP Support Partners providing managed services and technical assistance.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sapocomglobal.com/services/support"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SAP Support Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 SAP Technical Support"
          }
        }
      ]
    }
  };

  return (
    <>
      <SetHeaders
        title="Trusted SAP Support Partners | Global Services in USA, UAE & UK"
        description="Looking for reliable SAP Support Partners? Sapocom Global provides 24/7 managed SAP services, maintenance, and optimization across the USA, UAE, and UK. Expert solutions to keep your business running smoothly."
        keywords="SAP Support Partners, SAP Support Services, Managed SAP Services, SAP Maintenance, SAP Technical Support, 24/7 SAP Support"
        canonicalRoute="/services/support"
        image="https://www.sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-sapocom-section.381abdb9.png&w=640&q=75"
        schema={[faqSchema, serviceSchema]}
      />
      {/* Header Banner */}
      <HeaderBanner
        heading="Global SAP Support Partners: Empowering Businesses in USA, UAE, and UK"
        para="As premier SAP Support Partners, Sapocom Global offers a bridge between complex technical landscapes and seamless business operations. Whether you are scaling in the USA, optimizing in the UAE, or maintaining infrastructure in the UK, our certified experts provide the proactive monitoring and dedicated support your enterprise deserves."
        btnText={null}
      />
      {/* Implementation Approach */}
      <ServicesOurApproach
        title="How We Support You"
        approaches={ourImplementationApproach}
      />
      {/* Sap Support Journey */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our Support Journey
          </h2>
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
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>National Nigerian Petroleum Company (NNPC)</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2018
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
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Par Pacific (USA)</li>
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
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>SIMS Metal (USA)</li>
                  <li>Nor-Nickel (Russia)</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2022
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
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Arcelor Mittal Steel</li>
                  <li>GreenVille (Nigeria)</li>
                  <li>Philips 66 (P66) USA</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2023
                </p>
              </div>
            </div>
            {/* fifth */}
            <div className="bg-red w-full grid md:grid-rows-[1fr_1px_1fr] max-md:grid-cols-[1fr_1px_1fr]">
              {/* Achievement and Year */}
              <div className="p-4 px-2 flex flex-col justify-center items-center">
                <ul className="mb-3 font-semibold leading-tight list-disc pl-4">
                  <li>Thungela (South Africa/Dubai)</li>
                  <li>Orpic (Oman)</li>
                  <li>Saudi Aramco</li>
                </ul>
                <p className="rounded-md text-center p-2 bg-primary mx-auto text-white w-[100px]">
                  2024
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
      {/* Why Work With Us? */}
      <ServicesWhyChooseUs options={whyChooseUs} title="Why Work With Us?" />
      {/* Our Promise */}
      <section className="w-full max-md:p-4 py-8 md:py-16 max-w-1200 mx-auto ">
        <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
          <h2
            data-aos="flip-right"
            data-aos-delay="100"
            className="max-w-[800px] md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-secondary to-90% mb-4"
          >
            Our Promise
          </h2>
          <p
            data-aos="flip-left"
            data-aos-delay="100"
            className="text-black font-semibold"
          >
            With us as your SAP support partner, you don’t just get
            problem-solving, you get peace of mind, better system performance,
            and the confidence that your SAP is always ready for what’s next.
          </p>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQ faqs={supportFAQs} title="SAP Support Partners - FAQs" />
      {/* CTA */}
      <ServicesCtaCard
        title="Looking for dependable SAP support that grows with your business?"
        description="👉 Contact Us today and let’s make your SAP systems work smarter for you."
      />
    </>
  );
}

export default SupportPage;
