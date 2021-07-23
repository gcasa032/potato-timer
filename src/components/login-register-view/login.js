import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login(props){
    return (
        <Card.Body className="text-center">
            <Card.Title as="h3">
                Login
            </Card.Title>
            <hr/>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Card.Body>
    );
}

export default Login;