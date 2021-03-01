import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import images from "../images.json";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Recent Web Development Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              language={project.language}
            />
          ))}
        </Col>
        <Col>stuff</Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
