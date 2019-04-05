import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <Form>
                    <Form.Group controlId="exampleForm.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.LastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Your Last Name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="10" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Contact;