import React from 'react'

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
                        <span>Notes</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    <button class="cta">
                        <span>Departments</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    <button class="cta">
                        <span>Discussion</span>
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
