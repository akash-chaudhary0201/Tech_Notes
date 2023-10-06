import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {

    return (
        <>
            <div className="log_main_container">
                <div className="log_content">
                    <h1>
                        Log In
                    </h1>
                    <form className='log_form'>
                        <input type="text" placeholder='Enter Userame' />
                        <input type="password" placeholder='Enter Your Password' />
                        <button class="contactButton"> Log in
                            <div class="iconButton">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>

                    </form> <br />
                    <p className='log'>
                        Don't have an account? <NavLink to="/signup"><span>Sign up</span></NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
{/* <NavLink to="/signup"><span>Sign Up</span></NavLink> */ }