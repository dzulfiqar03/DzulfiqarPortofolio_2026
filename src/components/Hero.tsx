import { useCallback, useEffect, useRef, useState } from 'react';
import MyProfile from '../assets/my-profile2.png';

interface HeroProps {
    project: [],
}

const NAME = 'Muhammad Dzulfiqar';


export default function Hero({
    project = [],
}: HeroProps) {

    const targetDate = new Date('2003-08-23');
    const now = new Date();
    const differenceInTime = now.getTime() - targetDate.getTime();
    const age = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 365));
    const prjLength = project.length;
    const elementNameRef = useRef<HTMLSpanElement>(null);
    const elementAgeRef = useRef<HTMLSpanElement>(null);
    const elementProjectRef = useRef<HTMLSpanElement>(null);


    useEffect(() => {
        const target = elementNameRef.current;
        if (!target) return;

        const targetAge = elementAgeRef.current;
        if (!targetAge) return;

        const targetProject = elementProjectRef.current;
        if (!targetProject) return;

        let typingInterval: ReturnType<typeof setInterval> | null = null;

        const startTyping = () => {
            if (typingInterval) clearInterval(typingInterval);

            let i = 0;
            let projectCount = 0;
            let ageCount = 0;
            target.textContent = "";
            targetAge.textContent = "";
            targetProject.textContent = "";
            typingInterval = setInterval(() => {
                if (!typingInterval) return;
                if (i <= NAME.length) {
                    target.textContent = NAME.slice(0, i);
                    i++;
                }

                if (ageCount <= age) {
                    targetAge.textContent = ageCount.toString();
                    ageCount++;
                }

                if (projectCount <= prjLength) {
                    targetProject.textContent = projectCount.toString();
                    projectCount++;
                }

                if (i > NAME.length && ageCount > age && projectCount >= prjLength) {
                    clearInterval(typingInterval);
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
                        targetAge.textContent = "";
                        targetProject.textContent = "";
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



    interface TermEntry {
        id: number;
        kind: "prompt" | "out" | "progress";
        text?: string;
        html?: string;
        cls?: string;
        typed?: string; // for prompt: the command text typed so far
        fullCmd?: string; // for prompt: full command to type
        showCaret?: boolean;
        progressPct?: number;
    }


    function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let entryId = 0;
    const nextId = (): number => ++entryId;

    const [terminal, setTerminal] = useState<TermEntry[]>([]);
    const [running, setRunning] = useState<boolean>(false);
    const reduceMotionRef = useRef<boolean>(false);
    const termRef = useRef<HTMLDivElement>(null);
    const cancelledRef = useRef<boolean>(false);

    const [isProfile, setIsProfile] = useState<string>('hidden');

    const [isTerminal, setIsTerminal] = useState<string>('gwd-page block');

    const typeCommand = useCallback(
        async (id: number, fullCmd: string, entries: TermEntry[]): Promise<void> => {
            const reduceMotion = reduceMotionRef.current;
            const update = (typed: string, showCaret: boolean) => {
                setTerminal((prev) =>
                    prev.map((e) => (e.id === id ? { ...e, typed, showCaret } : e))
                );
            };

            if (reduceMotion) {
                update(fullCmd, false);
                return;
            }

            let acc = "";
            for (let i = 0; i < fullCmd.length; i++) {
                if (cancelledRef.current) return;
                acc += fullCmd[i];
                update(acc, true);
                await sleep(2 + Math.random() * 15);
            }
            await sleep(200);
            update(acc, false);
        },
        []
    );

    const animateProgress = useCallback(async (id: number): Promise<void> => {
        const reduceMotion = reduceMotionRef.current;
        const setPct = (pct: number) => {
            setTerminal((prev) =>
                prev.map((e) => (e.id === id ? { ...e, progressPct: pct } : e))
            );
        };

        if (reduceMotion) {
            setPct(100);
            return;
        }

        for (let p = 0; p <= 100; p += 8) {
            if (cancelledRef.current) return;
            setPct(Math.min(p, 100));
            await sleep(45);
        }
        setPct(100);
    }, []);

    const runTerminal = useCallback(async (): Promise<void> => {
        const reduceMotion = reduceMotionRef.current;
        setTerminal([]);

        const push = (entry: TermEntry) =>
            setTerminal((prev) => [...prev, entry]);

        // git add .
        const addId = nextId();
        push({ id: addId, kind: "prompt", typed: "", showCaret: true });
        await typeCommand(addId, "git add .", []);
        await sleep(reduceMotion ? 0 : 260);
        push({ id: nextId(), kind: "out", html: "&nbsp;" });

        // git commit
        const commitId = nextId();
        push({ id: commitId, kind: "prompt", typed: "", showCaret: true });
        await typeCommand(
            commitId,
            'git commit -m "Dzulfiqar Portofolio 2026"',
            []
        );
        await sleep(reduceMotion ? 0 : 300);
        push({
            id: nextId(),
            kind: "out",
            text: "[main 4f0a91c] feat: Dzulfiqar Portofolio 2026",
        });
        push({
            id: nextId(),
            kind: "out",
            html: "&nbsp;2 files changed, 14 insertions(+), 2 deletions(-)",
            cls: "added",
        });
        push({ id: nextId(), kind: "out", html: "&nbsp;" });

        // git push
        const pushId = nextId();
        push({ id: pushId, kind: "prompt", typed: "", showCaret: true });
        await typeCommand(pushId, "git push origin main", []);
        await sleep(reduceMotion ? 0 : 260);

        const progressId = nextId();
        push({ id: progressId, kind: "progress", progressPct: 0 });
        await animateProgress(progressId);
        await sleep(reduceMotion ? 0 : 200);

        push({
            id: nextId(),
            kind: "out",
            text: "Writing objects: 100%, 1.8 KiB | 1.8 MiB/s, done.",
        });
        push({ id: nextId(), kind: "out", text: "To github.com:dzulfiqar03/DzulfiqarPortofolio_2026.git" });
        push({
            id: nextId(),
            kind: "out",
            html: "&nbsp;&nbsp;a92c1de..4f0a91c&nbsp;&nbsp;main -&gt; main",
            cls: "ok",
        });

        push({ id: nextId(), kind: "prompt", typed: "", showCaret: false });
    }, [typeCommand, animateProgress]);

    const playAll = useCallback(async (): Promise<void> => {
        if (running) return;
        cancelledRef.current = false;

        await sleep(reduceMotionRef.current ? 0 : 250);
        await runTerminal();

        setRunning(false);
        await sleep(30);

        setIsTerminal('opacity-0 pointer-events-none duration-500 ease-in-out');
        await sleep(500);
        setIsTerminal('hidden');

        setIsProfile('block opacity-0 translate-y-2');
        await sleep(20);
        setIsProfile('block opacity-100 translate-y-0 transition-all duration-500 ease-in-out');
    }, [running, runTerminal]);

   const containerRef = useRef<HTMLDivElement>(null);
const hasPlayedRef = useRef<boolean>(false);

useEffect(() => {
  const node = containerRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasPlayedRef.current) {
        hasPlayedRef.current = true;
        void playAll();
        observer.disconnect(); // cukup sekali saja
      }
    },
    { threshold: 0.3 } // trigger saat 30% elemen kelihatan
  );

  observer.observe(node);

  return () => {
    observer.disconnect();
    cancelledRef.current = true;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
    return (
        <>

            <section className="bg-base-200 rounded-lg fadeInUp-animation">
                <div className="max-w-6xl mx-auto px-6 py-16 lg:py-30">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">

                        <div className="flex flex-col gap-y-8 order-2 lg:order-1">
                            <div className="flex flex-col gap-y-4">
                                <p className="text-primary text-sm font-medium tracking-wide">Software Engineer · Data Analyst</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold primary-content leading-[1.1]">
                                    Hi, I'm <span id="myText" className="text-primary font-black" ref={elementNameRef}></span>
                                </h1>
                                <p className="primary-content/80 text-lg leading-relaxed text-justify">
                                    Fresh Graduate of Information Systems student at Telkom University Surabaya (GPA 3.88/4.00) with 1.5+ years of hands-on web
                                    development experience across Laravel, Next.js, and Vue.js internships. Independently designed, built, and deployed a full-stack Progressive
                                    Web App from requirements through production and Build a Project with Flutter Mobile Programming. Combines front-end and back-end
                                    development skills with a data-analysis background, translating business requirements into functional, user-tested web applications.
                                </p>
                            </div>

                            <div className="flex items-center divide-x divide-base-300 border-y border-base-300 py-5">
                                <div className="flex flex-col pr-6">
                                    <span id="myProject" className="text-2xl font-semibold primary-content" ref={elementProjectRef}></span>
                                    <span className="text-sm text-base-content/60">Projects</span>
                                </div>
                                <div className="flex flex-col px-6">
                                    <span className="text-2xl font-semibold primary-content">Programming</span>
                                    <span className="text-sm text-base-content/60">Top skill</span>
                                </div>
                                <div className="flex flex-col pl-6">
                                    <span id="myAge" className="text-2xl font-semibold primary-content" ref={elementAgeRef}></span>
                                    <span className="text-sm text-base-content/60">Years old</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <a className="btn btn-primary" target="_blank" rel="noopener noreferrer"
                                    href="https://drive.google.com/file/d/1DLij7y01-1AnNNnbsH52OLNPo0zf2l1I/view?usp=sharing">
                                    Download resume
                                </a>

                                <div className="flex items-center gap-4">
                                    <a href="https://github.com/dzulfiqar03" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                        className="text-primary/70 hover:text-primary transition-colors">
                                        <i className="fa-brands fa-github fa-lg"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/muhammaddzulfiqar-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                        className="text-primary/70 hover:text-primary transition-colors">
                                        <i className="fa-brands fa-linkedin fa-lg"></i>
                                    </a>
                                    <a href="https://wa.me/6283832020245" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                                        className="text-primary/70 hover:text-primary transition-colors">
                                        <i className="fa-brands fa-whatsapp fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="order-1 mt-8 lg:order-2 flex justify-center lg:justify-end">
                            <div className="group relative w-56 sm:w-72 lg:w-80">
                                <div className={`absolute -inset-3 rounded-[2rem] bg-primary/10 rotate-6 transition-transform group-hover:-rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-3`}></div>

                                <div id="images" 
                                    className="group relative  rounded-[2rem] bg-gradient-to-br from-indigo-800 to-purple-900 overflow-hidden ring-1 ring-base-300 shadow-xl cursor-pointer">

                                    <div ref={containerRef}  className={`   px-7 bg-base-200 ${isTerminal}`}>
                                        <style>{CSS}</style>

   

                                        <div className="window">
      

                                            <div className="body-row">
         

                                                <div className="main-col">
      

                                                    <div className="terminal py-7 lg:h-[550px] h-[400px]" ref={termRef}>

                                                        <div>
                                                            {terminal.map((entry) => {
                                                                if (entry.kind === "prompt") {
                                                                    return (
                                                                        <div className="term-line" key={entry.id}>
                                                                            <span className="prompt-path">dzulfiqar</span>{" "}
                                                                            <span className="prompt-branch">(main)</span>{" "}
                                                                            <span className="prompt-sym">&#10095;</span>{" "}
                                                                            <span>{entry.typed}</span>
                                                                            {entry.showCaret && <span className="caret" />}
                                                                        </div>
                                                                    );
                                                                }
                                                                if (entry.kind === "progress") {
                                                                    return (
                                                                        <div className="term-line term-out info" key={entry.id}>
                                                                            Compressing objects: 100%{" "}
                                                                            <span className="bar-track">
                                                                                <span
                                                                                    className="bar-fill"
                                                                                    style={{ width: `${entry.progressPct ?? 0}%` }}
                                                                                />
                                                                            </span>{" "}
                                                                            <span>{entry.progressPct ?? 0}%</span>
                                                                        </div>
                                                                    );
                                                                }
                                                                if (entry.html) {
                                                                    return (
                                                                        <div
                                                                            className={`term-line term-out${entry.cls ? " " + entry.cls : ""}`}
                                                                            key={entry.id}
                                                                            dangerouslySetInnerHTML={{ __html: entry.html }}
                                                                        />
                                                                    );
                                                                }
                                                                return (
                                                                    <div
                                                                        className={`term-line term-out${entry.cls ? " " + entry.cls : ""}`}
                                                                        key={entry.id}
                                                                    >
                                                                        {entry.text}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <img className={`w-full h-full  object-cover transition-transform duration-500 ease-in-out hover:scale-105 ${isProfile}`}
                                        src={MyProfile} alt="Muhammad Dzulfiqar" />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

const CSS = `
  .gwd-page {

    --text-primary: #cdd0e90;
    --text-dim: #6b6e85;
    --accent-mint: #7ee6b8;
    --accent-blue: #7aa6f0;
    --accent-amber: #f0c674;
    --syntax-keyword: #b48ce6;
    --syntax-string: #7ee6b8;
    --syntax-func: #7aa6f0;
    --syntax-comment: #52546b;
    --syntax-punct: #8b8ea3;
    --page-label: #6b6e85;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--text-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @keyframes gwd-blink { 50% { opacity: 0; } }
  .terminal {  font-family: 'JetBrains Mono', monospace; font-size: clamp(11.5px, 1.8vw, 13px); line-height: 1.75;   overflow: auto; }
  .term-bar { display: flex; align-items: center; gap: 8px; color: var(--text-dim); font-size: 11px; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px dashed var(--border-subtle); }
  .term-bar .chip { background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 2px 8px; border-radius: 5px; }
  .term-line { white-space: pre-wrap; word-break: break-word; }
  .prompt-path { color: var(--accent-blue); } .prompt-branch { color: var(--accent-amber); } .prompt-sym { color: var(--accent-mint); }
  .term-out { color: var(--text-dim); } .term-out.added { color: var(--accent-mint); } .term-out.info { color: var(--accent-blue); } .term-out.ok { color: var(--accent-mint); }
  .bar-track { display: inline-block; width: 160px; height: 6px; background: var(--border-subtle); border-radius: 3px; overflow: hidden; vertical-align: middle; margin: 0 6px; }
  .bar-fill { height: 100%; background: var(--accent-mint); transition: width 0.12s linear; }
  .footer-note { width: 100%; max-width: 920px; margin-top: 14px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--page-label); opacity: 0.7; text-align: center; }
`;