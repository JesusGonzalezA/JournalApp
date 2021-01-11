import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../journal/JournalScreen';
import { firebase } from '../../firebase/firebaseConfig' 
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {
            
            if ( user?.uid ) {
                dispatch( login(user.uid, user.displayName) );
            }

            setChecking(false);

        });
    
    }, [ dispatch, setChecking ]);

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
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

