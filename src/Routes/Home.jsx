import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {



    return (
        <div className='home_main_container'>
            <div className="home_content">
                <h1>
                    Hey, Welcome to <span>Tech Notes</span>
                </h1>
                <h2>
                    Empowering <span>MCA Success</span> : Notes, Discussions, Insights
                </h2>
                <div className="moving_text">
                    <h2>

                    </h2>
                </div>
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
            </div>
        </div>
    )
}

export default Home
