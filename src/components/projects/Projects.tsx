import Hero from "../Hero";
import CardProject from "./CardProject";
import { ProjectsList } from "../../resources/ProjectsList"
import OtherSection from "../OtherSections";
export default function Projects() {

    return (
        <>
            <Hero project={ProjectsList as []} />
            <div id="projects" className="flex max-w-6xl mx-auto px-6 flex-col gap-4 fadeInUp-animation reveal mt-2">
                <div className="flex flex-row justify-between item-start w-full p-2">
                    <h2 className="text-lg lg:text-2xl font-bold primary-content">
                        Latest Project
                    </h2>
                </div>

                <div className="grid cursor-pointer grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-4 md:gap-10 lg:gap-4">
                    {ProjectsList.map((project) => <CardProject item={project} />)}
                </div>

                <OtherSection title="projects" message="Hai kak Dzul, saya ingin bertanya dan tertarik bekerja sama tentang projek anda, apakah berkenan?" />
            </div>
        </>
    )
}