import { useState, useMemo, useRef, useEffect } from "react";
import CardExperiences from "./CardExperiences";
import OtherExperience from "./OtherExperience";

import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ExpItem {
    id: number;
    title: string;
    image?: string;
    start_periode: Date;
    end_periode: Date;
    type: string;
    organization: string,
    summary: string;
    evidenceImage?: string;
    evidenceCaption?: string;
    documentationUrl?: string;
    skill: string[],
    slidesEvidence: object,
    desc: string
}

export interface Segment {
    line: string;
    border: string;
    text: string;
}

export interface slide {
    image: string,
    title: string,
    desc: string
}
// One color per segment of the path — cycles if there are more items than colors.
const SEGMENTS: Segment[] = [
    { line: "from-orange-400 to-rose-500", border: "border-orange-400", text: "text-orange-400" },
    { line: "from-rose-500 to-sky-500", border: "border-rose-500", text: "text-rose-500" },
    { line: "from-sky-500 to-slate-400", border: "border-sky-500", text: "text-sky-500" },
    { line: "from-slate-400 to-violet-500", border: "border-slate-400", text: "text-slate-400" },
    { line: "from-violet-500 to-amber-400", border: "border-violet-500", text: "text-violet-500" },
];


export default function Experiences() {
    const expList: ExpItem[] = [
        {
            id: 1,
            title: "Staff Divisi Publikasi Dekorasi dan Dokumentasi",
            image: "my-profile.png",
            start_periode: new Date("2024-05-01"),
            end_periode: new Date("2024-08-01"),
            type: "Organizations",
            organization: "Telkom University Surabaya",
            summary: "Menjadi Staff Publikasi, Dekorasi dan Dokumentasi Dewan Perwakilan Mahasiswa Telkom University Surabaya 2024",
            evidenceCaption: "Dokumentasi kegiatan X",
            skill: ['Figma', 'Canva', 'Coreldraw', 'Leadership', 'Integrity', 'Problem Solving', 'Critical Thinking'],
            slidesEvidence: [
                {
                    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                    title: 'Gotong Royong',
                    desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                    title: 'Kegiatan Warga',
                    desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                    title: 'Musyawarah Digital',
                    desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
                }
            ],
            desc: `
            ✨ Key Contributions:



👥 Successfully built new organizational insights, contributing to the addition of 40+ active members through engaging communication strategies.

📈 Boosted Instagram engagement by increasing followers by 200+, enhancing the organization’s digital presence and outreach.

🧑‍🎨 Designed all creative assets including posters, PowerPoint templates, logos, and PDH (official attire) to strengthen DPM's visual identity.

📅 Acted as a Content Planner, curating and scheduling social media design content that aligned with the organization’s core messaging and events.

📸 Took part in shaping DPM Telkom University Surabaya's public image both visually and strategically, ensuring consistent and meaningful communication across platforms.
            `

        },
        {
            id: 2,
            title: "Staff Of Public Relations",
            image: "my-profile.png",
            start_periode: new Date("2023-10-01"),
            end_periode: new Date("2024-06-01"),
            type: "Organizations",
            organization: "Google Developer Students Clubs",

            summary:
                "Menjadi Tim Inti dalam divisi Public Relations GDSC Telkom University 2023/2024",
            skill: ['Sponsorship', 'Content Planner', 'Teamwork', 'Team Management', 'Team Leadership', 'Team Building', 'Critical Thinking', 'Design'],
            slidesEvidence: [
                {
                    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                    title: 'Gotong Royongs',
                    desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                    title: 'Kegiatan Warga',
                    desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                    title: 'Musyawarah Digital',
                    desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
                }
            ],
            desc: `
            ✨ Key Contributions:

👥 Successfully contributed to growing the GDSC community by adding 400+ members from both within and outside the university.

🎤 Served as a Core Team member in the Public Relations division, playing a central role in outreach, partnerships, and branding.

🌐 Participated in national and international tech events, gaining exposure to global trends and networking with industry professionals.

🤝 Organized collaborative tech events with top universities across the country and internationally.

🚀 Partnered with leading tech startups focused on career planning, enabling members to gain practical career insights.

📅 Acted as Content Planner for GDSC's social media, ensuring engaging and informative content across platforms.

📄 Created professional sponsorship documents for each event, including successful partnership acquisition (e.g., LeMinerale sponsorship) 💼🥤

`
        },
        {
            id: 3,
            title: "Staff Internship Flutter Developer",
            image: "my-profile.png",
            start_periode: new Date("2023-10-01"),
            end_periode: new Date("2023-12-01"),
            type: "Training",
            organization: "PT Sinergi Inovasi Tekno",

            summary:
                "Menjadi Staff Magang pada Divisi Flutter Developer dengan rentang waktu 3 bulan (Oktober – Desember).",
            skill: ['Flutter', 'Postman API', 'Teamwork', 'Responsible', 'Problem Solving', 'Critical Thinking', 'Leadership', 'Integrity'],
            slidesEvidence: [
                {
                    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                    title: 'Gotong Royong',
                    desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                    title: 'Kegiatan Warga',
                    desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                    title: 'Musyawarah Digital',
                    desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
                }
            ],
            desc: `
           ✨ Key Contributions:



💻 Successfully developed 3 functional applications as part of multiple Capstone Projects, delivering new insights and business process efficiencies for partnering companies.

👥 Led the development of an HRIS (Human Resource Information System) application to support end-to-end HR workflows.

🔗 Worked on the Pertamina Application Project, focusing on API Integration to enhance system connectivity and performance.

🏢 Contributed to the development of a custom HRIS platform for PT Sinergi Inovasi Tekno, aligning digital solutions with business needs.



🚀 These projects allowed me to strengthen skills in full-stack development, system integration, and business-oriented problem-solving, with direct impact on operational streamlining.`
        },
        {
            id: 4,
            title: "Data Analyst",
            image: "my-profile.png",
            start_periode: new Date("2025-02-01"),
            end_periode: new Date("2025-07-01"),
            type: "Training",
            organization: "PT. Semen Indonesia (Persero) Tbk.",
            summary:
                "Menjadi Staff Magang MAGENTA SIG 2025 di Divisi Data Analyst dengan rentang waktu 6 bulan (Februari – Juli).",
            skill: ['Microsoft Power BI', 'SQL Server Management Studio', 'Microsoft Fabric', 'Microsoft Power Platform', 'Microsoft Power Automate', 'Leadership', 'Critical Thinking', 'Problem Solving'],
            slidesEvidence: [
                {
                    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                    title: 'Gotong Royong',
                    desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                    title: 'Kegiatan Warga',
                    desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                    title: 'Musyawarah Digital',
                    desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
                }
            ],
            desc: `
            ✨ Key Contributions:



👥 Successfully built new organizational insights, contributing to the addition of 40+ active members through engaging communication strategies.

📈 Boosted Instagram engagement by increasing followers by 200+, enhancing the organization’s digital presence and outreach.

🧑‍🎨 Designed all creative assets including posters, PowerPoint templates, logos, and PDH (official attire) to strengthen DPM's visual identity.

📅 Acted as a Content Planner, curating and scheduling social media design content that aligned with the organization’s core messaging and events.

📸 Took part in shaping DPM Telkom University Surabaya's public image both visually and strategically, ensuring consistent and meaningful communication across platforms.
            `
        },
        {
            id: 5,
            title: "Frontend Developer",
            image: "my-profile.png",
            start_periode: new Date("2025-1-01"),
            end_periode: new Date("2025-6-01"),
            type: "Training",
            organization: "PT Bima Digital Indonesia",

            summary:
                "Menjadi Staff Magang pada Divisi Frontend Developer dengan rentang waktu 6 bulan (Januari – Juni).",
            skill: ['Next.js', 'HTML', 'CSS', 'Javascript', 'Git', 'Teamwork', 'Team Leadership', 'Integrity', 'Problem Solving', 'Critical Thinking', 'Modular Programming'],
            slidesEvidence: [
                {
                    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                    title: 'Gotong Royong',
                    desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                    title: 'Kegiatan Warga',
                    desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                    title: 'Musyawarah Digital',
                    desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
                }
            ],
            desc: `
            ✨ Key Contributions:

1. Build a website for starting Journey Test which is create with basic front end development (HTML, CSS, Javascript)💻

2. Build a website for Middle Test which is create with Intermediate front end development (HTML, Tailwind, and Plugin) and also my job description is Login Screen, Registrations Screen, and Ads Section👾

3. Build a website for Final Test which is create with Advance front end development (Next JS, Tailwind, and Plugin) and also my job description is Login Screen, Registrations Screen, Ads Section, Kamus KOL Screen (With Search Bar), and Team Screen👾 `
        },
    ];

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

    const ITEM_WIDTH = 450;
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
    return (
        <div id="experience" className="flex flex-col max-w-6xl mx-auto px-6 gap-8 mt-2 scroll-mt-28">
            <div className="flex sm:flex-row flex-col justify-between items-start w-full p-2">
                <h2 className="text-lg lg:text-2xl font-bold primary-content">
                    Latest Experience
                </h2>

                <div className="flex group transition-all duration-700 flex-wrap gap-2 bg-gray-100 rounded-full">
                    {selectedYear !== 'all' && <button
                        onClick={() => setSelectedYear("all")}
                        className={`rounded-full border-white/40  border px-3 py-1 text-xs font-medium transition-colors text-black/50 bg-gray-50`}
                    >
                        Reset Filter
                    </button>}
                    <button
                        onClick={() => setSelectedYear("all")}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${selectedYear === "all"
                            ? "border-white/40 btn btn-primary text-white"
                            : "border-white/10 text-black/50 hover:border-white/25 hover:text-black"
                            }`}
                    >
                        Semua
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${selectedYear === year
                                ? "border-white/40 btn btn-primary text-white"
                                : "border-white/10 text-black/50 hover:border-white/25 hover:text-black"
                                }`}
                        >
                            {year}
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
                        className="relative"
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
                                            style={{ width: `${ITEM_WIDTH}px` }}
                                        >
                                            <div
                                                className={`relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-base-100 border-2 ${segment.border} font-bold ${segment.text}`}
                                            >
                                                {i + 1}
                                            </div>

                                            <div
                                                className="mt-6"
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

                <div className="absolute left-5 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-1 h-0 w-0 border-x-8 border-x-transparent border-t-[10px] border-t-slate-400" />
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

            <OtherExperience />
        </div>
    );
}
