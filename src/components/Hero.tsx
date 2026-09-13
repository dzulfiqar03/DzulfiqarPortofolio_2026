import { useEffect } from 'react';
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

    useEffect(() => {

        const elementName = document.getElementById('myText');
        const elementAge = document.getElementById('myAge');
        const elementProject = document.getElementById('myProject');
        if (!elementName || !elementAge || !elementProject) return;

        elementName.textContent = '';
        elementAge.textContent = '';
        elementProject.textContent = '';
        let i = 0;
        let projectCount = 0;
        const interval = setInterval(() => {
            i++;
            if (projectCount < prjLength) projectCount++;
            elementName.textContent = NAME.slice(0, i);
            elementAge.textContent = i.toString();
            elementProject.textContent = prjLength.toString();

            if (i >= NAME.length && i >= age && projectCount >= prjLength) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [NAME, age, prjLength]);

    return (
        <>

            <section className="bg-base-200 rounded-lg fadeInUp-animation">
                <div className="max-w-6xl mx-auto px-6 py-16 lg:py-30">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">

                        <div className="flex flex-col gap-y-8 order-2 lg:order-1">
                            <div className="flex flex-col gap-y-4">
                                <p className="text-primary text-sm font-medium tracking-wide">Software Engineer · Data Analyst</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold primary-content leading-[1.1]">
                                    Hi, I'm <span id="myText" className="text-primary" aria-label={NAME}></span>
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
                                    <span id="myProject" className="text-2xl font-semibold primary-content">{project.length}</span>
                                    <span className="text-sm text-base-content/60">Projects</span>
                                </div>
                                <div className="flex flex-col px-6">
                                    <span className="text-2xl font-semibold primary-content">Programming</span>
                                    <span className="text-sm text-base-content/60">Top skill</span>
                                </div>
                                <div className="flex flex-col pl-6">
                                    <span id="myAge" className="text-2xl font-semibold primary-content">{age}</span>
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
                                <div className="absolute -inset-3 rounded-[2rem] bg-primary/10 rotate-6 transition-transform group-hover:-rotate-6 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>
                                <div id="images"
                                    className="group relative rounded-[2rem] bg-indigo-800 overflow-hidden ring-1 ring-base-300 shadow-xl cursor-pointer">
                                    <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
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