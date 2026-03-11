import { Link } from "react-router-dom";


export default function Blog() {
    return (
        <section className="mt-16 max-w-7xl mx-auto">
            <div className="main-section pt-12 ">
                {/* Heading + Button */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="secondary-heading">
                        Weekly Most Read
                    </h2>

                    <Link
                        to="/insights"
                        className="text-sm font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                    >
                        See All
                    </Link>
                </div>

                {/* Layout */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                    {/*  Card 1 */}
                    <div
                        className=""
                    >
                        <img src="/images/post-image.png" alt="" />
                        {/* meta */}
                        <p className="text-(--light-black) font-bold my-8">
                            22 July 2024 <span className="font-bold">•</span> 4 min
                        </p>

                        {/* description */}
                        <p className="text-(--light-black) leading-relaxed mb-6">
                            Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.
                        </p>
                    </div>


                    {/*  Card 1 */}
                    <div
                        className=""
                    >
                        <img src="/images/post-image.png" alt="" />
                        {/* meta */}
                        <p className="text-(--light-black) font-bold my-8">
                            22 July 2024 <span className="font-bold">•</span> 4 min
                        </p>

                        {/* description */}
                        <p className="text-(--light-black) leading-relaxed mb-6">
                            Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.
                        </p>
                    </div>


                    {/*  Card 1 */}
                    <div
                        className=""
                    >
                        <img src="/images/post-image.png" alt="" />
                        {/* meta */}
                        <p className="text-(--light-black) font-bold my-8">
                            22 July 2024 <span className="font-bold">•</span> 4 min
                        </p>

                        {/* description */}
                        <p className="text-(--light-black) leading-relaxed mb-6">
                            Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.
                        </p>
                    </div>


                    {/*  Card 1 */}
                    <div
                        className=""
                    >
                        <img src="/images/post-image.png" alt="" />
                        {/* meta */}
                        <p className="text-(--light-black) font-bold my-8">
                            22 July 2024 <span className="font-bold">•</span> 4 min
                        </p>

                        {/* description */}
                        <p className="text-(--light-black) leading-relaxed mb-6">
                            Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}