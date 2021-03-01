import React from "react";
import { Container, Card, Carousel } from "react-bootstrap"

function () {
  return (
    <Container fluid>
      <Row className="justify-content-left">
        <Col className="col-sm-6">
          <Card>
            <Card.Body>
              <h3> Recent web dev projects</h3>
              <h5>Employours</h5>
              <p>node.js, MySQL</p>
              <img
                src={props.projImages[0]}
                alt="employee app image"
                className="proj"
              />
              <a href="https://github.com/SamFan808/Employours/" target="blank">
                <i className="fas fa-file-code fa-lg"></i>
                <p className="portfolio"> link to repo</p>
              </a>
              <hr />

              <h5>Notational</h5>
              <p>node.js, express, javascript, html, css</p>
              <a
                href="https://afternoon-plateau-86859.herokuapp.com/ "
                target="blank"
              >
                <img
                  src="Assets/images/Screenshot hw_11-1.png"
                  alt="daily planner app"
                  className="proj"
                />
              </a>
              <a href="https://github.com/SamFan808/Notational" target="blank">
                <i className="fas fa-file-code fa-lg"></i>
                <p className="portfolio"> link to repo</p>
              </a>
              <hr />

              <h5>Chuck Roast</h5>
              <p>javascript, html, css</p>
              <a href="https://samfan808.github.io/Chuck_Roast/" target="blank">
                <img
                  src="Assets/images/ChuckRoast.png"
                  alt="project 1 image"
                  className="proj"
                />
              </a>
              <a href="https://github.com/SamFan808/Chuck_Roast" target="blank">
                <i className="fas fa-file-code fa-lg"></i>
                <p className="portfolio"> link to repo</p>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Carousel;
