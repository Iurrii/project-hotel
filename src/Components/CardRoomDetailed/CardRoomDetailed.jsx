import './CardRoomDetailed.css';



import { Col, Row, Card, CardTitle } from "reactstrap";

export function CardRoomDetailed({props}) {
  return (
    <Card>
      <header>
        <CardTitle>
          <h4>¿Qué hay en este alojamiento?</h4>
        </CardTitle>
      </header>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Card>
  );
};