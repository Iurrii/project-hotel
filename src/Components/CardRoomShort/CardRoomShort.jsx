import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";
import "./CardRoomShort.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export function CardRoomShort({ props }) {
  return (
    <Card className="card">
      <Row>
        <Col
          sm={{ size: 12, offset: 0 }}
          md={{ size: 12, offset: 0 }}
          xl={{ size: 4, offset: 0 }}
        >
          <div className="card__image-container">
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
                      <img src={item} alt={`image ${index}`} />
                    </SplideSlide>
                  );
                })}
            </Splide>
          </div>

          {/* <img className="card__image rounded-3" src={props.img} alt="" /> */}
        </Col>
        <Col
          sm={{ size: 0, offset: 0 }}
          md={{ size: 0, offset: 0 }}
          xl={{ size: 8, offset: 0 }}
        >
          <CardSubtitle className="text-muted">
            {props.type}piso&nbsp;en&nbsp;{props.location}
          </CardSubtitle>

          <CardTitle className="card__title">{props.name}</CardTitle>

          <hr className="card__horizontal-line text-muted" />

          <CardSubtitle className="card__listOfItems text-muted">
            <span>
              {props.maxGuests}
              &nbsp;&#183;&nbsp;
            </span>
            <span>
              {props.numberOfBedrooms}
              &nbsp;&#183;&nbsp;
            </span>
            <span>
              {props.numberOfBeds}
              &nbsp;&#183;&nbsp;
            </span>
            <span>{props.numberOfwc}</span>
          </CardSubtitle>
        </Col>
      </Row>
    </Card>
  );
}
