import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h1 className="auth__title mb-5">Login</h1>

            <form>
                <input 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                    autocomplete="off"
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />

                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
               
                <div className="auth__social-networks">
                    <p>Login with your fav social network</p>

                    <div className="google-btn">
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
                
                <Link to="auth/register" className="link">
                    Not registered yet?
                </Link>

            </form>
        </>
    )
}
