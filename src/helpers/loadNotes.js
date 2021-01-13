import { db } from "../firebase/firebaseConfig"


export const loadNotes = async ( uid ) => {
    
    const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesSnapshot.forEach( snap => {
        notes.push({
            id: snap.id,
            body: snap.data()
        });
    })

    return notes;
}