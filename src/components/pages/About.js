import React from "react";
import profilePic from "../../Assets/images/profilepic_2.jpg";
import { Container, Card, Col, Image, Row } from "react-bootstrap";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col sm={8} xs={12}>
          <Card>
            <Card.Body>
              <h2>About Me</h2>
              <hr />
              <Image src={profilePic} className="img-fluid" alt="profile" />
              <p>
                Sam was born on the island of O'ahu in the State of Hawaii. He
                was raised by native geese, known in Hawaiian as the Nene.
                Though the Hawaiian goose resembles the Canadian Goose, the
                Hawaiian goose does not prefer pineapple on their pizzas.
                Despite having been raised by geese, Sam does not currently show
                any traits or habits typical of Hawaiian geese. However, they
                would not refuse the addition of Canadian Bacon. Sam left the
                sunny shores of Hawaii for the snowy slopes of Colorado. He
                attended college for several years, and attained both
                undergraduate and graduate degrees. He is for the most part a
                fully functional human adult. He currently resides in Denver,
                Colorado and frequently sees several of the local Canadian
                Geese, and often will wave to them, bringing back fond memories
                of his childhood.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
