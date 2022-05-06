import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
import "./CardRoomShort.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function CardRoomShort({ props }) {
  return (
    <Card className="card">
      <CardBody className="row">
        <Col
          sm={{ size: 10, offset: 1 }}
          md={{ size: 5, offset: 0 }}
          xl={{ size: 6, offset: 0 }}
          className="card__image-container"
        >
          <img className="card__image rounded-3" src={props.img} alt="" />
        </Col>
        <Col
          sm={{ size: 10, offset: 1 }}
          md={{ size: 7, offset: 0 }}
          xl={{ size: 6, offset: 0 }}
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
      </CardBody>
    </Card>
  );
}
