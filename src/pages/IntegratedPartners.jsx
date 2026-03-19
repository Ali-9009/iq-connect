import Header from "../components/Header";
import Footer from "../components/Footer";

const partners = [
    "/images/1.png",
    "/images/20.webp",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.png",
    "/images/12.webp",
    "/images/13.png",
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
    "/images/17.png",
    "/images/18.png",
    "/images/19.webp",
    "/images/21.png",
    "/images/22.png",

];

const IntegrationPartners = () => {
    return (
        <>
        <Header />

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="secondary-heading text-center mb-12">
                        Integrated partners
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                        {partners.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={logo}
                                    alt="partner logo"
                                    className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        
        </>
        
    );
};

export default IntegrationPartners;