'use client'

import { useState, useEffect, createContext } from 'react'

const ctxDefaults = {
    isNavActive: false,
    updateNav: () => {}
}

const TheoremContext = createContext(ctxDefaults)

export const MainProvider = ({children}) => {
    const [isNavActive, setIsNavActive] = useState(ctxDefaults.isNavActive)
    const updateNav = () => {
        return setIsNavActive(!isNavActive)
    }

    return (
        <TheoremContext.Provider 
        value={{
            ...ctxDefaults,
            updateNav,
            isNavActive
        }}>
            {children}
        </TheoremContext.Provider>
    )
}

export default TheoremContext

