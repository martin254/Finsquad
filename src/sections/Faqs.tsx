"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "How secure is my financial data?",
        answer: " Security is our top priority. We use bank-level 256-bit encryption, secure servers, and never store your bank credentials. All connections to financial institutions are made through secure, tokenized channels.",
    },
    {
        question: "Which banks and financial institutions are supported?",
        answer: "FinSquad will support over 10,000 financial institutions worldwide at launch, including major banks, credit unions, brokerages, and investment platforms in North America, Europe, and Asia Pacific regions.",
    },
    {
        question: "Will FinSquad be available internationally?",
        answer: "Yes, we're planning a phased international rollout. We'll launch first in the US, Canada, UK, and Australia, with more countries to follow. When you join the waitlist, we'll prioritize availability based on your location.",
    },
    {
        question: "Can I export my financial data?",
        answer: "Absolutely. FinSquad allows you to export your financial data in various formats, including CSV, Excel, and PDF. Your data always belongs to you, and you can export it anytime.",
    },
    {
        question: "How do the social challenges work?",
        answer: "Our social challenges let you compete with friends in 1v1 or group settings. You can create spending challenges, saving goals, or budget competitions. Progress is tracked in real-time, and winners earn badges and rewards while everyone benefits from better financial habits.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return( <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag> FAQs</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                Questions? We&apos;ve got <span className="text-lime-400">answers</span>
            </h2>
            <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                {faqs.map((faq, faqIndex) => (
                    <div key={faq.question} 
                    className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                    >
                        <div className="flex justify-between items-center" onClick={() => setSelectedIndex(faqIndex)}>
                            <h3 className="font-medium">{faq.question}</h3>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300", selectedIndex === faqIndex && 'rotate-45')}
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                        <AnimatePresence>
                        {selectedIndex === faqIndex && (
                            <motion.div 
                            initial ={{
                                height: 0,
                                marginTop : 0,
                            }}
                            animate = {{
                                height:'auto',
                                marginTop: 24,
                            }}
                            exit ={{
                                height: 0,
                                marginTop : 0,
                            }}
                            className={twMerge("overflow-hidden")}>
                            <p className="text-white/50">{faq.answer}</p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                        
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
