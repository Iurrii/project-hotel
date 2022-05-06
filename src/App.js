import "./App.css";
import { CardRoomShort } from "./Components/CardRoomShort/CardRoomShort.jsx";
import {CardRoomDescription} from "./Components/CardRoomDescription/CardRoomDescription.jsx"
import {CardRoomRules} from "./Components/CardRoomRules/CardRoomRules.jsx";
import { Container, Col } from "reactstrap";
import { CardRoomDetailed } from "./Components/CardRoomDetailed/CardRoomDetailed";


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
    advantagesOfRoom: {
      title: "Piscina",
      subtitle: "Los huéspedes suelen buscar este servicio tan popular",
    },
    infoAboutHotel: {
      title: "Anfitrión con experencia",
      subtitle: "Sonia - Interhome Group tiene algo bueno:)",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur \
        excepturi, atque ipsa alias fugit, amet quo, iure assumenda vero ratione \
        pariatur ex at architecto molestias exercitationem! At ea rem et. \
        Accusantium corrupti aut, architecto natus voluptas laboriosam sint \
        blanditiis odio at molestiae, laborum reiciendis iste quasi vero \
        excepturi nesciunt, reprehenderit pariatur alias ipsa ab? Repudiandae \
        esse voluptates consequuntur minus ratione.",
    checkOut: "10:00",
    checkIn: { from: "16:00", to: "20:00" },
    admits: {
      smoke: "Prohibido fumar",
      parties: "No se admiten fiestas o eventos",
      mascotas: "Admite mascotas"
    },
    cleaningInfo:
      "Se aplican las pautas de Airbnb con respecto al distanciamiento \
      físico y otras cuestiones relacionadas con el coronavirus",
    paymentInfo:
      "Esta propiedad exide una fianza de 200€. Tendrás que pagarla \
    por separado por adelantado o cuando llegues al alojamiento",
    cancelationPolitics:
      "Añade las fechas de tu viaje para obtener los \
    detalies d cancelación de este alojamiento",
  };


  const dataRoomDetailed = {
    kitchen: true,
    pool: true,
    tv: true,
    airConditioning: true,
    detectorCO2: true,
    detectorSmoke: true,
    wifi: true,
    admiteMascotas: true,
    bath: true,
    washingMachine: true,
    


}

  return (
    <>
      <Container>
        <Col
          lg={{ size: 8, offset: 2 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 12, offset: 0 }}
        >
          {/* <CardRoomShort props={dataOfRoom} /> */}
          {/* <CardRoomDescription props={dataOfRoom} /> */}
        </Col>
        {/* <CardRoomRules props={dataOfRoom} /> */}
        <CardRoomDetailed props={dataRoomDetailed} />
      </Container>
    </>
  );
}

export default App;
