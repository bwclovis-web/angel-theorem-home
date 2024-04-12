'use client'

import TheoremContext from "@/app/providers/mainProvider"
import clsx from "clsx"
import { useContext } from "react"

const Navigation = () => {
    const {isNavActive} = useContext(TheoremContext)
    const NavClasses = clsx({
        'bg-green-700 max-w-max absolute p-6': true,
        'h-0 -z-10 -translate-y-[100%]': !isNavActive,
        'h-full transition-all translate-y-[0] duration-400 delay-700': isNavActive
    })
    return (
        <header className={NavClasses}>
            <nav>
                <ul>
                    <li>HELLO</li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation