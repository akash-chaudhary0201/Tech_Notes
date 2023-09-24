import React from 'react'

function Notes() {
    return (
        <>
            <div className="notes_main_container">
                <div className="notes_content">
                    <h1>
                        Choose Your Semester
                    </h1>
                    <div className="semester">
                        <button className='sem_btn'>
                            <span>Semester 1</span>
                        </button>
                        <button className='sem_btn'>
                            <span>Semester 2</span>
                        </button>
                    </div>
                    <div className="semester">
                        <button className='sem_btn'>
                            <span>Semester 3</span>
                        </button>
                        <button className='sem_btn'>
                            <span>Semester 4</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
