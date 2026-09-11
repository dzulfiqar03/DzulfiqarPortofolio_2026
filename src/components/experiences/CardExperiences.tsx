import {useState } from "react";
import { ChevronRight } from "lucide-react";
import type { ExpItem, Segment } from "./Experiences";

interface CardExpProps {
  item: ExpItem & {
    evidenceImage?: string;
    evidenceCaption?: string;
    documentationUrl?: string;
  };
  accent: Segment;
  alignRight?: boolean;
  onNavigate?: (id: ExpItem["id"]) => void;
}


function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
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

export default function CardExperiences({ item, accent, onNavigate }: CardExpProps) {
  const formatDate = (value: Date | string) =>
    new Date(value).toLocaleDateString("id-ID", {
      month: "short",
      year: "numeric",
    });

  const experienceType = String(item.type).replaceAll("_", " ");

  const slides = [
    { id: "overview" as const },
    ...(item.evidenceImage ? [
        { id: "evidence" as const 

        }
    
    ] : []),
    { id: "documentation" as const },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);

  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      window.location.href = `/experiences/${item.id}`;
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}

      className="group relative block cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gray-800 p-5 lg:p-6 transition-colors duration-300 hover:border-white/25"
    >
      {/* track slide: geser horizontal sesuai activeIndex */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full shrink-0 pr-1">
            {slide.id === "overview" && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ${accent.text}`}
                  >
                    <ExperienceTypeIcon type={item.type} className="h-4 w-4" />
                  </span>
                  <p className="text-xs text-white/50">
                    {formatDate(item.start_periode)} — {formatDate(item.end_periode)}
                  </p>
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
            )}

            {slide.id === "evidence" && (
              <div className="flex flex-col gap-3">
                <p className={`text-xs font-medium ${accent.text}`}>Evidence</p>
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-white/5">
                  <img
                    src={item.evidenceImage}
                    alt={item.evidenceCaption ?? item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                {item.evidenceCaption && (
                  <p className="text-xs text-white/50">{item.evidenceCaption}</p>
                )}
              </div>
            )}

            {slide.id === "documentation" && (
              <div className="flex h-full flex-col items-start justify-center gap-3 py-4">
                <p className="text-xs text-white/50">Lihat rincian lengkap kegiatan ini</p>
                <a
                  href={item.documentationUrl ?? `/experiences/${item.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium ${accent.text} transition-colors hover:border-white/30`}
                >
                  Documentation
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* panah navigasi manual */}
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white/70 opacity-0 transition-opacity duration-300 hover:text-white group-hover:opacity-100"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center gap-1.5">
          {slides.map((slide, i) => (
            <span
              key={slide.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? `w-4 ${accent?? "bg-white"}` : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}