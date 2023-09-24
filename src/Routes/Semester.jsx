import React from 'react'

function Semester() {
    return (
        <>
            <div className="sem1_main_container">
                <h1>
                    Semester 2
                </h1>
                <div className="subject_names">
                    <button className='sub_btn'>
                        <span>TAFL</span>
                    </button>
                    <button className='sub_btn'>
                        <span>OOP</span>
                    </button>
                    <button className='sub_btn'>
                        <span>OS</span>
                    </button>
                    <button className='sub_btn'>
                        <span>DBMS</span>
                    </button>
                    <button className='sub_btn'>
                        <span>DSA</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Semester
