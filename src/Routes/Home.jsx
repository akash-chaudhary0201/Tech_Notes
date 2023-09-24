import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {



    return (
        <div className='home_main_container'>
            <div className="home_content">
                <h1>
                    Hey, Welcome to Tech Notes
                </h1>
                <div className="moving_text">
                    <h2>

                    </h2>
                </div>
                <div className="btns">
                    <button class="cta">
                        <span><NavLink className="linkk" to="/notes"> Notes</NavLink></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    <button class="cta">
                        <span><NavLink className="linkk" to="/department">VAM</NavLink></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    <button class="cta">
                        <span><NavLink className="linkk" to="/discussion">Discussion</NavLink></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
