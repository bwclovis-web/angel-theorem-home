"use client"

import { useState } from "react"
import clsx from 'clsx'
import styles from './intro.module.scss'

const HomeBottom = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const drawerClasses = clsx({
        'w-full relative opacity-0 transition ease-in-out delay-150' : true,
        'translate-y-[100%] transition ease-in-out delay-150': !openDrawer
    })
    return (
        <>
            <button className={styles.slide_trigger} onClick={() => setOpenDrawer(!openDrawer) }>OHHELLO</button>
            <div className={`${drawerClasses} ${styles.bottom_slide}`}>
                <div className="content-container text-center">
                    <section className="pt-10 bg-slate-900 ">
                        <h2 className="text-4xl pb-5">What'a all this then?</h2>
                        <div>
                            <div>
                                <h3>Item 1</h3>
                            </div>
                            <div>
                                <h3>item 2</h3>
                            </div>
                            <div>
                                <h3>item 3</h3>
                            </div>
                        </div>
                        <button className="py-10" onClick={() => setOpenDrawer(!openDrawer) }>NO MAS</button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomeBottom