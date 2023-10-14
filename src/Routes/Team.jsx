import React from 'react'
import Akash from "./Images/akash.jpg"
import Nitish from "./Images/nitish.jpg"

function Team() {
    return (
        <>
            <div className="team_main_container">
                <div className="team_content">
                    <h1>
                        Our Team
                    </h1>
                    <div className="team_members">
                        <div className="member1" style={{ backgroundImage: `url(${Akash})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>

                            <div className="member_info">
                                <div className='overlay'></div>
                                <h3>Akash</h3>
                                <h4>Front End</h4>
                                <ul className='ul1'>
                                    <li><i class="fa-brands fa-linkedin"></i></li>
                                </ul>

                                <ul className='ul2'>
                                    <li><i class="fa-brands fa-instagram"></i></li>
                                </ul>
                            </div>

                        </div>
                        <div className="member1" style={{ backgroundImage: `url(${Nitish})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "300px", height: "300px" }}>

                            <div className="member_info">
                                <div className='overlay'></div>
                                <h3>Nitish</h3>
                                <h4>Backend</h4>
                                <ul className='ul1'>
                                    <li><i class="fa-brands fa-linkedin"></i></li>
                                </ul>

                                <ul className='ul2'>
                                    <li><i class="fa-brands fa-instagram"></i></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <p className='opp_para'>Want to join our Team? <span>Contact Us!!</span></p>
                </div>
            </div>
        </>
    )
}

export default Team
