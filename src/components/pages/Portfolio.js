import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";
import Photography from "../Photography";

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <h2>Recent Web Dev Projects</h2>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                language={project.language}
                url={project.url}
                deployed={project.deployed}
              />
            ))}
          </Card>
        </Col>
        <Col>
          <Photography />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
