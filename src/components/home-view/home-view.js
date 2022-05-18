import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsHouseFill, BsPersonFill, BsFillGearFill } from "react-icons/bs";

class HomeView extends React.Component {
  
  logout(){
    localStorage.clear("token");
    window.location.reload(false);
    }

  render() {

    return (
      <Container fluid>
        <Row className="justify-content-end">
            <Col as={ButtonGroup} className="m-3" md="auto" ria-label="Basic example">
              <Button variant="secondary">
                <BsHouseFill />
              </Button>
              <Button variant="secondary">
                <BsPersonFill />
              </Button>
              <Button variant="secondary">
                <BsFillGearFill />
              </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeView;
