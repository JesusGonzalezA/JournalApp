import { login, logout } from "../../actions/auth"
import { types } from "../../types/types"

describe('Testing auth actions', () => {
    
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
    
})
