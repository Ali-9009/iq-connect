import { useState } from "react";

const faqs = [
    {
        question: "1. Does iQ Connect work with AT&T, T-Mobile, and Verizon simultaneously?",
        answer:
            "Yes. iQ Connect comes pre-integrated with all three major carriers, allowing you to manage activations and billing from a single platform without switching between systems.",
    },
    {
        question: "2. How long does it take to integrate iQ Connect with my current operation?",
        answer:
            "API integration can be completed in just a few days. Developers have synced retail websites and fully automated activations — like Simple Mobile and Ultra — within that same timeframe.",
    },
    {
        question: "3. Does the system support prepaid, postpaid, and hybrid billing models?",
        answer:
            "Yes. iQ Connect’s convergent billing engine is built for all three models, with PCI compliance included out of the box.",
    },
    {
        question: "4. Can I manage a distributor or franchise network with real-time commissions?",
        answer:
            "Yes. The platform handles complex dealer and retailer hierarchies with real-time commission tracking for both GSM and CDMA MVNO models.",
    },
    {
        question: "5. Are the dealer portals white-labeled with my brand?",
        answer:
            "Fully. Every dealer portal and interface can be customized to reflect your brand — no iQ Connect branding visible to your end users.",
    },
    {
        question: "6. What uptime does the platform guarantee?",
        answer:
            "iQ Connect delivers 99.9% uptime, backed by carrier-grade redundancy and failover architecture built into the core infrastructure.",
    },
    {
        question: "7. Does it include analytics to measure profitability by promo or carrier?",
        answer:
            "Yes. Real-time dashboards track churn, ARPU, and sales velocity, so you can see which T-Mobile or Xfinity promos are actually profitable before the day ends.",
    },
    {
        question: "8. Is iQ Connect only for MVNOs, or does it support IoT and M2M devices too?",
        answer:
            "Both. Beyond traditional MVNO operations, the platform includes robust connectivity management for IoT and M2M — built for next-generation device networks.",
    },
    {
        question: "9. What kind of support do I get after implementation?",
        answer:
            "Every client is assigned a Dedicated Support Expert who acts as an extension of your team, providing hands-on billing support as your operation scales.",
    },
    {
        question: "10. Is iQ Connect suitable for small operators, or only large enterprises?",
        answer:
            "It’s built to scale with you. Whether you’re a single-location retailer or managing a complex distribution network, the platform adapts to the size and needs of your operation.​​​​​​​​​​​​​​​​",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="secondary-heading text-center mb-8">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-md"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-md font-medium text-gray-900">
                                {faq.question}
                            </span>

                            <span className="text-xl">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-600 text-md leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}