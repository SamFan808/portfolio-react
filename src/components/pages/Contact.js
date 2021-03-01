import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import resume from "../../Assets/resume_v6_1.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm={4} xs={12}>
          <Card>
            <Card.Body>
              <h2>Contact Me</h2>
              <h4>303.725.6329</h4>
              <h4>samisfan@msn.com</h4>
              <a href={resume} download="resume_v6_1.pdf">
                <FontAwesomeIcon icon={faFile} className="icon" />
                <span className="resume"> resume-pdf format</span>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
