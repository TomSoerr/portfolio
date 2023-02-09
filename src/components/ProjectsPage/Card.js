import React, { useState } from "react";
import "./Card.css";

const CardBox = (props) => {
  return <article className="project-card">{props.children}</article>;
};

const Image = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        src={props.image}
        alt="Picure of the project"
        className="picture"
      ></img>
    </a>
  );
};

const Name = (props) => {
  return <h2 className="name">{props.name}</h2>;
};

const Details = (props) => {
  return <p className="details">{props.details}</p>;
};

const Overlay = (props) => {
  return (
    <div className={props.class}>
      <Less onClick={props.onClick} />
      <div className="more-details">
        <h2>{props.name}</h2>
        {props.moreDetails.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

const Icon = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.icon} alt={props.iconAlt} className="icons"></img>
    </a>
  );
};

const More = (props) => {
  return (
    <button className="more" onClick={props.onClick}>
      Mehr erfahren
    </button>
  );
};

const Less = (props) => {
  return (
    <button className="less" onClick={props.onClick}>
      <img className="less-icon" src="/img/less.svg" alt="less"></img>
    </button>
  );
};

const Card = (props) => {
  const [overlayShown, setOverlayShown] = useState(false);
  const [contentShown, setContentShown] = useState(true);
  const [willMove, setWillMove] = useState(false);

  const hideOverlay = () => {
    setContentShown(true);
    setWillMove(true);
    setTimeout(() => {
      setWillMove(false);
      setOverlayShown(false);
    }, 500);
  };

  const showOverlay = () => {
    setOverlayShown(true);
    setTimeout(() => {
      setContentShown(false);
    }, 500);
  };

  return (
    <CardBox>
      <div
        className={
          contentShown ? "project-card-content" : "project-card-content hidden"
        }
      >
        <Image link={props.imageLink} image={props.image} />
        <div className="icons-container">
          <Name name={props.name} />
          {props.icons.map((icon, index) => {
            return (
              <Icon
                key={index}
                link={icon.iconLink}
                icon={icon.icon}
                iconAlt={icon.iconAlt}
              />
            );
          })}
        </div>
        <Details details={props.details} />
        <More onClick={showOverlay} />
      </div>

      {overlayShown && (
        <Overlay
          name={props.name}
          class={
            willMove ? "project-card-overlay move" : "project-card-overlay"
          }
          onClick={hideOverlay}
          moreDetails={props.moreDetails}
        />
      )}
    </CardBox>
  );
};

export { Card, Icon };
