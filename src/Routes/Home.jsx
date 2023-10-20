import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function Home() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        <>
            <div className='home_main_container'>
                <div className="home_content">
                    <h1>
                        Hey, Welcome to <span>Tech Notes</span>
                    </h1>
                    <h2 className='head_hide'>
                        Empowering <span>MCA Success</span> : Notes, Discussions, Insights
                    </h2>
                    {
                        isAuthenticated ? (
                            <div className="btns">
                                <NavLink to="/notes"><button className='home_btn'>
                                    <span class="circle1"></span>
                                    <span class="circle2"></span>
                                    <span class="circle3"></span>
                                    <span class="circle4"></span>
                                    <span class="circle5"></span>
                                    <span class="text">Notes</span>
                                </button></NavLink>
                                <NavLink to="/pyq"><button className='home_btn'>
                                    <span class="circle1"></span>
                                    <span class="circle2"></span>
                                    <span class="circle3"></span>
                                    <span class="circle4"></span>
                                    <span class="circle5"></span>
                                    <span class="text">PYQs</span>
                                </button></NavLink>
                                <NavLink to="/vam"><button className='home_btn'>
                                    <span class="circle1"></span>
                                    <span class="circle2"></span>
                                    <span class="circle3"></span>
                                    <span class="circle4"></span>
                                    <span class="circle5"></span>
                                    <span class="text">VAM</span>
                                </button></NavLink>
                                <NavLink to="/discussion"><button className='home_btn'>
                                    <span class="circle1"></span>
                                    <span class="circle2"></span>
                                    <span class="circle3"></span>
                                    <span class="circle4"></span>
                                    <span class="circle5"></span>
                                    <span class="text">Discussion</span>
                                </button></NavLink>
                            </div>
                        ) : (

                            <button className='home_log' onClick={() => loginWithRedirect()}>Log In</button>

                        )
                    }

                    <div className="home_social_btns">
                        <ul className='social_list'>
                            <li>
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-facebook"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
