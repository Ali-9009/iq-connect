import { useState } from "react";

const faqs = [
    {
        question: "Who is iQ Connect built for?",
        answer:
            "iQ Connect is designed for mobile virtual network operators (MVNOs), distributors, retailers, digital marketplaces, and IoT/M2M operators who need a centralized platform to manage activations, billing, and subscribers — without relying on multiple disconnected legacy systems.",
    },
    {
        question: "Which carriers does iQ Connect support?",
        answer:
            "iQ Connect has pre-built integrations with AT&T, T-Mobile, and Verizon, with full support for both GSM and CDMA models. This means you can operate under different MVNO programs without building carrier connections from scratch.",
    },
    {
        question: "How quickly can I get up and running?",
        answer:
            "Thanks to pre-integrated carrier connections and developer-friendly API documentation, operators can sync their retail website and fully automate activations within days — not months. No need to rebuild existing systems or open physical operations to enter new markets.",
    },
    {
        question: "Can I use my own branding on the platform?",
        answer:
            "Yes. iQ Connect includes fully white-labeled dealer portals and retail websites. Your brand, your colors, your customer experience — all powered by iQ Connect’s infrastructure without your end customers ever knowing what’s running behind the scenes.",
    },
    {
        question: "How does the Partner Portal work?",
        answer:
            "The Partner Portal lets you define multiple distribution points with custom pricing, permissions, and access controls per partner. You can manage activations, refills, and monitor performance across your entire distribution network from a single dashboard.",
    },
    {
        question: "Does the platform support prepaid, postpaid, or both?",
        answer:
            "iQ Connect’s convergent billing engine supports prepaid, postpaid, and hybrid models. It’s flexible and fully PCI-compliant, so you can adapt it to whichever business model fits your operation.",
    },
    {
        question: "Does iQ Connect offer customer support for my subscribers?",
        answer:
            "Yes. You can access a team of trained wireless customer support specialists who handle subscriber inquiries on your behalf, maintaining your brand voice throughout every interaction. This reduces your operational burden without sacrificing the customer experience.",
    },
    {
        question: "What is the Kiosk and what does it do?",
        answer:
            "The Kiosk is a self-service station you can deploy at retail locations, allowing customers to complete activations and top-ups without staff involvement. It’s fully brandable, easy to operate, and integrates directly with your MVNO platform.",
    },
    {
        question: "Can I integrate iQ Connect with my existing systems?",
        answer:
            "Yes. iQ Connect offers a robust API suite with developer-friendly documentation and dedicated technical support. You can automate workflows, sync data in real time, and build fully custom experiences on top of the platform.",
    },
    {
        question: "What kind of analytics does the platform provide?",
        answer:
            "You get access to real-time dashboards with metrics including revenue, activations, churn, ARPU, and usage patterns. Reports are exportable and you can set up customizable alerts to make data-driven decisions before the day is over.",
    },
    {
        question: "What uptime can I expect from the platform?",
        answer:
            "iQ Connect is built with redundancy and failover at its core, guaranteeing 99.9% uptime for both activations and the billing system.",
    },
    {
        question: "Do I get a dedicated point of contact or just a generic support queue?",
        answer:
            "Every iQ Connect client is assigned a Dedicated Support Expert who acts as an extension of your team. This isn’t impersonal ticket-based support — it’s someone who knows your operation and is actively involved as you grow and scale.",
    },
    {
        question: "Can I run promotions without involving a developer?",
        answer:
            "Yes. From your dashboard you can create, schedule, and launch promotions including discounts, bonus data, referral rewards, and limited-time deals — all fully configurable with zero engineering effort required.",
    },
    {
        question: "Is iQ Connect only for large operators or can smaller MVNOs use it too?",
        answer:
            "iQ Connect is built to support growth at every stage. Whether you’re launching your first MVNO or managing a multi-channel operation, the platform scales with you — reducing staffing, training, and support costs through centralized workflows and automation as you expand.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 pt-12">
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