import { motion } from "framer-motion";

export default function WhoItsFor({ audience = [], heading = "Who It’s For", subtitle = "Built for every stage of your wireless journey." }) {
    return (
        <section className="py-12 section">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="secondary-heading">{heading}</h2>
                    <p className="para1">{subtitle}</p>
                </div>

                {/* Grid */}
                <div className="relative">
                    <div className="grid gap-12 lg:grid-cols-4 relative">
                        {audience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center relative"
                            >
                                {/* Circle Icon */}
                                <div className="mx-auto mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 text-white shadow-md">
                                    <item.icon size={24} />
                                </div>

                                {/* Content */}
                                <h3 className="text-md font-semibold text-gray-900 mb-2">{item.title}</h3>
                                {item.desc && (
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}