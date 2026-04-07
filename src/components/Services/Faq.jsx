import React, { useState } from "react";

export default function FAQ({ faqs = [], title = "Frequently Asked Questions" }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 pt-12">
            <h2 className="secondary-heading text-center mb-8">{title}</h2>

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
                            <p className="text-gray-600 text-md leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}