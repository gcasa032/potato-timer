import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsHouseFill, BsPersonFill, BsFillDoorClosedFill } from "react-icons/bs";

import Timer from './timer/timer';

class HomeView extends React.Component {
  
  logout(){
    localStorage.clear("token");
    window.location.reload(false);
    }

  render() {

    return (
      <Container fluid>
        <Row className="justify-content-end">
          <Col
            as={ButtonGroup}
            className="m-3"
            md="auto"
            ria-label="Basic example"
          >
            <Button variant="secondary" className="d-flex justify-content-center align-items-center">
              <BsHouseFill className="my-1"/>
            </Button>
            <Button variant="secondary" className="d-flex justify-content-center align-items-center">
              <BsPersonFill />
            </Button>
            <Button variant="secondary" className="d-flex justify-content-center align-items-center" onClick={this.logout.bind(this)}>
              <BsFillDoorClosedFill />
            </Button>
          </Col>
        </Row>
        <Timer />
      </Container>
    );
  }
}

export default HomeView;
