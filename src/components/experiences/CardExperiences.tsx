import type { ExpItem, Segment } from "./Experiences";

interface CardExpProps {
    item: ExpItem;
    accent: Segment;
    alignRight?: boolean;
}

// Small inline icons so the component has no extra dependency to install.
function UsersIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function GraduationCapIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
        </svg>
    );
}

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
}

function ExperienceTypeIcon({ type, className }: { type: string; className?: string }) {
    const normalized = type.toLowerCase();

    if (normalized.includes("organisation")) {
        return <UsersIcon className={className} />;
    }

    if (normalized.includes("training")) {
        return <GraduationCapIcon className={className} />;
    }

    return <BriefcaseIcon className={className} />;
}

export default function CardExperiences({ item, accent }: CardExpProps) {
    const formatDate = (value: Date) =>
        new Date(value).toLocaleDateString("id-ID", {
            month: "short",
            year: "numeric",
        });

    const experienceType = String(item.type).replaceAll("_", " ");

    return (
        <a
            href={`/experiences/${item.id}`}
            className="group block rounded-xl border border-white/10 bg-gray-800 p-5 lg:p-6 transition-colors duration-300 hover:border-white/25"
        >
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ${accent.text}`}>
                        <ExperienceTypeIcon type={item.type} className="h-4 w-4" />
                    </span>
                    <p className="text-xs text-white/50">{formatDate(item.start_periode)} — {formatDate(item.end_periode)}</p>
                </div>

                <h3 className="text-base lg:text-lg font-semibold text-primary-content leading-snug">
                    {item.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                    {item.summary}
                </p>

                <span className={`w-fit text-xs font-medium ${accent.text}`}>
                    {experienceType}
                </span>
            </div>
        </a>
    );
}
