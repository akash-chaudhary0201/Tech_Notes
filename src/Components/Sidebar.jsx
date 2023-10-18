import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <>

            <div className="canvas_menu">
                <ul>
                    <li>
                        <i onClick={handleShow} className="fa-solid fa-bars"></i>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title> <span className='tech_head'>Tech Notes</span>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className='canvas_list'>
                                    <li>
                                        <NavLink className="linkk" to="/"> <i className="fa-solid fa-house"></i> Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/notes"> <i className="fa-solid fa-clipboard"></i> Notes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/vam"> <i className="fa-solid fa-book"></i> Value Added</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/pyq"> <i className="fa-solid fa-paperclip"></i> PYQs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/discussion"> <i className="fa-solid fa-comments"></i> Discussion</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/settings"> <i className="fa-solid fa-gear"></i> Settings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/team"> <i class="fa-solid fa-user-plus"></i> Team</NavLink>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </li>
                    {
                        isAuthenticated ? (
                            <li>
                                <button className='log__btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    <i className="fa-solid fa-house"></i>
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button className='log__btn' onClick={() => loginWithRedirect()}><i className="fa-solid fa-user"></i></button>
                            </li>
                        )

                    }
                </ul>
            </div >
        </>
    );
}

export default Sidebar;