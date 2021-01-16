import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Testing ui Actions', () => {
    
    test('should not change this archive', () => {
        
        let action = setError('Error message');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'Error message'
        });

        //-------------------------------------------

        action = removeError();

        expect( action ).toEqual({
            type: types.uiRemoveError
        });

        //-------------------------------------------

        action = startLoading();

        expect( action ).toEqual({
            type: types.uiStartLoading
        });

        //-------------------------------------------

        action = finishLoading();

        expect( action ).toEqual({
            type: types.uiFinishLoading
        });
    })
    
})
