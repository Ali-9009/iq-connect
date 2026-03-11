import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

const blogPosts = [
    {
        image: "/images/post-image.png",
        date: "22 July 2024",
        readTime: "4 min",
        description:
            "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    },
    {
        image: "/images/post-image.png",
        date: "22 July 2024",
        readTime: "4 min",
        description:
            "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    },
    {
        image: "/images/post-image.png",
        date: "22 July 2024",
        readTime: "4 min",
        description:
            "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    },
    {
        image: "/images/post-image.png",
        date: "22 July 2024",
        readTime: "4 min",
        description:
            "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
    },
];

export default function BlogCarousel() {
    // Detect mobile width
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Update selected index when carousel changes
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
        <section className="mt-16 max-w-7xl mx-auto px-4">
            <div className="main-section pt-12">
                {/* Heading + Button */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="secondary-heading">Weekly Most Read</h2>
                    <Link
                        to="/insights"
                        className="text-sm font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                    >
                        See All
                    </Link>
                </div>

                {/* Mobile Carousel */}
                {isMobile ? (
                    <div className="overflow-hidden relative" ref={emblaRef}>
                        <div className="flex gap-6 pl-4">
                            {blogPosts.map((post, idx) => (
                                <div key={idx} className="flex-none w-full">
                                    <div className="rounded-2xl border border-gray-200 p-4 flex flex-col h-full">
                                        <img src={post.image} alt="" className="rounded-lg mb-4" />
                                        <p className="text-(--light-black) font-bold my-2">
                                            {post.date} <span className="font-bold">•</span> {post.readTime}
                                        </p>
                                        <p className="text-(--light-black) leading-relaxed">{post.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center mt-6 gap-2">
                            {blogPosts.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-3 h-3 rounded-full transition-colors ${idx === selectedIndex ? "bg-(--primary-color)" : "bg-gray-300"
                                        }`}
                                    onClick={() => emblaApi.scrollTo(idx)}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    // Desktop Grid
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogPosts.map((post, idx) => (
                            <div key={idx} className="rounded-2xl border border-gray-200 p-4 flex flex-col h-full">
                                <img src={post.image} alt="" className="rounded-lg mb-4" />
                                <p className="text-(--light-black) font-bold my-2">
                                    {post.date} <span className="font-bold">•</span> {post.readTime}
                                </p>
                                <p className="text-(--light-black) leading-relaxed">{post.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}