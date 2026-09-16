import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import CardExperiences from "./CardExperiences";
import { expList, SEGMENTS } from "../../resources/ExperiencesList"
import OtherSection from "../OtherSections";
import { motion } from "framer-motion";

export default function Experiences() {

    const years = useMemo(() => {
        const unique = Array.from(
            new Set(expList.map((item) => item.start_periode.getFullYear()))
        );
        return unique.sort((a, b) => b - a);
    }, []);
    const [selectedYear, setSelectedYear] = useState<number | "all">("all");

    const sorted = useMemo(() => {
        const filtered =
            selectedYear === "all"
                ? expList
                : expList.filter(
                    (item) => item.start_periode.getFullYear() === selectedYear
                );

        return [...filtered].sort(
            (a, b) => b.start_periode.getTime() - a.start_periode.getTime()
        );
    }, [selectedYear]);

    function useIsMobile(breakpoint = 768) {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
            setIsMobile(mq.matches);

            const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        }, [breakpoint]);

        return isMobile;
    }
    const isMobile = useIsMobile();
    const ITEM_WIDTH = isMobile ? 320 : 450;
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;

            const maxScroll = el.scrollWidth - el.clientWidth;

            if (el.scrollLeft >= maxScroll - 5) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: ITEM_WIDTH, behavior: "smooth" });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    // Drag to scroll (mouse)
    const onMouseDown = (e: React.MouseEvent) => {
        isDown.current = true;
        setIsPaused(true);
        startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
        scrollLeftStart.current = scrollRef.current?.scrollLeft ?? 0;
    };
    const onMouseUp = () => (isDown.current = false);
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    };

    const scrollByArrow = (direction: "left" | "right") => {
        setIsPaused(true);
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH,
            behavior: "smooth",
        });
    };


    const elementNameRef = useRef<HTMLSpanElement>(null);
    const NAME = 'Experiences'

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
                        // reset saat keluar viewport biar bisa retrigger
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

    return (
        <div id="experience" className="flex flex-col  gap-8 mt-2 scroll-mt-28">
            <div className="flex flex-col justify-between items-center gap-3 w-full  p-2">
                <h1 className="text-4xl text-center gap-2  flex sm:flex-row flex-col sm:text-5xl lg:text-6xl font-semibold  primary-content leading-[1.1]">
                    Latest   <span className="text-primary font-black" ref={elementNameRef}></span>
                </h1>

                <div className="flex flex-wrap gap-2 bg-gray-100 rounded-full px-4 py-2">

                    <button
                        onClick={() => setSelectedYear("all")}
                        className={`relative px-3 py-1 text-sm font-medium transition-colors ${selectedYear === "all" ? "text-black font-bold" : "text-black/40 hover:text-black/70"
                            }`}
                    >
                        Semua
                        {selectedYear === "all" && (
                            <motion.div
                                layoutId="year-underline"
                                className={`absolute  px-3 py-1  left-0 right-0 top-0 h-full bg-indigo-600 rounded-full ${selectedYear === "all" ? "text-white font-bold" : "text-black/40 hover:text-black/70"}`}
                                initial={false}
                                animate={{ scaleX: [1, 1.3, 1] }}
                                transition={{
                                    layout: { type: "spring", stiffness: 500, damping: 30 },
                                    scaleX: { duration: 0.35, times: [0, 0.4, 1], ease: "easeInOut" },
                                }}
                            >
                                Semua
                            </motion.div>
                        )}
                    </button>

                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`relative px-3 py-1 text-sm font-medium  transition-colors ${selectedYear === year ? "text-white font-bold" : "text-black/40 hover:text-black/70"
                                }`}
                        >

                            {year}
                            {selectedYear === year && (
                                <motion.div
                                    layoutId="year-underline"
                                    className="absolute left-0 right-0 top-0 z-0 h-full px-3 py-1 bg-indigo-600 rounded-full"
                                    initial={false}
                                    animate={{ translateX: [1, 1.3, 1] }}
                                    transition={{
                                        layout: { type: "spring", stiffness: 500, damping: 30 },
                                        scaleX: { duration: 0.35, times: [0, 0.4, 1], ease: "easeInOut" },
                                    }}
                                >
                                    {year}
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-col">
                {sorted.length === 0 ? (
                    <p className="text-sm text-white/50 py-8 text-center">
                        Tidak ada pengalaman di tahun ini.
                    </p>
                ) : (
                    <div
                        className="relative mx-6"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            isDown.current = false;
                        }}
                    >
                        {/* Tombol panah kiri */}
                        <button
                            type="button"
                            onClick={() => scrollByArrow("left")}
                            aria-label="Scroll left"
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollByArrow("right")}
                            aria-label="Scroll right"
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        <div
                            ref={scrollRef}
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseUp}
                            onMouseMove={onMouseMove}
                            className="overflow-x-auto pb-8  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
                        >
                            <div
                                className="relative flex"
                                style={{ width: `${sorted.length * ITEM_WIDTH}px` }}
                            >
                                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-sky-500 to-violet-500 rounded-full" />

                                {sorted.map((item, i) => {
                                    const segment = SEGMENTS[i % SEGMENTS.length];

                                    return (
                                        <div
                                            key={item.id}
                                            className="relative flex-none px-4"
                                            style={
                                                { width: `${ITEM_WIDTH}px` }}
                                        >
                                            <div
                                                className={`relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-base-100 border-2 ${segment.border} font-bold ${segment.text}`}
                                            >
                                                {i + 1}
                                            </div>

                                            <div
                                                className="mt-6 reveal"
                                                style={{
                                                    animation: "expFadeIn 0.6s ease-out both",
                                                    animationDelay: `${i * 100}ms`,
                                                }}
                                            >
                                                <CardExperiences item={item} accent={segment} alignRight={false} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

            </div>



            <style>{`
                @keyframes expFadeIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    [style*="expFadeIn"] { animation: none !important; opacity: 1 !important; transform: none !important; }
                }
            `}</style>

            <OtherSection title="experiences" message="Hai kak Dzul, saya ingin bertanya tentang pengalaman anda, apakah berkenan?" />
        </div>
    );
}
