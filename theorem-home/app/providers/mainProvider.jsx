'use client'

import UseNavigation from '@/hooks/UseNavigation'
import {createContext } from 'react'

const ctxDefaults = {
    isNavActive: false,
    updateNav: () => {Boolean}
}

const TheoremContext = createContext(ctxDefaults)

export const MainProvider = ({children}) => {
    const [isNavActive, updateNav] = UseNavigation(ctxDefaults.isNavActive)

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

