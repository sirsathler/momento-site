import { createContext, useEffect } from 'react';
import { useState } from 'react';

import submitLoginCredentials from './AuthService';
import { API } from '../services/api';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loggedUser = localStorage.getItem('user')
        const loggedToken = localStorage.getItem('token')
        if (loggedUser && loggedToken) {
            setUser(JSON.parse(loggedUser))
            setToken(JSON.parse(loggedToken))
            API.defaults.headers.Authorization = `Bearer ${loggedToken}`
        }

        setLoading(false)
    }, [])

    async function handleLogin(credentials) {
        const response = await submitLoginCredentials(credentials)
        if (response.status == 200) {
            const user = response.data.user
            const token = response.data.token
            setUser(user)
            setToken(token)
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(token))
            return true
        }
    }

    async function handleLogout() {
        setUser()
        setToken()
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        return true
    }

    return (
        <AuthContext.Provider value={{ user, token, setUser, handleLogin, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

// export { AuthProvider, AuthContext }