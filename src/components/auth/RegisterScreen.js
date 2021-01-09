import React from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
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

        if ( isFormValid() ){
            console.log('Correct form');
        }
    }

    const isFormValid = () => {
        
        let isValid = true;

        if ( name.trim().length === 0 ){
            console.log('Name is required');
            isValid = false;
        }
        if ( !validator.isEmail( email ) ){
            console.log('Email is not valid');
            isValid = false;
        }
        if ( password !== password2 || password.length < 5){
            console.log('Password should match');
            isValid = false;
        }
        if ( password.length < 5 ){
            console.log('Password should be at least 6 char long');
            isValid = false;
        }

        return isValid;
    }

    return (
        <>
            <h1 className="auth__title mb-5">Sign up</h1>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    Error
                </div>

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
