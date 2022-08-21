import CSS from './login-form.scss'

import { TextField, Button } from '@mui/material'

export default function Login() {
    return (
        <div className="login-form">
            <div className="l-form-wrapper">
                <form className="l-form-inner">
                    <h1 className="l-form-inner__title forte-font">Bem vindo!</h1>
                    <TextField
                        className="l-form-inner__text"
                        label="Email"
                        variant="standard"
                        required={true}
                    />

                    <TextField sx={{ mt: '26px' }}
                        className="l-form-inner__text"
                        label="Senha" variant="standard"
                        type="password"
                        required={true}
                    />

                    <Button sx={{ mt: '32px' }}
                        className="l-form-inner__button"
                        variant="contained">
                        Login
                    </Button>
                </form>
                <h2 className='l-form-wrapper__text '>Não possui conta? <span className='primary-color'>Registre-se!</span></h2>
            </div>
        </div>
    )
}