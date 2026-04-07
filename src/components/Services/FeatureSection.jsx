// FeatureSection.jsx
import { motion } from "framer-motion";

export default function FeatureSection({ title, subtitle, features = [] }) {
    return (
        <section className="py-12 section">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="secondary-heading">{title}</h2>
                    <p className="para1">{subtitle}</p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-blue-100 text-purple-600 group-hover:scale-110 transition">
                                <item.icon size={26} /> {/* ✅ render component dynamically */}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

                            {/* hover line */}
                            <div className="mt-4 h-0.5 w-0 bg-linear-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}