import { useEffect } from "react";

interface Skill {
    name: string;
    pct: number;
}

interface Category {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    overall: number;
    icon: string;
    skills: Skill[];
}

const categories: Category[] = [
    {
        id: "programming",
        title: "Programming",
        tagline: "Front-end & back-end",
        accent: "var(--steel)",
        overall: 82,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        skills: [
            { name: "HTML & CSS", pct: 90 },
            { name: "JavaScript", pct: 80 },
            { name: "Tailwind CSS", pct: 88 },
            { name: "Bootstrap", pct: 85 },
            { name: "PHP", pct: 65 },
            { name: "MySQL & SQL Server", pct: 70 },
        ],
    },
    {
        id: "design",
        title: "Desain",
        tagline: "UI, brand & ilustrasi",
        accent: "var(--amber)",
        overall: 87,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
        skills: [
            { name: "Figma", pct: 90 },
            { name: "Canva", pct: 95 },
            { name: "Adobe Illustrator", pct: 75 },
        ],
    },
    {
        id: "office",
        title: "Office",
        tagline: "Dokumen & presentasi",
        accent: "var(--sage)",
        overall: 78,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>',
        skills: [
            { name: "Microsoft Word", pct: 95 },
            { name: "Microsoft Excel", pct: 85 },
            { name: "Microsoft PowerPoint", pct: 80 },
            { name: "GitHub", pct: 82 },
        ],
    },
];

