import Hero from "../Hero";
import CardProject from "./CardProject";
import OtherProject from "./OtherProject";

export default function Projects() {
    const projectsList = [
        {
            id: 0,
            title: "Portfolio Website",
            description:
                "A personal portfolio website built with Astro, showcasing my projects and skills.",
            image: "/assets/portfolio.png",
            link: "/projects/portfolio-website",
            start_periode: "2023-01-01",
            end_periode: "2023-03-01",
            summary: "ssmsm",
            type: "smsms"
        },
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "An e-commerce platform built with Astro, featuring product listings, shopping cart, and checkout functionality.",
            image: "/assets/ecommerce.png",
            link: "/projects/ecommerce-platform",
            start_periode: "2023-04-01",
            end_periode: "2023-06-01",
            summary: "ssmsm",
            type: "smsms"
        },
        {
            id: 2,
            title: "Blog Website",
            description:
                "A blog website built with Astro, allowing users to read and write articles on various topics.",
            image: "/assets/blog.png",
            link: "/projects/blog-website",
            start_periode: "2023-07-01",
            end_periode: "2023-09-01",
            summary: "ssmsm",
            type: "smsms"
        },
        {
            id: 3,
            title: "Weather App",
            description:
                "A weather application built with Astro, providing real-time weather information for different locations.",
            image: "/assets/weather.png",
            link: "/projects/weather-app",
            start_periode: "2023-10-01",
            end_periode: "2023-12-01",
            summary: "ssmsm",
            type: "smsms"
        },
    ];
    return (
        <>
            <Hero project={projectsList as []} />
            <div id="projects" className="flex max-w-6xl mx-auto px-6 flex-col gap-4 fadeInUp-animation reveal mt-2">
                <div className="flex flex-row justify-between item-start w-full p-2">
                    <h2 className="text-lg lg:text-2xl font-bold primary-content">
                        Latest Project
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-4 md:gap-10 lg:gap-4">
                    {projectsList.map((project) => <CardProject item={project} />)}
                </div>

                <OtherProject />
            </div>
        </>
    )
}