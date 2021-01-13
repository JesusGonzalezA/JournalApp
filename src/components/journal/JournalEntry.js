import React from 'react'
import moment from 'moment'


import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notes';

export const JournalEntry = ({ id, body: note }) => {

    const dispatch = useDispatch();
    const {title, date, url, body} = note;
    
    const noteDate = moment(date);

    const handleActivateNote = () => {

        dispatch( activateNote(id, note ));
        
    }
    
    return (
        <div className="journal__entry pointer" onClick={handleActivateNote}>
            {
                url &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
                </div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd')}</span>
                <h4>{noteDate.format('L')}</h4>
            </div>
        </div>
    )
}
