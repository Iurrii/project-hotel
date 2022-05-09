import "./CardRoomDetailed.css";

import { Col, Row, Card, CardTitle } from "reactstrap";

export function CardRoomDetailed({ props }) {
  return (
    <Card className="card-detailed">
      <header>
        <CardTitle className="card-detailed__title">
          ¿Qué hay en este alojamiento?
        </CardTitle>
      </header>
      <Row className="card-detailed__items">
        {props &&
          props.map((item, index) => {
            if (item.isRender) {
              return (
                <Col
                  lg={{ size: 4, offset: 0 }}
                  md={{ size: 5, offset: 1 }}
                  sm={{ size: 12, offset: 0 }}
                  className="card-detailed__item" key={index}>
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </Col>
              );
            }
          })}
      </Row>
    </Card>
  );
}
