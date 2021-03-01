import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { images } from "../components/images";

function Photography() {
  return (
    <Card className="carousel">
      <h2>Personal Photography</h2>
      <Carousel>
        {images.map((photos) => (
          <Carousel.Item>
            <img
              key={photos.id}
              className="d-block w-100"
              src={photos.image}
              alt={photos.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
}

export default Photography;
