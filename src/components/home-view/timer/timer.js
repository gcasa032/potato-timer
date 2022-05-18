import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Timer extends React.Component {
  render() {
    return (
      <Container className="mw-100 align-middle">
        <Row className="justify-content-center mt-5">
          <Col
            as={ButtonGroup}
            size="lg"
            className="m-3"
            md="auto"
            ria-label="Basic example"
          >
            <Button variant="secondary">Pomodoro</Button>
            <Button variant="secondary">Break</Button>
            <Button variant="secondary">Long Break</Button>
          </Col>
        </Row>
        <Row className="text-center">
          <h1 className="display-1"><strong>25:00</strong></h1>
        </Row>
      </Container>
    );
  }
}

export default Timer;
