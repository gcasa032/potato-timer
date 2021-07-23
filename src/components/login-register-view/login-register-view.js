import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import Login from './login';
import Register from './register';



class LoginRegisterView extends React.Component {

    constructor(props){
        super(props);
        this.state={ 
            showLogin: true
        }
        this.setView = this.setView.bind(this);
    }

    setView(){
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
          }));
    }

    render(){

        const showLogin = this.state.showLogin;
        let cardBody;
        if (showLogin){
            cardBody = <Login/>;
        } else {
            cardBody = <Register/>;
        }

        return (
            <Container>
                <Row>
                    <h1 className="text-white text-center mt-3">PotatoTimer</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Card className="mt-3">
                            <Card.Header>
                                <Nav variant="tabs" fill justify defaultActiveKey="login">
                                <Nav.Item>
                                    <Nav.Link disabled={this.state.showLogin} eventKey="login" onSelect={this.setView}>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link disabled={!this.state.showLogin} eventKey="register" onSelect={this.setView}>Register</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Card.Header>
                            {cardBody}
                        </Card> 
                    </Col>
                      
                </Row>
            </Container>
        )
    }
}

export default LoginRegisterView;