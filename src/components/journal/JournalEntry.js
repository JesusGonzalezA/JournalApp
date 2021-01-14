import React from 'react'
import moment from 'moment'


import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {
    
    const dispatch = useDispatch();
    
    const noteDate = moment(date);

    const handleActivateNote = () => {

        dispatch( 
            activateNote(id, {
                date, title, body, url
            })
        );
        
    }
    
    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster" 
            onClick={handleActivateNote}
        >
            {
                (url)
                ? (
                    <div 
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${url})`
                        }}
                    >
                    </div>
                )
                :
                (
                    <div 
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU)'
                        }}
                    >
                    </div>
                )
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
