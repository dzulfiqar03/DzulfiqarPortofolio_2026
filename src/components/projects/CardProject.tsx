import { useEffect, useRef, useState } from "react";

interface CardProps {
    item: {
        id: number,
        title: string,
        start_periode: string,
        end_periode: string,
        type: string,
        summary: string,
        slidesProject: object,
        linkDoc: object
    }
}
export default function CardProject({ item }: CardProps) {
    const formatDate = (value: string) =>
        new Date(value).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    const [currentSlide, setCurrentSlide] = useState(0);
const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();


    useEffect(() => {
        if (Object.keys(!item.slidesProject).length) return;
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Object.keys(item.slidesProject).length);
        }, 6000);
        return () => clearInterval(slideInterval);
    }, [item.slidesProject]);
    return (
        <>
            <div  onClick={openDialog} className=" w-full group reveal sm:max-h-24 lg:max-h-none" >
                <div className="relative aspect-video w-full h-48 overflow-hidden rounded-t-lg">
                    {Object.entries(item.slidesProject).map(([key, s], idx) => (
                        <div
                            key={key}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${currentSlide % Object.keys(item.slidesProject).length === idx
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={s.image}
                                alt={s.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:opacity-100 opacity-0  transition-all duration-1000" />
                            <div className="absolute group-in-range:opacity-100 inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                        </div>
                    ))}
                    <div className=" group-hover:opacity-100 opacity-0 transition-all duration-1000 absolute top-13 md:top-21 left-3 md:left-7 right-6 md:right-10 z-20">
                        <div className="max-w-4xl">
                            <h2
                                className="text-lg font-black text-white mb-4 leading-none uppercase tracking-tighter">
                                See Our Documentation
                            </h2>
                            <div className="flex items-center gap-4">
                                 {Object.entries(item.linkDoc).map(([key, s]) => (
                                <a key={key} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.title}
                                    className="text-white hover:text-primary transition-colors">
                                    <i className={`fa-brands ${s.icon} fa-lg`}></i>
                                </a>
                                 ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-b-lg h-full bg-gray-800 shadow-xl image-full hover:cursor-pointer fadeInUp-animation">

                    <div className="card-body rounded-b-lg flex flex-col justify-between p-4 lg:p-6">
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


            </div>

            <dialog onClick={closeDialog}
        ref={dialogRef}
        className="backdrop:bg-black/70 rounded-xl transition-colors duration-500 bg-gray-800 text-white p-0 w-full lg:max-w-lg m-auto"
      >
        <div className="p-6 reveal">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <button
              type="button"
              onClick={closeDialog}
              className="text-white/50 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-white/70 mb-4">{item.summary}</p>

          <div className="flex gap-4">
            {Object.entries(item.linkDoc).map(([key, s]) => (
              <a
                key={key}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary"
              >
                <i className={`fa-brands ${s.icon} fa-lg`}></i>
              </a>
            ))}
          </div>

          <a
            href={`/projects/${item.id}`}
            className="mt-6 inline-block rounded-full bg-primary px-4 py-2 text-xs font-medium"
          >
            Lihat Detail Lengkap
          </a>
        </div>
      </dialog>
        </>
    )
}