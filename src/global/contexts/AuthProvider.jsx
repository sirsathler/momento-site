import { selectUnstyledClasses } from '@mui/base';
import { createContext, useEffect } from 'react';
import { useState } from 'react';

import submitLoginCredentials from './AuthService';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // const [isAuth, setAuth] = useState(false)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const lastUser = localStorage.getItem('user')

        if (lastUser) {
            setUser(JSON.parse(lastUser))
        }

        setLoading(false)
    }, [])

    async function handleLogin(credentials) {
        const response = await submitLoginCredentials(credentials)
        if (response.status == 200) {
            setUser(response.data.user)
            localStorage.setItem('user', JSON.stringify(response.data))
            return true
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

// export { AuthProvider, AuthContext }