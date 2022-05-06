import "./CardRoomRules.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MdAccessTimeFilled, MdCleanHands } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { FaQuestionCircle, FaPaw } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdSmokeFree } from "react-icons/md";

import { Col, Row, Card, CardTitle } from "reactstrap";
// import { CustomLink } from "../CustomLink/CustomLink.jsx";


export function CardRoomRules({ props }) {
  return (
    <Card className="card-rules">
      <header className="card-rules__header">
        <CardTitle>
          <h4 className="card-rules__title">Qué debes saber</h4>
        </CardTitle>
      </header>
      <Row>
        <Col className="card-rules__col">
          <h6 className="card-rules__subtitle">Normas de la casa</h6>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <MdAccessTimeFilled size={16} />
            </div>
            <p>
              Llegada:&nbsp;{props.checkIn.from}&nbsp;a&nbsp;{props.checkIn.to}
            </p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <MdAccessTimeFilled size={16} />
            </div>
            <p>Salida:&nbsp;{props.checkOut}</p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <MdSmokeFree size={16} />
            </div>
            <p>{props.admits.smoke}</p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <GiPartyPopper size={16} />
            </div>
            <p>{props.admits.parties}</p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <FaPaw size={16} />
            </div>
            <p>{props.admits.mascotas}</p>
          </div>
          {/*style for this => .card-rules__col>:last-child*/}
          {/* <CustomLink props={{ ancor: "Mostar más", address: "#" }} /> */}
        </Col>
        <Col className="card-rules__col">
          <h6 className="card-rules__subtitle">Salud y sequridad</h6>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <MdCleanHands size={16} />
            </div>
            <p>{props.cleaningInfo}</p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <FaQuestionCircle size={16} />
            </div>
            <p>
              No consta que el alojamiento tenga un detector de&nbsp;monóxido de
              carbono.
            </p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <FaQuestionCircle size={16} />
            </div>
            <p>No consta que el alojamiento tenga un detector de&nbsp;humo.</p>
          </div>
          <div className="card-rules__rule">
            <div className="card-rules__rule-icon">
              <AiFillCreditCard size={16} />
            </div>
            <p>{props.paymentInfo}</p>
          </div>
          {/*style for this => .card-rules__col>:last-child*/}
          {/* <CustomLink props={{ ancor: "Mostar más", address: "#" }} /> */}
        </Col>
        <Col className="card-rules__col">
          <h6 className="card-rules__subtitle">Politica de cancalación</h6>
          <div className="card-rules__rule">
            <p>{props.cancelationPolitics}</p>
          </div>
          {/*style for this => .card-rules__col>:last-child*/}
          {/* <CustomLink props={{ ancor: "Añade fechas", adress: "#" }} /> */}
        </Col>
      </Row>
    </Card>
  );
}
