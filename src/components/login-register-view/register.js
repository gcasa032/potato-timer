import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confPassword: "",
        };


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    render(){

        return (
        <Card.Body className="text-center">
            <Card.Title as="h3">
                Register
            </Card.Title>
            <hr/>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-2" controlId="formUsername">
                    <Form.Control 
                        type="text"
                        value={this.state.username}
                        name="username" 
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control 
                        type="email"
                        value={this.state.email} 
                        name="email" 
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control 
                        type="password"
                        value={this.state.password}
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formConfirmPassword">
                    <Form.Control 
                        type="password"
                        value={this.state.confPassword}
                        name="confPassword" 
                        placeholder="Confirm Password"
                        onChange={this.handleChange} 
                    />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            
        </Card.Body>
    );

    }

}

export default Register;