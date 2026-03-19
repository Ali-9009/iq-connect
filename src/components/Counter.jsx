import { useEffect, useState } from "react";

const stats = [
    { label: "Integrated technology partners", value: 20 },
    { label: "Operational categories covered", value: 6 },
    { label: "Extra logins required per integration", value: 0 },
    { label: "Platform to manage all of it", value: 1 },
];

function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const duration = 1500;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);
            const value = Math.floor(percentage * target);

            setCount(value);

            if (percentage < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target]);

    return <span>{count.toLocaleString()}</span>;
}

export default function CounterX() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="secondary-heading text-3xl font-semibold">
                    One Login. Every System Your Store Depends On.
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    The integration count matters less than the outcome: wireless
                    retailers using IQ Connect don't manage a stack of disconnected
                    tools. They manage one platform that talks to all of them.
                </p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition"
                    >
                        <h3 className="text-3xl font-bold text-gray-900">
                            <Counter target={item.value} />
                            {item.value >= 1 ? "+" : ""}
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}