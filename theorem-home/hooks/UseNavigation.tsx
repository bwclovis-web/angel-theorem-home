import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { getCookie, setCookie } from 'cookies-next'

const UseNavigation = (defaultState: boolean) => {
    const [isNavActive, setIsNavActive] = useState(defaultState)
    const hasSession = getCookie('activeSession')
    useEffect(() => {
        if (hasSession) {
            setIsNavActive(true)
        }
    }, [])

    const updateNav = () => {
        !hasSession && setCookie('activeSession', uuidv4())
        return setIsNavActive(!isNavActive)
    }

    return [isNavActive, updateNav]
}

export default UseNavigation