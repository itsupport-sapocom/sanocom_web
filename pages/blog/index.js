import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SetHeaders from '@/layouts/SetHeaders';
import { HeaderBanner } from '@/components/banners/banners';
import serviceBanner from '@/assets/images/service/service1.png';
import blog4Image from '@/assets/images/bgImages/blog4.png';
import blog7Image from '@/assets/images/bgImages/blog7.png';
import blog8Image from '@/assets/images/bgImages/blog8.png';

export default function BlogIndex() {
    return (
        <>
            <SetHeaders
                title="SAP Insights & Expert Blogs | Sapocom Technologies"
                description="Explore expert insights on SAP solutions, implementation strategies, and industry best practices."
                keywords="SAP blogs, SAP insights, SAP CTRM, SAP implementation"
                canonicalRoute="/blog"
            />

            <HeaderBanner
                heading="SAP Insights & Expert Blogs"
                para="Practical articles on SAP implementation, CTRM, and industry-focused solution strategies."
                bgImg={serviceBanner}
            />

            <section className="w-full py-12 md:py-16 bg-gray-50">
                <div className="max-w-1200 mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/blog/how-sap-activate-makes-sap-implementation-more-flexible-and-efficient">
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                                <div className="relative w-full h-48">
                                    <img
                                        src="/images/blog/blog1.png"
                                        alt="How SAP Activate makes SAP implementation more flexible and efficient"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                        How SAP Activate Makes SAP Implementation More Flexible and Efficient
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        Understand how SAP Activate helps teams move faster, stay structured, and adapt more smoothly during SAP implementations.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            Read More
                                        </span>
                                        <span className="text-xs text-gray-400">6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/blog/commodity-trading-management-system">
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                                <div className="relative w-full h-48">
                                    <img
                                        src="/images/blog/ctrm-blog-1.png"
                                        alt="commodity trading management system, SAP CTRM"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                        What Is a Commodity Trading &amp; Risk Management System and How Does It Work?
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        Learn what a commodity trading management system is, how it works, and why it matters for risk, pricing, and efficiency.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            Read More
                                        </span>
                                        <span className="text-xs text-gray-400">8 min read</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/blog/deal-risk-evaluation-best-ways-to-handle-high-value-deals">
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                                <div className="relative w-full h-48">
                                    <Image
                                        src={blog4Image}
                                        alt="Deal Risk Evaluation: The Best Ways to Handle High-Value Deals"
                                        className="w-full h-48 object-cover"
                                        fill
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                        Deal Risk Evaluation: The Best Ways to Handle High-Value Deals
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        A practical guide to evaluating financial, legal, commercial, and delivery risks before high-value deals are signed.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            Read More
                                        </span>
                                        <span className="text-xs text-gray-400">6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/blog/selecting-the-appropriate-operational-support-partner-for-sap">
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                                <div className="relative w-full h-48">
                                    <Image
                                        src={blog7Image}
                                        alt="Selecting the appropriate operational support partner for SAP"
                                        className="w-full h-48 object-cover"
                                        fill
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                        Selecting the Appropriate Operational Support Partner for SAP
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        Learn what SAP operational support really includes and how to choose a partner that keeps your landscape stable, secure, and proactive.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            Read More
                                        </span>
                                        <span className="text-xs text-gray-400">5 min read</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/blog/why-you-need-sap-financial-risk-management-in-your-finance-strategy">
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />
                                <div className="relative w-full h-48">
                                    <Image
                                        src={blog8Image}
                                        alt="Why you need SAP Financial Risk Management in your finance strategy"
                                        className="w-full h-48 object-cover"
                                        fill
                                    />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2">
                                        Why You Need SAP Financial Risk Management In Your Finance Strategy
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        See how SAP Financial Risk Management helps finance teams monitor exposure, improve forecasting, and make more confident decisions.
                                    </p>
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            Read More
                                        </span>
                                        <span className="text-xs text-gray-400">5 min read</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
