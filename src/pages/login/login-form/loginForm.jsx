import CSS from './loginForm.scss'

import { useState } from 'react';
import { TextField, Button } from '@mui/material'

import { useContext } from 'react';
import { AuthContext } from '../../../global/contexts/Auth'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const {handleLogin, user} = useContext(AuthContext)

    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userCredentials = {
            username: username,
            password: pass
        }

        const login = await handleLogin(userCredentials)
        if (login) {
            Navigate('/')
        }
    }

    return (
        <div className="login-form">
            <div className="l-form-wrapper">
                <form className="l-form-inner" onSubmit={handleSubmit}>
                    <h1 className="l-form-inner__title forte-font">Bem vindo!</h1>
                    <TextField
                        className="l-form-inner__text"
                        label="Usuário"
                        variant="standard"
                        required={true}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />

                    <TextField sx={{ mt: '26px' }}
                        className="l-form-inner__text"
                        label="Senha" variant="standard"
                        type="password"
                        required={true}
                        onChange={(e) => { setPass(e.target.value) }}
                    />

                    <Button sx={{ mt: '32px' }}
                        className="l-form-inner__button"
                        type="submit"
                        variant="contained">
                        Login
                    </Button>
                </form>
                <h2 className='l-form-wrapper__text '>Não possui conta? <span className='primary-color'>Registre-se!</span></h2>
            </div>
        </div>
    )
}