import React from 'react'
import Akash from "./Images/Akash.jpeg"

function Team() {
    return (
        <>
            <div className="team_main_container">
                <div className="team_content">
                    <h1>
                        Our Team
                    </h1>
                    <div className="team_members">
                        <div className="member1" style={{ backgroundImage: `url(${Akash})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px", borderRadius: "10px" }}>

                            <div className="member_info">
                                <div className='overlay'></div>
                                <h3>Akash</h3>

                                <ul className='ul1'>
                                    <li><i class="fa-brands fa-linkedin"></i></li>
                                </ul>

                                <ul className='ul2'>
                                    <li><i class="fa-brands fa-instagram"></i></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
