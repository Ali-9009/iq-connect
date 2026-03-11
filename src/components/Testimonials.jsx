import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
    {
        text: "The Kiosk basically added an extra employee to my store. Customers handle their own Boost and Metro refills while my team focuses on high-commission sales.",
        author: "Marcus T., Multi-Unit Franchise Owner",
    },
    {
        text: "I used to jump between five different tabs to manage carriers. With the Partner Portal, I can manage Cricket and Verizon in one place. It’s a massive time-saver.",
        author: "Elena R., Retail Store Manager",
    },
    {
        text: "The API Solution actually works without a headache. We synced our Retail Website in days, and now our Simple Mobile and Ultra activations are fully automated.",
        author: "David L., Lead Full-Stack Developer",
    },
    {
        text: "I finally have Real-Time Analytics that make sense. I can see exactly which T-Mobile or Xfinity promos are actually making me money before the day is over.",
        author: "Sarah J., Operations Director",
    },
    {
        text: "Our Wireless Customer Support Specialists stopped complaining about slow software. The interface is fast, even when processing H2O or Lyca top-ups.",
        author: "Kevin M., Customer Experience Supervisor",
    },
];

export default function TestimonialCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Update selectedIndex whenever slide changes
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    // Optional autoplay
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => emblaApi.scrollNext(), 5000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="secondary-heading text-center mb-8">What Our Clients Say</h2>

            <div className="overflow-hidden relative" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="flex-none px-3 w-full sm:w-1/2 lg:w-1/4">
                            <div className="rounded-2xl border border-gray-200 p-6 h-full flex flex-col justify-between ">
                                <p className="italic mb-4">"{t.text}"</p>
                                <p className="font-semibold mt-4">{t.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === selectedIndex ? "bg-(--primary-color)" : "bg-gray-300"
                            }`}
                        onClick={() => emblaApi.scrollTo(idx)}
                    />
                ))}
            </div>
        </section>
    );
}