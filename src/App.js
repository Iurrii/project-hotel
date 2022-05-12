import "./App.css";

import { Container, Col } from "reactstrap";

import { CardRoomShort } from "./Components/CardRoomShort/CardRoomShort.jsx";
import {CardRoomDescription} from "./Components/CardRoomDescription/CardRoomDescription.jsx"
import {CardRoomRules} from "./Components/CardRoomRules/CardRoomRules.jsx";
import { CardRoomDetailed } from "./Components/CardRoomDetailed/CardRoomDetailed";
import { Bedrooms } from "./Components/Bedrooms/Bedrooms.jsx";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery.jsx"

function App() {
  let dataOfRoom = {
    type: "Alojamiento entero",
    location: "Oporesa del Mar",
    name: "El Cano-Marino d'Or for 4 personas",
    maxGuests: "4 viajeros",
    numberOfBedrooms: "2 dormitorios",
    numberOfBeds: "4 camas",
    numberOfwc: "2 baños",
    images: [
      "https://pro-dachnikov.com/uploads/posts/2021-10/1634567136_47-p-krasivii-bassein-foto-47.jpg",
      "https://phonoteka.org/uploads/posts/2021-05/1620195520_23-phonoteka_org-p-krasnii-fon-bez-risunka-25.jpg",
      "https://get.wallhere.com/photo/1920x1200-px-digital-lighting-hill-house-valley-1227522.jpg",
    ],
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
      mascotas: "Admite mascotas",
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


  const dataRoomDetailed = [
    { name: 'Kitchen', isRender: true, icon: 'icon_name' },
    { name: 'Pool', isRender: true, icon: 'icon_name' },
    { name: 'TV', isRender: true, icon: 'icon_name' },
    { name: 'Air conditioner', isRender: true, icon: 'icon_name' },
    { name: 'Detector CO2', isRender: true, icon: 'icon_name' },
    { name: 'WIFi', isRender: false, icon: 'icon_name' },
    { name: 'Pets allowed', isRender: true, icon: 'icon_name' },
    { name: 'Washer', isRender: true, icon: 'icon_name' },
    { name: 'Bath', isRender: true, icon: 'icon_name' },
    { name: 'Smoke detector', isRender: false, icon: 'icon_name' },
    
    
  ];

  const dataBedrooms = [
    { roomName: "Bedroom 1", doubleBed: 1},
    { roomName: "Bedroom 2", singleBed: 2 },
    { roomName: "Hall", sofa: 1 },
  ];

  const dataPhotoGallery = {
    name: "El Cano-Marino d'Or for 4 personas",
    location: { name: "Oporesa del Mar", link: 'https://ya.ru' },
    estimation: { value: 1, link: "https://ya.ru" },
    images: [
      "https://pro-dachnikov.com/uploads/posts/2021-10/1634567136_47-p-krasivii-bassein-foto-47.jpg",
      "https://phonoteka.org/uploads/posts/2021-05/1620195520_23-phonoteka_org-p-krasnii-fon-bez-risunka-25.jpg",
      "https://get.wallhere.com/photo/1920x1200-px-digital-lighting-hill-house-valley-1227522.jpg",
    ],
  };

  return (
    <>
      <Container>
        <Col
          lg={{ size: 8, offset: 2 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 12, offset: 0 }}
        >
          {/* <CardRoomShort props={dataOfRoom} />
          <CardRoomDescription props={dataOfRoom} /> */}
        </Col>
        {/* <PhotoGallery props={dataPhotoGallery} /> */}
        <Bedrooms props={dataBedrooms} />
        {/* <CardRoomDetailed props={dataRoomDetailed} />
        <CardRoomRules props={dataOfRoom} /> */}
      </Container>
    </>
  );
}

export default App;
