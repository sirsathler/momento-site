import CSS from './login.scss'
import loginlogo from '../../assets/images/loginlogo.png'

import LoginForm from './login-form/loginForm'

export default function Login() {
    return (
        <div className="page page-login">
            <div className="l-logo-wrapper">
                <div className="l-logo-container">
                    <img className='l-logo-container__logo' src={loginlogo} alt="loginlogo" />
                </div>
            </div>

            <LoginForm/>
        </div>
    )
}