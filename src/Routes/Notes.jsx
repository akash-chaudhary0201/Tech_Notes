import React from 'react'
import { Link, Outlet } from "react-router-dom"

function Notes() {
    return (
        <>
            <div className="notes_main_container">
                <div className="notes_content">
                    <div className="notes_mainn">
                        <div className="notes_left">
                            <h1>
                                Choose Your Semester
                            </h1>
                            <div className="button_container">
                                <Link to="semester1"><button className="button">
                                    <span className="button-content">Semester 1 </span>
                                </button></Link>
                                <Link to="semester2"><button className="button">
                                    <span className="button-content">Semester 2 </span>
                                </button></Link>
                                <Link to="semester3"><button className="button">
                                    <span className="button-content">Semester 3 </span>
                                </button></Link>
                                <Link to="semester4"><button className="button">
                                    <span className="button-content">Semester 4 </span>
                                </button></Link>
                            </div>
                        </div>
                        <div className="notes_middle">
                        </div>
                        <div className="notes_right">

                            <div className="outlet">

                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
