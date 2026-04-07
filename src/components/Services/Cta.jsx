// components/Services/Cta.jsx
import { Link } from "react-router-dom";

export default function Cta({ data }) {
    return (
        <section className="max-w-6xl mt-12 rounded-2xl mx-auto bg-[#1a2943] py-14 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* Headline */}
                <h2 className="secondary-heading text-white">{data.title}</h2>

                {/* Subtext */}
                <p className="mt-6 para1 text-white">{data.subtitle}</p>

                {/* CTA Button */}
                <div className="mt-10">
                    <Link
                        to={data.buttonLink}
                        className="py-2 px-6 border-2 border-white text-white rounded-4xl hover:bg-[var(--primary-color)] hover:text-white transition"
                    >
                        {data.buttonText}
                    </Link>
                </div>

            </div>
        </section>
    );
}