import { useEffect, useRef } from "react";

export default function Publications() {

    const elementNameRef = useRef<HTMLSpanElement>(null);
    const NAME = 'Publications'

    useEffect(() => {
        const target = elementNameRef.current;
        if (!target) return;

        let typingInterval: ReturnType<typeof setInterval> | null = null;

        const startTyping = () => {
            if (typingInterval) clearInterval(typingInterval);

            let i = 0;
            target.textContent = "";
            typingInterval = setInterval(() => {
                i++;
                target.textContent = NAME.slice(0, i);

                if (i >= NAME.length) {
                    if (typingInterval) clearInterval(typingInterval);
                }
            }, 50);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startTyping();
                    } else {
                        if (typingInterval) clearInterval(typingInterval);
                        target.textContent = "";
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
            if (typingInterval) clearInterval(typingInterval);
        };
    }, []);


    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const target = progressRef.current;
        if (!target) return;

        let progress = 0;
        let typingInterval2: ReturnType<typeof setInterval> | null = null;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (typingInterval2) clearInterval(typingInterval2);

                        typingInterval2 = setInterval(() => {
                            progress++;
                            target.style.width = `${progress}%`;

                            if (progress >= NAME.length) {
                                if (typingInterval2 !== null) clearInterval(typingInterval2);
                            }
                        }, 100);
                    } else {
                        if (typingInterval2) clearInterval(typingInterval2);
                        progress = 0;
                        target.style.width = '0%'; // hapus baris ini kalau tidak mau reset visual
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(target);
        return () => {
            observer.disconnect();
            if (typingInterval2) clearInterval(typingInterval2);
        };
    }, []);
    return (
        <>
            <section className=" rounded-lg fadeInUp-animation">
                <div className=" flex flex-col justify-between max-w-6xl mx-auto px-6 items-center py-16 lg:py-18">
                    <div className="flex flex-col w-full text-center py-10 gap-5 items-center">

                        <h1 className="text-4xl text-center gap-2   flex sm:flex-row flex-col sm:text-5xl lg:text-6xl font-semibold  primary-content leading-[1.1]">
                            Latest   <span className="text-primary font-black" ref={elementNameRef}></span>
                        </h1>

                        <div
                            ref={progressRef}
                            className=" h-1 w-0 bg-primary"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 lg:grid-cols-[0.5fr_0.9fr] gap-5 lg:gap-5 items-center">

                        <div className="relative reveal w-[280px] h-[440px] ">

                            <div className="relative w-full h-full rounded-[32px] bg-indigo-700 overflow-hidden">
                                <iframe
                                    src="/docs/5206-5240.pdf"
                                    className="w-full h-full rounded-lg"
                                    title="Jurnal"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col reveal gap-y-8 order-2 lg:order-1">

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