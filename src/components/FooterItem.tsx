interface FooterItemProps {
    title: string;
    value: string;
    link: string;
    icon:string;
}

export default function FooterItem({ title, value, link, icon }: FooterItemProps) {

    return (
        <>
            <div className="flex  flex-row gap-4 items-center">
                <div className="rounded-full border-solid border-2 primary-content p-2">
                    <a href={link} dangerouslySetInnerHTML={{ __html: icon }}/>
                </div>
                <div className="flex flex-col">
                    <p className="primary-content">{title}</p>
                    <p><a href={link}>{value}</a></p>
                </div>
            </div>
        </>
    )
}