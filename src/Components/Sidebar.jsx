import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';




function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        <NavLink className="linkk" to="/notes"> <i class="fa-solid fa-clipboard"></i> Notes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/department"> <i className="fa-solid fa-book"></i> Value Added</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/department"> <i class="fa-solid fa-paperclip"></i> PYQs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/discussion"> <i className="fa-solid fa-comments"></i> Discussion</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="linkk" to="/settings"> <i className="fa-solid fa-gear"></i> Settings</NavLink>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </li>
                    <li>
                        <i class="fa-solid fa-user"></i>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;