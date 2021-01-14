import Swal from 'sweetalert2'
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { uploadFile } from "../helpers/uploadFile"


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);   

        dispatch( activateNote( docRef.id, newNote ));
        dispatch( addNote( docRef.id, newNote) );
    }
}

export const addNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})
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
        const notes = await loadNotes( uid );
        
        dispatch( setNotes( notes ));
    }
}

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !note.url ){
            delete note.url;
        }


        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFirestore)

        dispatch( updateNote( note.id, note ));
        Swal.fire('Saved', note.title, 'success');
    }
}

export const updateNote = ( id, note ) => {
    return {
        type: types.notesUpdate,
        payload: {
            note, 
            id
        }
    }
}

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;
        
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await uploadFile( file );
        
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ));
        
        Swal.close();
    }
}