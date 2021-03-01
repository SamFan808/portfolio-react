import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import projects from "../projects.json";
import images from "../images.json";

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Portfolio Page</h1>
              {projects.map((project) => (
                <Card.Body
                  key={project.id}
                  title={project.alt}
                  image={project.src}
                  alt={project.alt}
                />
              ))}
              <p>stuff</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
