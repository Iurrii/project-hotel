import "./App.css";
import { CardRoomOfHotel } from "./Components/CardRoomOfHotel/CardRoomOfHotel.jsx";
import { Container, Col } from "reactstrap";

function App() {
  let dataOfRoom = {
    type: "Alojamiento entero",
    location: "Oporesa dal Mar",
    name: "El Cano-Marino d'Or for 4 personas",
    maxGuests: "4 viajeros",
    numberOfBedrooms: "2 dormitorios",
    numberOfBeds: "4 camas",
    numberOfwc: "2 baños",
    img: "https://avatars.mds.yandex.net/i?id=42ac327b0e361695011c685422e14d14-5876729-images-thumbs&n=13&exp=1",
  };
  return (
    <>
      <Container>
        <Col
          lg={{ size: 8, offset: 2 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 12, offset: 0 }}
        >
          <CardRoomOfHotel props={dataOfRoom} />
          <CardRoomOfHotel props={dataOfRoom} />
          <CardRoomOfHotel props={dataOfRoom} />
          <CardRoomOfHotel props={dataOfRoom} />
        </Col>
      </Container>
    </>
  );
}

export default App;
