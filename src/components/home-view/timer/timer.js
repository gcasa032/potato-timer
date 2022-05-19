import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsPauseFill, BsFillPlayFill, BsFillStopFill} from "react-icons/bs";

class Timer extends React.Component {
  render() {
    return (
      <Container className="mw-100 align-middle">
        <Row className="text-center">
          <h1 style={{fontSize : "10vw"}}>25:00</h1>
        </Row>
        <Row className="justify-content-center">
          <Col
            as={ButtonToolbar}
            size="lg"
            md="auto"
          >
            <ButtonGroup
            size="lg"
            md="auto"
            className="me-2"
            >
              <Button variant="secondary">Pomodoro</Button>
              <Button variant="secondary">Break</Button>
              <Button variant="secondary">Long Break</Button>
            </ButtonGroup>
            <ButtonGroup
            size="lg"
            md="auto"
            >
              <Button variant="secondary"><BsFillStopFill size="1.2vw"/></Button>
              <Button variant="secondary"><BsFillPlayFill size="1.2vw"/></Button>  
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Timer;
