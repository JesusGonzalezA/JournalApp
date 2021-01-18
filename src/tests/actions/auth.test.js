import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types"


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const inititalState = {};
let store = mockStore( inititalState )

describe('Testing auth actions', () => {
    
    beforeEach(() => {
        store = mockStore( inititalState )
    });

    test('login and logout should create and clear the user', () => {
        
        expect ( logout() ).toEqual({
            type: types.logout
        });

        expect( login( 'uid', 'name') ).toEqual({
            type: types.login,
            payload: {
                uid: 'uid',
                displayName: 'name'
            }
        })
    })

    test('should start the login', async () => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });
        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        })
    });

    test('should start Login with Email and Pass', async () => {
        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );

        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: expect.any(String),
                displayName: null
            }
        });
    })
    
    
    
})
