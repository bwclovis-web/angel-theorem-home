'use client'
import Link from "next/link"
import { useContext } from "react"
import TheoremContext from "@/app/providers/mainProvider"
import clsx from "clsx"
import {NavData} from '../../data/navigation'
const Navigation = () => {
    const {isNavActive} = useContext(TheoremContext)
    const NavWrapperClasses = clsx({
        'fixed p-6 z-20 bg-indigo-800/80 text-slate-100': true,
        'h-0 -translate-y-[100%]': !isNavActive,
        'md:h-full md:max-w-max transition-all w-full translate-y-[0] duration-400': isNavActive,
    })
    const NavClasses = clsx({
        'opacity-0': !isNavActive,
        'opacity-100': isNavActive
    })

    const NavListClasses = clsx({
        'flex md:flex-col justify-around md:gap-6 uppercase': true
    })
    return (
        <header className={NavWrapperClasses}>
            <nav className={NavClasses}>
                <ul className={NavListClasses}>
                    {NavData?.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link href={item.url}>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )})
                    }
                </ul>
            </nav>
        </header>
    )
}


export default Navigation