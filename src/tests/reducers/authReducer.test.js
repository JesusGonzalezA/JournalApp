import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('Testing authReducer', () => {

    test('should return a login object', () => {
        
        const action = {
            type: types.login,
            payload: {
                uid: '123456',
                displayName: 'Jesus'
            }
        }

        expect( authReducer( {}, action ) ).toEqual({
            uid: action.payload.uid,
            name: action.payload.displayName
        });


    })
    
    test('should return an empty object when the user logout', () => {
        
        const action = {
            type: types.logout
        }

        const state = {
            uid: '123456',
            name: 'Jesus'
        }

        expect( authReducer(state, action) ).toEqual( {} );
    })

    test('should return the state when the action is empty', () => {
        
        const state = {
            uid: '123456',
            name: 'Jesus'
        }

        expect( authReducer(state) ).toEqual( state );
    })
    
})
