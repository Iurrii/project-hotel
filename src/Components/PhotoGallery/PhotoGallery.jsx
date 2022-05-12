import { Card, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
import "./PhotoGallery.css";
// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export function PhotoGallery({ props }) {
  return (
    <Card className="photo-gallery">
      <CardTitle className="photo-gallery__title">{props.name}</CardTitle>
      <CardSubtitle className="photo-gallery__subtitle text-muted">
        <a className="text-muted" href={props.estimation.link}>
          {props.estimation.value}&nbsp;estimation
        </a>
        &nbsp;&#183;&nbsp;
        <a className="text-muted" href={props.location.link}>
          {" "}
          {props.location.name}
        </a>
      </CardSubtitle>
      <Row>
        <Col
          lg={{ size: 8, offset: 2 }}
          md={{ size: 12, offset: 0 }}
          sm={{ size: 12, offset: 0 }}
        >
          <Splide
            aria-label="Gallery"
            options={{
              rewind: true,
            }}
          >
            {props.images &&
              props.images.map((item, index) => {
                return (
                  <SplideSlide key={index}>
                    <img
                      src={item}
                      alt={`image ${index}`}
                    />
                  </SplideSlide>
                );
              })}
          </Splide>
        </Col>
      </Row>
    </Card>
  );
}
