import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confPassword: "",
            errors: {}
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });

        if (this.state.errors[name]){
            this.setState( prevState => ({
                errors: {
                    ...prevState.errors,
                    [name]: null
                } 
            }));
        }


    }

    getErrors(){

        // All fields should be filled out
        //  Username must be unique
        // Email must be unique
        // Password must be longer than 8 chars, must have special char and number
        // Password and confPassword must match
        let errors = {}

        if (this.state.username.length < 1){
            errors.username = 'Please enter a username'
        }
        if (!validEmailRegex.test(this.state.email)){
            errors.email = 'Please enter a valid email'
        }
        if(this.state.password.length < 1){
            errors.password = "Please enter a password"
        }
        if(this.state.password !== this.state.confPassword){
            errors.confPassword = "Passwords do not match!"
        }

        return errors;

    }

    async handleSubmit(event){
        event.preventDefault();
        const errors = this.getErrors();

        if(Object.keys(errors).length > 0){
            this.setState({errors})
        } else {
            try {
                const url = "http://localhost:8080/api/users";
                const user = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password}
                const {data: res} = await axios.post(url, user);
                alert(res.message)
            } catch (error){
                // if (error.response && error.response.status >= 400 && e)
                alert(error.message)
            }
        }
 
    }

    render(){

        return (
        <Card.Body className="text-center">
            <Card.Title as="h3">
                Register
            </Card.Title>
            <hr/>
            <Form noValidate onSubmit={this.handleSubmit} className="d-grid gap-2">
                <Form.Group className="mb-2">
                    <Form.Control 
                        type="text"
                        value={this.state.username}
                        name="username" 
                        placeholder="Username"
                        onChange={this.handleChange}
                        isInvalid={ this.state.errors.username }
                    />
                    <Form.Control.Feedback type="invalid">
                            {this.state.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        type="email"
                        value={this.state.email} 
                        name="email" 
                        placeholder="Email"
                        onChange={this.handleChange}
                        isInvalid={ this.state.errors.email }
                    />
                    <Form.Control.Feedback type="invalid">
                            {this.state.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        type="password"
                        value={this.state.password}
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleChange}
                        isInvalid={ this.state.errors.password }
                    />
                    <Form.Control.Feedback type="invalid">
                            {this.state.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        type="password"
                        value={this.state.confPassword}
                        name="confPassword" 
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        isInvalid={ this.state.errors.confPassword }
                    />
                    <Form.Control.Feedback type="invalid">
                            {this.state.errors.confPassword}
                    </Form.Control.Feedback>
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