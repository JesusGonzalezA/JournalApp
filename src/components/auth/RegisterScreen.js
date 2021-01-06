import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h1 className="auth__title mb-5">Sign up</h1>

            <form autoComplete="off">
                <input 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                    autoComplete="new-mail"
                />

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="none"
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="none"
                />


                <input  
                    type="password"
                    placeholder="Cofirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="none"
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Sign up
                </button>
               
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>

                <input 
  type="text" 
  autoComplete="on" 
  value="" 
  style={{display: 'none', opacity: 0, position: 'absolute', left: '-100000px'}} 
  readOnly={true}
/>
            </form>
        </>
    )
}
