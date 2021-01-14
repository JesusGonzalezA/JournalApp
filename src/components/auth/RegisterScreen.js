import React from 'react'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

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
            dispatch ( startRegisterWithEmailPasswordName(email, password, name) )
        }
    }

    const isFormValid = () => {

        if ( !validator.isEmail( email ) ){
            dispatch( setError('Email is not valid') );
            return false;
        }
        if ( name.trim().length === 0 ){
            dispatch( setError('Name is required') );
            return false;
        }
        if ( password !== password2){
            dispatch( setError('Password should match') );
            return false;
        }
        if ( password.length < 5 ){
            dispatch( setError('Password should be at least 6 char long') );
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h1 className="auth__title mb-5">Sign up</h1>

            <form 
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ handleRegister }
            >

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
