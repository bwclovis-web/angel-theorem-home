import { ChangeEvent, useEffect, useState } from "react"
import styles from './Toggle.module.scss'
import { CiLight } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md";
const ModeToggle = () => {
    const [darkMode, toggleDarkMode] = useState(false)
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            toggleDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[])
    const handelThemeToggle = (evt: ChangeEvent<HTMLInputElement>) => {
        toggleDarkMode(!darkMode)
        if(evt.target.checked) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else { 
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <>
            <input type="checkbox" id="mode-toggle" className={styles.toggle} checked={darkMode} onChange={(evt) => handelThemeToggle(evt)}/>
            <label htmlFor="mode-toggle" className={styles.label}>
                <CiLight  className={styles.sun}/>
                <MdDarkMode className={styles.moon}/>
            </label>
        </>
    )
}

export default ModeToggle