import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Users, GraduationCap, Briefcase } from "lucide-react";
import type { ExpItem, Segment } from "../../resources/ExperiencesList";

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

function ExperienceTypeIcon({ type, className }: { type: string; className?: string }) {
  const normalized = type.toLowerCase();
  if (normalized.includes("organization")) return <Users className={className} />;
  if (normalized.includes("training")) return <GraduationCap className={className} />;
  return <Briefcase className={className} />;
}

export default function CardExperiences({ item, accent, onNavigate }: CardExpProps) {
  const formatDate = (value: Date | string) =>
    new Date(value).toLocaleDateString("id-ID", {
      month: "short",
      year: "numeric",
    });

  const experienceType = String(item.type).replaceAll("_", " ");
  const hasEvidence = !!item.slidesEvidence && Object.keys(item.slidesEvidence).length > 0;
  const evidenceEntries = hasEvidence ? Object.entries(item.slidesEvidence!) : [];

  const slides = [
    { id: "overview" as const },
    ...(hasEvidence ? [{ id: "evidence" as const }] : []),
    { id: "documentation" as const },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentEvidence, setCurrentEvidence] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(index);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      window.location.href = `/experiences/${item.id}`;
    }
  };

  useEffect(() => {
    if (!hasEvidence || evidenceEntries.length <= 1 || isHovered) return;
    const t = setInterval(() => {
      setCurrentEvidence((prev) => (prev + 1) % evidenceEntries.length);
    }, 4000);
    return () => clearInterval(t);
  }, [hasEvidence, evidenceEntries.length, isHovered]);

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/card  relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800 p-5 lg:p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500  ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 pr-1">
              {slide.id === "overview" && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-transform duration-300 group-hover/card:scale-110 ${accent.text}`}
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
                    {experienceType} | <span className="text-white/70">{item.organization}</span>
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skill.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/70 transition-colors duration-200 hover:border-white/25 hover:bg-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "evidence" && hasEvidence && (
                <div className="flex flex-col gap-3">
                  <p className={`text-xs font-medium ${accent.text}`}>Evidence</p>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5">
                    {evidenceEntries.map(([key, s], idx) => (

                      <div
                        key={key}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                          currentEvidence === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          // FIX: `scale-200` isn't a real Tailwind utility
                          // (max default is scale-150); this uses a valid one.
                          className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-x-4 bottom-3 z-20">
                          <h4 className="mb-1 text-sm font-bold uppercase leading-tight tracking-tight text-white">
                            {s.title}
                          </h4>
                          <p className="line-clamp-2 text-xs text-white/70">{s.desc}</p>
                        </div>
                      </div>
                    ))}

                    {evidenceEntries.length > 1 && (
                      <div className="absolute bottom-2 right-3 z-20 flex gap-1">
                        {evidenceEntries.map((_, idx) => (
                          <span
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              currentEvidence === idx ? "w-3 bg-white" : "w-1 bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {slide.id === "documentation" && (
                <div className="flex h-full flex-col items-start justify-center gap-3 py-4">
                  <p className="text-xs leading-relaxed text-white/60">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:text-white group-hover/card:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 z-30 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:text-white group-hover/card:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-4 flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={(e) => goToSlide(e, i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}