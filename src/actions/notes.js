import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);   

        dispatch( activateNote( docRef.id, newNote ));
    }
}

export const activateNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        const notes = await loadNotes( uid );
        dispatch( finishLoading() );
        
        dispatch( setNotes( notes ));
    }
}