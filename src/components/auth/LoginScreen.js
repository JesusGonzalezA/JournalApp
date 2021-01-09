import React from 'react'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { removeError, setError } from '../../actions/ui'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    
    const handleGoogleLogin = (e) => {
        dispatch( startGoogleLogin() );
    }
    
    const handleLogin = (e) => {
        e.preventDefault();
        if ( isFormValid() ){
            dispatch( startLoginEmailPassword(email, password) );
        }
    }

    const isFormValid = () => {

        if ( !validator.isEmail( email ) ){
            dispatch( setError('Email is not valid') );
            return false;
        }
        if ( password.length === 0){
            dispatch( setError('Password is required') );
            return false;
        }

        dispatch( removeError() );
        return true;
    }
    
    return (
        <>
            <h1 className="auth__title mb-5">Login</h1>

            <form onSubmit={ handleLogin }>
                {
                    msgError && 
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

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

                <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={ loading }    
                >
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
