import Image from "next/image"

const IntroCard = ({heading, imgSrc}) => {
    return (
        <div className="bg-slate-800 w-1/3 p-5 rounded-sm">
            <h3 className="font-bold text-xl uppercase mb-4 tracking-wider">{heading}</h3>
            <div className="h-[170px] overflow-hidden">
                <Image
                    alt=""
                    width={600}
                    height={30}
                    src={imgSrc}
                />
            </div>
        </div>
    )
}

export default IntroCard
