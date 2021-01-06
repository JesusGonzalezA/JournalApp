import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h1 className="auth__title mb-5">Sign up</h1>

            <form>
                <input 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                />

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />


                <input  
                    type="password"
                    placeholder="Cofirm password"
                    name="password2"
                    className="auth__input"
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Sign up
                </button>
               
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>

            </form>
        </>
    )
}
