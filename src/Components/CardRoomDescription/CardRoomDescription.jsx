import "./CardRoomDescription.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TiStarOutline } from "react-icons/ti";
import { HiOutlineBookmark, HiOutlineChevronRight } from "react-icons/hi";

import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React, { useState} from "react";

export function CardRoomDescription({ props }) {

  let [isDescriptionShowed, setIsDescriptionShowed] = useState(false);

  return (
    <Card className="card-description">
      <header className="card-description__header">
        <CardTitle className="card-description__title">
          {props.type}:&nbsp;piso.<br></br>
          {props.name}
        </CardTitle>
        <CardSubtitle className="card-description__listOfItems text-muted">
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
      </header>

      <div className="card-description__features">
        {/*---advantages---*/}
        <div className="card-description__feature">
          <HiOutlineBookmark size={25} />
          <div>
            <CardTitle className="card-description__feature-title">
              {props.advantagesOfRoom.title}
            </CardTitle>
            <CardSubtitle className="text-muted">
              {props.advantagesOfRoom.subtitle}
            </CardSubtitle>
          </div>
        </div>

        {/*---infoAboutHotel---*/}
        <div className="card-description__feature">
          <TiStarOutline size={25} />
          <div>
            <CardTitle className="card-description__feature-title">
              {props.infoAboutHotel.title}
            </CardTitle>
            <CardSubtitle className="text-muted">
              {props.infoAboutHotel.subtitle}
            </CardSubtitle>
          </div>
        </div>
      </div>
      <div className="card-description__description">
        <CardText className="">
          {isDescriptionShowed
            ? props.description
            : `${props.description.substring(0, 300)}...`}
        </CardText>
        
        {!isDescriptionShowed && (
          <div className="card-description__link-container">
            <a href="#" onClick={() => setIsDescriptionShowed(true)}>
              Mostrar más
              <HiOutlineChevronRight />
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
