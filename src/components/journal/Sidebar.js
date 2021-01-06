import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar mt-5">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> Jesus</span>
                </h3>

                <button className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x mb-5"></i>
                <p>New entry</p>
            </div>
        </aside>
    )
}
