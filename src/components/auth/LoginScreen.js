import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) );
    }

    const handleGoogleLogin = (e) => {
        dispatch( startGoogleLogin() );
    }
    
    return (
        <>
            <h1 className="auth__title mb-5">Login</h1>

            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={ handleInputChange }                    
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    password={password}
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
               
                <div className="auth__social-networks">
                    <p>Login with your fav social network</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img 
                                className="google-icon" 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="Sign in with Google" 
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                
                <Link to="/auth/register" className="link">
                    Not registered yet?
                </Link>

            </form>
        </>
    )
}
