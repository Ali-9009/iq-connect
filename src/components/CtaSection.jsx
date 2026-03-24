
import { Link } from "react-router-dom";

export default function CtaSection() {
    return (
        <main className="px-6">
            <section className="max-w-6xl mt-12 rounded-2xl mx-auto bg-[#1a2943] py-14 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Headline */}
                    <h2 className="secondary-heading text-white">
                        Ready to trade Legacy OSS BSS complexity for clarity?
                    </h2>

                    {/* Subtext */}
                    <p className="mt-6 para1 text-white">
                        Join operators worldwide who have migrated to the iQ Connect
                        MVNO billing system.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <Link to="/contact" className="py-2 px-6 border-2 border-white text-white rounded-4xl hover:bg-(--primary-color) hover:text-white transition">
                            Get a Custom Demo
                        </Link>
                    </div>

                </div>
            </section>
        </main>
        
    );
}