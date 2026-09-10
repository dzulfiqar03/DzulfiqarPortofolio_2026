
interface CardProps {
    item: {
        id: number,
        title: string,
        start_periode: string,
        end_periode: string,
        type: string,
        summary: string,

    }
}
export default function CardProject({ item }: CardProps) {
    const formatDate = (value: string) =>
        new Date(value).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return (
        <>
            <a className="w-full reveal sm:max-h-24 lg:max-h-none" href={`/projects/${item.id}`}>
                <div className="card h-full bg-gray-800 shadow-xl image-full hover:cursor-pointer fadeInUp-animation">
                    <figure>
                        <img className="w-full" />
                    </figure>
                    <div className="card-body rounded-lg flex flex-col justify-between p-4 lg:p-6">
                        <h2 className="card-title text-md line-clamp-2 lg:text-lg text-primary-content select-all flex-1">
                            {item.title}
                        </h2>
                        <div
                            className="flex flex-row w-full gap-4 text-primary-content items-end lg:items-start justify-center flex-none lg:flex-1">
                            <p className="badge badge-primary p-4 truncate text-center text-xs w-[50%]">{formatDate(item.start_periode)}-{formatDate(item.end_periode)}</p>
                            <p className="badge p-4 truncate text-center text-xs w-[50%]">{item.type.replaceAll('_', ' ')}</p>

                        </div>
                        <p className="text-xs text-start lg:text-justify select-all flex-none md:hidden line-clamp-1 lg:line-clamp-3">
                            {item.summary}
                        </p>
                    </div>

                </div>
            </a>
        </>
    )
}