import Hero from "../Hero";
import CardProject from "./CardProject";
import { ProjectsList } from "../../resources/ProjectsList"
import OtherSection from "../OtherSections";
import { useEffect, useRef } from "react";
export default function Projects() {
    const elementNameRef = useRef<HTMLSpanElement>(null);
    const NAME = 'Projects'

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


    const projectRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        el.classList.remove('reveal');
                        void el.offsetWidth;
                        el.classList.add('reveal');
                    } else {
                        el.classList.remove('reveal');
                    }
                });
            },
            { threshold: 0.5 }
        );

        projectRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero project={ProjectsList as []} />
            <div id="projects" className="flex py-10 max-w-7xl mx-auto px-6 flex-col gap-4 fadeInUp-animation reveal mt-2">
                <div className="flex flex-col justify-between items-center gap-3 w-full  p-2">
                    <h1 className="text-4xl text-center gap-2 py-10  flex sm:flex-row flex-col sm:text-5xl lg:text-6xl font-semibold  primary-content leading-[1.1]">
                        Latest   <span className="text-primary font-black" ref={elementNameRef}></span>
                    </h1>


                    <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-4 md:gap-10 lg:gap-4">
                        {ProjectsList.map((project, i) =>

                            <div ref={(el) => { projectRef.current[i] = el; }} className="card-reveal" style={{ animationDelay: `${i * 100}ms` }}><CardProject item={project} /></div>
                        )}
                    </div>

                    <OtherSection title="projects" message="Hai kak Dzul, saya ingin bertanya dan tertarik bekerja sama tentang projek anda, apakah berkenan?" />
                </div>
            </div>
            <style>{`
               @keyframes expFadeIn {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .card-reveal {
        opacity: 0;
        transform: translateY(14px);
    }
    .card-reveal.reveal {
        animation: expFadeIn 0.6s ease-out both;
    }
    @media (prefers-reduced-motion: reduce) {
        .card-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
            `}</style>
        </>
    )
}