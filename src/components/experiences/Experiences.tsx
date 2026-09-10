import CardExperiences from "./CardExperiences";
import OtherExperience from "./OtherExperience";

export interface ExpItem {
    id: number;
    title: string;
    image?: string;
    start_periode: Date;
    end_periode: Date;
    type: string;
    summary: string;
}

export interface Segment {
    line: string;
    border: string;
    text: string;
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
            title: "Staff Divisi Publikasi Dekorasi dan Dokumentasi DPM Telkom University Surabaya 2024",
            image: "dpm-publikasi.jpg",
            start_periode: new Date("2024-05-01"),
            end_periode: new Date("2024-08-01"),
            type: "Organisations",
            summary:
                "Menjadi Staff Publikasi, Dekorasi dan Dokumentasi Dewan Perwakilan Mahasiswa Telkom University Surabaya 2024",
        },
        {
            id: 2,
            title: "Staff Of Public Relations",
            image: "gdsc-public-relations.jpg",
            start_periode: new Date("2023-10-01"),
            end_periode: new Date("2024-06-01"),
            type: "Organisations",
            summary:
                "Menjadi Tim Inti dalam divisi Public Relations GDSC Telkom University 2023/2024",
        },
        {
            id: 3,
            title: "Staff Internship Flutter Developer",
            image: "internship-flutter-developer.jpg",
            start_periode: new Date("2023-10-01"),
            end_periode: new Date("2023-12-01"),
            type: "Training",
            summary:
                "Menjadi Staff Magang pada Divisi Flutter Developer dengan rentang waktu 3 bulan (Oktober – Desember).",
        },
    ];

    // Latest experience first.
    const sorted = [...expList].sort(
        (a, b) => b.start_periode.getTime() - a.start_periode.getTime()
    );

    return (
        <div id="experience" className="flex flex-col max-w-6xl mx-auto px-6 gap-8 mt-2 scroll-mt-28">
            <div className="flex flex-row justify-between items-start w-full p-2">
                <h2 className="text-lg lg:text-2xl font-bold primary-content">
                    Latest Experience
                </h2>
            </div>

            <div className="relative flex flex-col">
                {sorted.map((item, i) => {
                    const segment = SEGMENTS[i % SEGMENTS.length];
                    const isEven = i % 2 === 0;
                    const isLast = i === sorted.length - 1;

                    return (
                        <div
                            key={item.id}
                            className={`relative ${isLast ? "pb-6" : "pb-12 md:pb-16"}`}
                        >
                            {/* path segment */}
                            <div
                                className={`absolute left-5 md:left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b ${segment.line}`}
                            />

                            {/* number marker */}
                            <div
                                className={`absolute left-5 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-base-100 border-2 ${segment.border} font-bold ${segment.text}`}
                            >
                                {i + 1}
                            </div>

                            {/* content row */}
                            <div className="grid reveal grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
                                <div
                                    className={`pl-16 md:pl-0 ${isEven
                                            ? "md:col-start-1 md:pr-14"
                                            : "md:col-start-2 md:pl-14"
                                        }`}
                                    style={{
                                        animation: "expFadeIn 0.6s ease-out both",
                                        animationDelay: `${i * 120}ms`,
                                    }}
                                >
                                    <CardExperiences item={item} accent={segment} alignRight={false} />
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* arrow tip */}
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
