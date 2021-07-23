import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        }

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
                    Login
                </Card.Title>
                <hr/>
                <Form className="d-grid gap-2">
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Control 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter email" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control 
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password" 
                        />
                    </Form.Group>
                    <Button className="mb-3" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        );
    }
}

export default Login;