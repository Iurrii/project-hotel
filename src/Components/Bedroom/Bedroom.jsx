import "./Bedroom.css"

import { Col, Row, Card, CardTitle, CardSubtitle } from "reactstrap";
import { MdBedroomChild, MdBedroomParent, MdChair } from "react-icons/md";

export function Bedroom({ props }) {

  function getIconToPage(value, icon) {
    let content = [];
      for (let i = 0; i < value; i++) {
        content.push(<span key={i}>{icon}</span>);
    }
    return content;
  }

  return (
    <Col
      lg={{ size: 3, offset: 0 }}
      md={{ size: 4, offset: 0 }}
      sm={{ size: 12, offset: 0 }}
    >
      <Card className="bedroom">

        <div className="bedroom__icons">
          {props.doubleBed &&
            getIconToPage(props.doubleBed, <MdBedroomParent size={30} />)}
          {props.singleBed &&
            getIconToPage(props.singleBed, <MdBedroomChild size={30} />)}
          {props.sofa && getIconToPage(props.sofa, <MdChair size={30} />)}
        </div>

        <CardTitle className="bedroom__title">{props.roomName}</CardTitle>

        <CardSubtitle className="text-muted">
          {props.doubleBed && `${props.doubleBed} double bed(s)`}
          {props.singleBed && `${props.singleBed} single bed(s)`}
          {props.sofa && `${props.sofa} sofa(s)`}
        </CardSubtitle>
      </Card>
    </Col>
  );
}
