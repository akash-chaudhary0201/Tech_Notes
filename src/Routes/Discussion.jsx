import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Discussion() {

    const { user, isAuthenticated } = useAuth0();

    return (
        <div className='home_main_container'>
            <h1>Discussion</h1>
            {
                isAuthenticated && <h2>{user.name}</h2>
            }
        </div>
    )
}

export default Discussion
