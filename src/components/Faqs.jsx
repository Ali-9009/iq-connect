import { useState } from "react";

const faqs = [
    {
        question: "What is IQ Connect?",
        answer:
            "IQ Connect is a unified platform that helps retailers manage activations, commissions, and carrier integrations seamlessly.",
    },
    {
        question: "How do I get started?",
        answer:
            "Simply sign up, complete your onboarding, and start activating lines within minutes.",
    },
    {
        question: "Is there any contract?",
        answer:
            "No long-term contracts. You can use the platform freely without commitments.",
    },
    {
        question: "Do you support multiple carriers?",
        answer:
            "Yes, IQ Connect integrates with multiple MVNO platforms like Telgoo and Telispire.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-3xl mx-auto px-6 py-12">
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
                            <span className="text-lg font-medium text-gray-900">
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
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}