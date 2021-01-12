/*
    {
        notes: [],
        active: null,
        active: {
            od: 'KAJSASKJASJK',
            title: '',
            body: '',
            imageUrl: '',
            date: 12344566
        }
    }
*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
    
        default:
            return state;
    }
}