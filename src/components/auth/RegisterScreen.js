import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        email: '',
        name: '',
        password: '',
        password2: ''
    });

    const {
        email,
        name,
        password,
        password2
    } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();


    }

    const isFormValid = () => {
        
    }

    return (
        <>
            <h1 className="auth__title mb-5">Sign up</h1>

            <form onSubmit={ handleRegister }>
                <input 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    className="auth__input"
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    className="auth__input"
                    onChange={ handleInputChange }
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    className="auth__input"
                    onChange={ handleInputChange }
                />


                <input  
                    type="password"
                    placeholder="Cofirm password"
                    name="password2"
                    value={password2}
                    className="auth__input"
                    onChange={ handleInputChange }
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
