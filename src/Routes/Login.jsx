import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

    const sbmt = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="log_main_container">
                <div className="log_content">
                    <h1>
                        Log In
                    </h1>
                    <Form onSubmit={sbmt}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your username" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                        </Form.Text> <br /> <br />

                        <input className='sbmt-btn' type="submit" />

                    </Form>
                </div>

            </div>
        </>
    )
}

export default Login
