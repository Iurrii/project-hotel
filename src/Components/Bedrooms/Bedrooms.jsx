import "./Bedrooms.css";
import { Col, Row, Card, CardTitle } from "reactstrap";
import { Bedroom } from "../Bedroom/Bedroom.jsx";

export function Bedrooms({ props }) {
  return (
    <Card className="bedrooms">
      <header>
        <CardTitle className="bedrooms__title">Where will you sleep?</CardTitle>
      </header>
      <Row>
        {props && props.map((item, index) => {
          return (<Bedroom key={index} props={item} />)        
        })}
      </Row>
    </Card>
  );
}
