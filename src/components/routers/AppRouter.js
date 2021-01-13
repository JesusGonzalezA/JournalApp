import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
  
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../journal/JournalScreen';
import { firebase } from '../../firebase/firebaseConfig' 
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged( async (user) => {
            
            if ( user?.uid ) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );
            }else{
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
    
    }, [ dispatch, setChecking, setIsLoggedIn ]);

    if ( checking ) {
        return (
            <div className="preloader__container">
                <h1 className="preloader__title mb-5">Loading...</h1>
                <div className='preloader__preloader'></div>
            </div>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={ isLoggedIn} 
                        path="/auth" 
                        component={ AuthRouter } 
                    />
                    <PrivateRoute
                        isAuthenticated={ isLoggedIn } 
                        exact 
                        path="/" 
                        component={ JournalScreen } 
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

