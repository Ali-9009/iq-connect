import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,   // 2 columns
        rows: 1,           // 2 rows = total 4 cards
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    rows: 1, // mobile = 2 stacked
                },
            },
        ],
    };

    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="secondary-heading text-center mb-8">
                What Our Clients Say
            </h2>

            <Slider {...settings}>
                {testimonials.map((t, idx) => (
                    <div key={idx} className="p-3">
                        <div className="rounded-2xl border border-gray-200 shadow-md p-6 h-full flex flex-col justify-between hover:scale-[1.02] transition">
                            <p className=" italic mb-4">"{t.text}"</p>
                            <p className="font-semibold mt-4">{t.author}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}