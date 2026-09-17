import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const navbar = [
    {
        title: 'Home',
        link: '#hero'
    },
    {
        title: 'Project',
        link: '#projects'
    },
    {
        title: 'Experience',
        link: '#experience'
    },
    {
        title: 'Contacts',
        link: '#footer'
    }

]


export default function Navbar() {

    const [isDark, setIsDark] = useState(false)

    const [isActive, setIsActive] = useState<string>('Home')

    useEffect(() => {
        const currentTheme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        document.documentElement.classList.add('transition-colors');
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, [isDark]);
    return (
        <>
            <div className="w-full bg-slate-900/80 backdrop-blur-md border-b z-[100] fixed top-0 border-white/10 shadow-lg shadow-black/20">
                <div className="navbar max-w-6xl mx-auto px-6    transition-colors duration-300">
                    <div className="flex-1">
                        <a href="/" className="btn btn-ghost normal-case m-0 px-0 text-xl font-semibold tracking-tight text-white hover:bg-transparent">
                            Muhammad <span className="text-indigo-400">Dzulfiqar</span>
                        </a>
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal hidden lg:flex items-center gap-1 px-1">

                            <div className="flex flex-wrap gap-2 bg-gray-100 rounded-full ">


                                {navbar.map((nav) => (
                                    <a
                                        key={nav.title}
                                        onClick={() => setIsActive(nav.title)}
                                        href={nav.link}
                                        className={`relative px-3 py-1 text-sm font-medium  transition-colors ${isActive === nav.title ? "text-white font-bold" : "text-black/40 hover:text-black/70"
                                            }`}
                                    >

                                        {nav.title}
                                        {isActive === nav.title && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -left-1 right-0 top-0 z-0 h-full px-3 py-1 bg-indigo-600 rounded-full"
                                                initial={false}
                                                animate={{ translateX: [1, 1.3, 1] }}
                                                transition={{
                                                    layout: { type: "spring", stiffness: 500, damping: 30 },
                                                    scaleX: { duration: 0.35, times: [0, 0.4, 1], ease: "easeInOut" },
                                                }}
                                            >
                                                {nav.title}
                                            </motion.div>
                                        )}
                                    </a>
                                ))}
                            </div>


                            <li>
                                <button
                                    onClick={() => setIsDark(!isDark)}
                                    aria-label="Toggle dark mode"
                                    aria-pressed={isDark}
                                    className={`relative ml-3 inline-flex h-10 w-20 items-center rounded-full transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isDark
                                        ? "bg-slate-700 focus-visible:ring-slate-400 focus-visible:ring-offset-slate-900"
                                        : "bg-amber-200 focus-visible:ring-amber-400 focus-visible:ring-offset-slate-100"
                                        }`}
                                >
                                    <span
                                        className={`inline-flex h-8 w-8 transform items-center justify-center rounded-full shadow-md transition-transform duration-500 ease-in-out ${isDark ? "translate-x-8 bg-slate-900" : "-translate-x-1 bg-white"
                                            }`}
                                    >
                                        {isDark ? (
                                            <Moon className="h-4 w-4 text-slate-200" strokeWidth={2} />
                                        ) : (
                                            <Sun className="h-4 w-4 text-amber-500" strokeWidth={2} />
                                        )}
                                    </span>
                                </button>
                            </li>
                        </ul>

                        <div className="dropdown dropdown-end lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white hover:bg-white/5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] w-52 gap-1 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-3 shadow-xl">
                                <li><a href="#projects" className="rounded-lg text-slate-200 hover:bg-white/5">Project</a></li>
                                <li><a href="#experience" className="rounded-lg text-slate-200 hover:bg-white/5">Experience</a></li>
                                <li><a href="#footer" className="rounded-lg bg-indigo-500 text-white hover:bg-indigo-400">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <style>{`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }
`}</style>


        </>
    )
}