export default function Tools() {
    // Semua manipulasi DOM harus jalan SETELAH React commit ke DOM,
    // jadi ini wajib di dalam useEffect, bukan di badan komponen.
    useEffect(() => {
        const grid = document.getElementById("category-grid");
        if (!grid) return;

        const cards = Array.from(grid.querySelectorAll<HTMLElement>(".card-tools"));
        const timers: number[] = [];
        const clickHandlers = new WeakMap<HTMLButtonElement, () => void>();

        cards.forEach((card) => {
            // animate ring in on load
            const ring = card.querySelector<HTMLElement>("[data-ring]");
            if (ring) {
                const overall = Number(ring.dataset.overall ?? "0");
                const accent = ring.dataset.accent ?? "var(--steel)";
                const t = window.setTimeout(() => {
                    ring.style.transition = "background 1.1s cubic-bezier(0.16,1,0.3,1)";
                    ring.style.background = `conic-gradient(${accent} ${overall * 3.6}deg, var(--surface-2) 0deg)`;
                }, 80);
                timers.push(t);
            }

            // animate each skill bar in on load
            card.querySelectorAll<HTMLElement>("[data-fill]").forEach((bar) => {
                const t = window.setTimeout(() => {
                    bar.style.width = `${bar.dataset.fill}%`;
                }, 80);
                timers.push(t);
            });

            // accordion: toggle this card open/closed, close the others
            const btn = card.querySelector<HTMLButtonElement>(".card-head");
            if (btn) {
                const onClick = () => {
                    const isOpen = card.getAttribute("data-open") === "true";
                    cards.forEach((c) => {
                        c.setAttribute("data-open", "false");
                        c.querySelector(".card-head")?.setAttribute("aria-expanded", "false");
                    });
                    if (!isOpen) {
                        card.setAttribute("data-open", "true");
                        btn.setAttribute("aria-expanded", "true");
                    }
                };
                btn.addEventListener("click", onClick);
                // stash for cleanup
                clickHandlers.set(btn, onClick);
            }
        });

        return () => {
            timers.forEach((t) => window.clearTimeout(t));
            cards.forEach((card) => {
                const btn = card.querySelector<HTMLButtonElement>(".card-head");
                const handler = btn ? clickHandlers.get(btn) : undefined;
                if (btn && handler) btn.removeEventListener("click", handler);
            });
        };
    }, []);

    return (
        <>
            <section id="tools" className="wrap  mx-auto px-6   py-10">
                <div className="flex max-w-6xl mx-auto px-6  flex-row justify-between items-start w-full p-2">
                    <h2 className="text-lg lg:text-2xl font-bold text-black">
                        Tools
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  m-auto group w-max" id="category-grid">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="card-tools group  hover:-rotate-6 hover:-translate-x-3 hover:-translate-y-3  reveal"
                            data-open="true"
                            style={{ "--accent": cat.accent } as React.CSSProperties}
                        >
                            <button className="card-head" aria-expanded="true">
                                <div
                                    className="ring"
                                    data-ring
                                    data-overall={cat.overall}
                                    data-accent={cat.accent}
                                >
                                    <span className="ring-val">{cat.overall}%</span>
                                </div>
                                <div className="card-title">
                                    <h3>
                                        <span
                                            className="icon"
                                            dangerouslySetInnerHTML={{ __html: cat.icon }}
                                        />
                                        {cat.title}
                                    </h3>

                                </div>
                            </button>

                            <div className="panel">
                                <div className="panel-inner">
                                    <div className="skill-list">
                                        {cat.skills.map((s) => (
                                            <div className="skill-row" key={s.name}>
                                                <div className="top">
                                                    <span className="name">{s.name}</span>
                                                    <span className="pct">{s.pct}%</span>
                                                </div>
                                                <div className="bar-track">
                                                    <div className="bar-fill" data-fill={s.pct} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </section>

            <style>
                {`  .wrap {
    --bg: #14161c;
    --surface: #1b1e26;
    --surface-2: #21242e;
    --border: #2c303c;
    --text: #eceef3;
    --text-muted: #8b93a6;
    --steel: #6fa8d8;
    --amber: #e3ab48;
    --sage: #74bd93;
    --radius: 18px;

    color: var(--text);
    font-family: "Inter", sans-serif;

    margin: 0 auto;
  }

  .eyebrow-line {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
  .eyebrow-line .dash {
    width: 28px;
    height: 2px;
    background: var(--amber);
  }
  .eyebrow-line span {
    font-size: 13px;
    color: var(--text-muted);
    letter-spacing: 0.02em;
  }

  .head p {
    color: var(--text-muted);
    font-size: 15.5px;
    line-height: 1.65;
    margin: 0;
    max-width: 52ch;
  }

  .card-tools {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .card-tools[data-open="true"] {
    border-color: var(--accent, var(--border));
  }

  .card-head {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 26px 22px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    color: inherit;
    font-family: inherit;
  }

  .ring {
    position: relative;
    width: 74px;
    height: 74px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: conic-gradient(
      var(--accent, var(--steel)) 0deg,
      var(--surface-2) 0deg
    );
  }
  .ring::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: var(--surface);
  }
  .ring-val {
    position: relative;
    z-index: 1;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .card-title {
    flex: 1;
    min-width: 0;
  }
  .card-title h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-title p {
    margin: 0;
    color: var(--text-muted);
    font-size: 13.5px;
  }

  .chevron {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--text-muted);
    transition: transform 0.3s ease;
  }
  .card-tools[data-open="true"] .chevron {
    transform: rotate(180deg);
    color: var(--accent, var(--text-muted));
  }

  .panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.35s ease;
  }
  .card-tools[data-open="true"] .panel {
    grid-template-rows: 1fr;
  }
  .panel-inner {
    overflow: hidden;
  }

  .skill-list {
    padding: 22px 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 1px solid var(--border);
  }

  .skill-row {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .skill-row .top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 13.5px;
  }
  .skill-row .top .name {
    color: var(--text);
  }
  .skill-row .top .pct {
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
  }

  .bar-track {
    height: 6px;
    border-radius: 4px;
    background: var(--surface-2);
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    width: 0%;
    border-radius: 4px;
    background: var(--accent, var(--steel));
    transition: width 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .icon {
    width: 22px;
    height: 22px;
    color: var(--accent, var(--steel));
    flex-shrink: 0;
    display: inline-flex;
  }
  .icon svg {
    width: 100%;
    height: 100%;
  }

  .foot-note {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    font-size: 13px;
  }
  .foot-note .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sage);
  }

  @media (prefers-reduced-motion: reduce) {
    .ring,
    .bar-fill,
    .panel,
    .chevron {
      transition: none !important;
    }
  }`}
            </style>
        </>
    );
}
