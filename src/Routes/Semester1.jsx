import React from 'react'
import { NavLink } from 'react-router-dom';

function Semester1() {
    return (
        <>
            <div className="sem1_main_container">
                <h1>
                    Semester 1
                </h1>
                <div className="subject_names">
                    <button className='sub_btn'>
                        <span><NavLink className="sub_name" to="/fcet">  FCET</NavLink></span>
                    </button>
                    <button className='sub_btn'>
                        <span> <NavLink className="sub_name" to="/c">  C Language</NavLink></span>
                    </button>
                    <button className='sub_btn'>
                        <span><NavLink className="sub_name" to="/pmc">  PMC</NavLink></span>
                    </button>
                    <button className='sub_btn'>
                        <span><NavLink className="sub_name" to="/coa">  COA</NavLink></span>
                    </button>
                    <button className='sub_btn'>
                        <span><NavLink className="sub_name" to="/dm">  DM</NavLink></span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Semester1
