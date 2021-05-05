import React from "react";
import profilePic from "../../Assets/images/profilepic_2.jpg";
import { Container, Card, Col, Image, Row } from "react-bootstrap";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} xs={12}>
          <Card>
            <Card.Body>
              <h2>About Me</h2>
              <hr />
              <Image src={profilePic} className="img-fluid" alt="profile" />
              <p>
                Hi! I’m Sam, I live in Denver, CO and I like to make things. I’m
                a full stack web developer and fan of making things. In a
                previous life, I was an architect, i.e. buildings and drawings.
                The words code, developer, and engineer had very different
                meanings in the AEC (Architecture, Engineering, Construction)
                industry. Recently, I decided to take the opportunity to
                re-evaluate life and pursue a career in web development, with a
                kick start from a full-stack bootcamp from DU. When I’m not
                coding, I like to spend time baking bread, cooking, making my
                family laugh, mountain biking, photographing things, and
                building tiny keyboards.
                {/* Sam was born on the island of O'ahu in the State of Hawaii. He
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
                of his childhood. */}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h5>dev skills:</h5>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>GitHub</li>
                </Col>
                <Col>
                  <h5>other:</h5>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Lightroom</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe InDesign</li>
                  <li>Affinity Designer</li>
                  <li>Revit</li>
                  <li>AutoCad</li>
                  <li>SketchUp</li>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
