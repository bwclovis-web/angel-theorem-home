"use client"

import { useContext, useRef, useState } from "react"
import clsx from 'clsx'
import styles from './intro.module.scss'
import { GiImbricatedArrows } from "react-icons/gi";
import IntroCard from "./card/IntroCard";
import TheoremContext from "../providers/mainProvider";

const HomeBottom = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const {updateNav, isNavActive} = useContext(TheoremContext)
    const triggerRef = useRef<any>(null)
    const drawerClasses = clsx({
        'w-full md:w-full relative opacity-1 transition ease-in-out delay-150' : true,
        'translate-y-[100%] opacity-0 transition ease-in-out delay-150': !openDrawer, 
        'translate-x-[100%] transition ease-in-out duration-75 delay-200': isNavActive
    })

    return (
        <>
            {!isNavActive && 
                <button className={styles.slide_trigger} onClick={() => setOpenDrawer(!openDrawer) } ref={triggerRef} tabIndex={0}>
                    <GiImbricatedArrows size={40} className={styles.slide_trigger_button}/>
                </button>
            }
            <div className={`${drawerClasses}`} id="content-drawer" tabIndex={0}>
                <div className="md:w-3/4 mx-auto text-center">
                    <section className="pt-10 bg-slate-900 px-6 w-full">
                        <h2 className="pb-5">Whats all this then?</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <IntroCard heading={'A rogue experiment'} imgSrc={"/img/escaped-experiment.png"}/> 
                            <IntroCard heading={'A place to hang my hat'} imgSrc={"/img/hat.jpg"}/> 
                            <IntroCard heading={'A type of notepad'} imgSrc={"/img/note.jpg"}/> 
                        </div>
                        <div>
                            <button className="py-10" onClick={() => updateNav() } tabIndex={0}>I want to see!</button>
                            <button className="py-10" onClick={() => setOpenDrawer(!openDrawer) } tabIndex={0}>I just want to contemplate life</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomeBottom