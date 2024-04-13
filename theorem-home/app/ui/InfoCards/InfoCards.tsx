import Image from "next/image"
import { InfoCardType } from "./InfoCardTypes"

const InfoCard = ({data} : InfoCardType) => {
    const {label, imgSrc , role, details, url} = data
    return (
        <div className="w-full text-center shadow-xl bg-stone-50 dark:bg-stone-950 dark:border-stone-800  border-l border-r border-b">
            <Image
                alt=''
                width={800}
                height={800}
                src={imgSrc}
            />
            <div className="py-6">
                <h3 className="pb-2 mb-2 uppercase font-semibold tracking-wide border-b-2 max-w-max mx-auto">{label}</h3>
                {role && <p>
                    <span className="font-semibold">ROLE: </span>
                    <span>{role}</span>
                </p>}
                <details className="cursor-pointer mt-4">
                    <summary className="mb-6">About this project</summary>
                    <div className="rich-summary text-left px-5 pb-4" dangerouslySetInnerHTML={{__html: details}}/>
                </details>
                {url && <a href={url} className="bg-indigo-700 dark:bg-indigo-950 px-4 py-1 text-slate-100 uppercase underline tracking-wide font-bold text-base">Visit Site</a>}
            </div>
        </div>
    )
}

export default InfoCard