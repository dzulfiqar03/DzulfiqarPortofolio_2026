import { Mail, ChevronDown, type LucideProps } from "lucide-react";
import type { SVGProps, FC } from "react";

const Instagram: FC<LucideProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const Linkedin: FC<LucideProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 9v9M6 6v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const Github: FC<LucideProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 22v-3.2c0-.9-.3-1.5-.8-2 2.7-.3 5.5-1.3 5.5-5.9 0-1.3-.5-2.4-1.2-3.2.1-.3.5-1.6-.1-3.2 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C6.8 4.2 5.8 4.5 5.8 4.5c-.6 1.6-.2 2.9-.1 3.2-.8.8-1.2 1.9-1.2 3.2 0 4.6 2.8 5.6 5.5 5.9-.4.4-.8 1-.8 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- Simple monochrome tech-stack marks ---------- */

type IconProps = SVGProps<SVGSVGElement>;

const Laravel: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 4.5 12 2l8 2.5v6.2c0 5.1-3.4 8.6-8 11.3-4.6-2.7-8-6.2-8-11.3V4.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M8.5 9.5 12 7.5l3.5 2v4L12 15.5l-3.5-2v-4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

const WordPress: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M4.5 9.2 8.7 18l1.9-5.3-1-2.9m8.9-.6-2.6 8.4M13.4 9l1.4 3.9M6.3 6.9c1.6-1.6 3.6-2.4 5.7-2.4a8 8 0 0 1 4.9 1.7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoogleG: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.5 12.3c0-.7-.06-1.4-.18-2H12v3.9h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.6-3.9 2.6-6.8Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M12 21c2.4 0 4.5-.8 6-2.1l-2.9-2.2c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.7H3.9v2.3A9 9 0 0 0 12 21Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path d="M6.9 13.9a5.4 5.4 0 0 1 0-3.8V7.8H3.9a9 9 0 0 0 0 8.4l3-2.3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path
      d="M12 6.5c1.3 0 2.5.45 3.4 1.35l2.6-2.6A9 9 0 0 0 3.9 7.8l3 2.3C7.6 8 9.6 6.5 12 6.5Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const Html5: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 3h16l-1.4 16L12 21l-6.6-2L4 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M7 7h10l-.35 4H8.6l.2 2.2h6.4l-.45 4.5L12 18.4l-3.7-1.1-.25-2.5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const Css3: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 3h16l-1.4 16L12 21l-6.6-2L4 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M17 7H7l.3 3.3h9l-.3 3.4-4 1.3-4-1.3-.15-1.9" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const Dolphin: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 15c2.8-1 4.6-3.4 7.4-4.8 3-1.5 6.6-2 9.3-.6-1.1.4-2 1-2.5 1.8 1 .1 2 .5 2.8 1.2-1.3.3-2.3.1-3.2-.4-.7 1.7-2.4 3-4.6 3.6-2.7.7-5.6.2-7.9-1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16.3" cy="10.6" r="0.5" fill="currentColor" />
  </svg>
);

const Figma: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 3h4a2.5 2.5 0 0 1 0 5H9V3Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M9 8h3.5a2.5 2.5 0 0 1 0 5H9V8Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M9 13h2.5a2.5 2.5 0 1 1 0 5H9v-5Z" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="6.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const VsCode: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="m16 3 5 2.3v13.4L16 21l-8.5-7.6L4 16v-8l3.5 2.6L16 3Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const Wand: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20 15 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M16 3v3M20 7h3M19 4l-2 2M20.5 10.5 19 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M12.5 9.5 15 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

type TechItem = { icon: FC<IconProps>; label: string };
type ContactItem = { icon: FC<LucideProps>; label: string; href: string };

const techStack: TechItem[] = [
  { icon: Laravel, label: "Laravel" },
  { icon: WordPress, label: "WordPress" },
  { icon: GoogleG, label: "Google" },
  { icon: Html5, label: "HTML5" },
  { icon: Css3, label: "CSS3" },
  { icon: Dolphin, label: "MySQL" },
  { icon: Figma, label: "Figma" },
  { icon: VsCode, label: "VS Code" },
  { icon: Wand, label: "Design" },
];

const contacts: ContactItem[] = [
  { icon: Mail, label: "Email", href: "mailto:muhammaddzulfiqar03@gmail.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/muhammad_dzulfiqar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammaddzulfiqar-" },
  { icon: Github, label: "GitHub", href: "https://github.com/dzulfiqar03/" },
];

export default function Footer() {
  const loop = [...techStack, ...techStack];

  return (
    <footer className="relative bg-base-200 py-20 px-6 overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 22s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      {/* top chevron badge */}
      <div className="flex justify-center mb-10">
        <div className="w-9 h-9 rounded-full border border-sky-300 flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-900 bg-clip-text text-transparent">
            Collaborate
          </span>
        </h2>

        <p className="mt-5 text-slate-500 text-lg">
          Tertarik untuk membangun sistem administrasi web yang efisien? Hubungi saya sekarang.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-6 py-3 text-slate-800 font-semibold text-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* tech stack marquee */}
      <div className="relative mt-20 max-w-4xl mx-auto">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-16 px-8">
            {loop.map(({ icon: Icon, label }, i) => (
              <div
                key={`${label}-${i}`}
                title={label}
                className="flex items-center justify-center text-slate-300 hover:text-slate-400 transition"
              >
                <Icon className="w-9 h-9" strokeWidth={1.3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}