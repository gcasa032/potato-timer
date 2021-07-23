import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Register(props){
    return (
        <Card.Body className="text-center">
            <Card.Title as="h3">
                Register
            </Card.Title>
            <hr/>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-2" controlId="formUsername">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Card.Body>
    );
}

export default Register;