import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

//eslint-disable-next-line
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.baseState = this.state;
  }

  resetForm() {
    this.setState(this.baseState);
  }

  getErrors() {
    let errors = {};

    if (!validEmailRegex.test(this.state.email)) {
      errors.email = "Email is not valid";
    }

    if (this.state.password.length < 1) {
      errors.password = "You must enter a password";
    }

    return errors;
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if (this.state.errors[name]) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, [name]: null },
      }));
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const errors = this.getErrors();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      try {
        const url = "http://localhost:8080/api/auth";
        const user = {
          email: this.state.email,
          password: this.state.password,
        };
        const { data: res } = await axios.post(url, user);
        localStorage.setItem("token", res.data);
        window.location.reload(false);
      } catch (error) {
        console.log(error);
        if (error.response.status == 401)
          this.setState({ errors: { login: "Invalid Email or Password" } });
        else if (error.response.status == 400)
          this.setState({
            errors: { login: "Please verify your credentials" },
          });
        else this.setState({ errors: { login: "Server Error" } });
      }
    }
  }

  render() {
    let loginError = this.state.errors.login ? true : false;

    return (
      <Card.Body className="text-center">
        <Card.Title as="h3" className="text-dark">Login </Card.Title> <hr />
        <Alert show={loginError} variant="danger">
          {this.state.errors.login}
        </Alert>
        <Form noValidate onSubmit={this.handleSubmit} className="d-grid gap-2">
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email"
              isInvalid={this.state.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {this.state.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              isInvalid={this.state.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {this.state.errors.password}
            </Form.Control.Feedback>
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
