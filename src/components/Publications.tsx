export default function Publications() {
    return (
        <>
            <section className=" rounded-lg fadeInUp-animation">
                <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
                    <h2 className="text-lg lg:text-2xl font-bold primary-content">
                        Publications
                    </h2>
                    <div className="grid grid-cols-1 mt-5 lg:grid-cols-[0.5fr_0.9fr] gap-5 lg:gap-5 items-center">

                        <div className="relative w-[280px] h-[440px] ">

                            <div className="relative w-full h-full rounded-[32px] bg-indigo-700 overflow-hidden">
                                <iframe
                                    src="/docs/5206-5240.pdf"
                                    className="w-full h-full rounded-lg"
                                    title="Laporan Magang"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col gap-y-8 order-2 lg:order-1">

                            <div className="flex flex-col gap-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="border text-sm border-indigo-300 text-indigo-600 font-black px-3 py-1 rounded-full"
                                    >
                                        Journal of Information Systems and Informatics
                                    </div>

                                    <a className="text-sm border bg-indigo-600 hover:bg-indigo-900 transition-colors duration-1000 border-indigo-300 text-white font-black px-3 py-1 rounded-full"

                                        href="https://doi.org/10.63158/journalisi.v8i4.1821"

                                    >
                                        Link DOI
                                    </a>

                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold primary-content leading-[1.1]">
                                    Performance and Carbon Footprint Evaluation of a PWA-Based Waste Bank Information System
                                </h1>
                                <p className="text-primary text-sm font-medium tracking-wide">Waste Bank Information System · Progressive Web Application · Green IT · Digital Carbon Footprint · Energy Efficiency</p>

                                <p className="primary-content/80 text-lg leading-relaxed  text-justify">
                                    Service worker caching in Sibanksa, a Green IT-based PWA waste bank system, reduced data transfer from 4.84 MB to 20.9 kB and cut energy consumption and carbon emissions by roughly 8%, though page size remained high (8.12 MB vs. 7.46 MB) and FCP/LCP still missed Web Vitals targets. These findings offer a practical framework for measuring web performance, energy efficiency, and carbon footprint to guide more sustainable, Green IT-aligned PWA development.
                                </p>
                            </div>


                        </div>





                    </div>
                </div>
            </section>
        </>
    )
}