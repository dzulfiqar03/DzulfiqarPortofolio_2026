import { useEffect, useMemo, useRef, useState } from "react";
import { categories } from "../resources/ToolsList"

export default function Tools() {
  useEffect(() => {
    const timers: number[] = [];
    const clickHandlers = new WeakMap<HTMLButtonElement, () => void>();

    document.querySelectorAll<HTMLElement>("#category-grid [data-ring], #icon-grid [data-ring]")
      .forEach((ring) => {
        const overall = Number(ring.dataset.overall ?? "0");
        const accent = ring.dataset.accent ?? "var(--steel)";
        const t = window.setTimeout(() => {
          ring.style.transition = "background 1.1s cubic-bezier(0.16,1,0.3,1)";
          ring.style.background = `conic-gradient(${accent} ${overall * 3.6}deg, var(--surface-2) 0deg)`;
        }, 80);
        timers.push(t);
      });

    const grid = document.getElementById("category-grid");
    const cards = grid ? Array.from(grid.querySelectorAll<HTMLElement>(".card-tools")) : [];

    cards.forEach((card) => {
      card.querySelectorAll<HTMLElement>("[data-fill]").forEach((bar) => {
        const t = window.setTimeout(() => {
          bar.style.width = `${bar.dataset.fill}%`;
        }, 80);
        timers.push(t);
      });

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

  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, accent: cat.accent, id: cat.id }))
  );

  const [selectedCtg, setselectedCtg] = useState<string | "all">("all");

  const sorted = useMemo(() => {
    const filtered =
      selectedCtg === "all"
        ? allSkills
        : allSkills.filter(
          (item) => item.id === selectedCtg
        );

    return filtered
  }, [selectedCtg]);



  const toolsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    toolsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sorted]);

  const elementNameRef = useRef<HTMLSpanElement>(null);
  const NAME = 'Tools'

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
      <section id="tools" className="   mx-auto px-6   pt-10">
        <div className="flex flex-col justify-between items-center gap-3 w-full  p-2">
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


          <div className="grid wrap pb-5  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  m-auto group w-max" id="category-grid">
            {categories.map((cat) => (
              <div onClick={() => setselectedCtg(cat.id)}
                key={cat.id}
                className="card-tools group   hover:-rotate-6 hover:-translate-x-3 hover:-translate-y-3  reveal"
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


              </div>
            ))}
          </div>

          <div className="flex transition-all  flex-wrap  px-6  gap-4 max-w-6xl m-auto" id="icon-grid">

            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-6 max-w-6xl m-auto pb-8" id="icon-grid">
              {sorted.map((c, i) => (
                <div
                  ref={(el) => { toolsRef.current[i] = el; }}
                  key={c.name}
                  className="group card-reveal relative flex flex-col items-center w-20"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 group-hover:-rotate-6">
                    <div
                      className="ring wrap " data-ring
                      data-overall={c.pct}
                      data-accent={c.accent}
                      style={{ "--accent": c.accent } as React.CSSProperties}
                    >
                      <div
                        className="h-8 w-8 bg-indigo-300 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                        style={{
                          WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${c.iconTitle}.svg)`,
                          maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${c.iconTitle}.svg)`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-center primary-content mt-2">{c.name}</h3>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-5   z-10 pointer-events-none">
                    <span className="text-lg font-black text-white py-0.5 rounded uppercase tracking-tighter">
                      {c.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>




          </div>
        </div>
      </section>


      <style>
        {`

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
        
        .ring img {
  filter: brightness(0.5) contrast(1.2);
  opacity: 0.85;
}

 .ring:hover img {
  filter: brightness(1) contrast(1);
  opacity: 1.00;
}
        .wrap {
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
  }
  #icon-grid .ring {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.ring img {
  position: relative;
  z-index: 1;
  width: 26px;
  height: 26px;
  object-fit: contain;
}
  `}
      </style>
    </>
  );
}
