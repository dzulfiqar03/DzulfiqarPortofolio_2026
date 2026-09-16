import { ChevronDown } from "lucide-react";
import FooterItem from "./FooterItem";
import { categories } from "../resources/ToolsList"




const Contact = [
  {
    iconTitle: 'gmail',
    link: 'mailto:muhammaddzulfiqar03@gmail.com'
  },
   {
    iconTitle: 'whatsapp',
    link: '`https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama dengan anda?")}`'
  },
   {
    iconTitle: 'linkedin',
    link: 'https://www.linkedin.com/in/muhammaddzulfiqar-'
  },
   {
    iconTitle: 'github',
    link: 'https://github.com/dzulfiqar03/'
  },

]

export default function Footer() {
  const loop = [...categories, ...categories]
    return (
        <>
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
        <div className="w-9 h-9 rounded-full border border-indigo-300 flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-indigo-400" />
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
          {Contact.map((c) => (
            <a
              key={c.iconTitle}
              href={c.link}
              className="flex items-center  gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-6 py-3 text-slate-800 font-semibold text-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
               <div
                        className="h-5 w-8 bg-black opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
              <div className="capitalize">{c.iconTitle}</div>
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
          
          <div className="marquee-track flex w-max  px-8">
            {loop.map((cat) => (
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-6 max-w-6xl m-auto pb-8" id="icon-grid">
                 {cat.skills.map((c, i) => (
              <div
                key={`${c.iconTitle}-${i}`}
                title={c.name}
                className="flex items-center justify-center text-slate-300 hover:text-slate-400 transition"
              >
               <div
                        className="h-7 w-9 bg-gray-300 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
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
              
            ))}
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </footer>
     
        </>
    )
}