import React from "react";
import WritingEffect from "../Effects/WritingEffect";
import "./Hero.css";
import { scroller } from "react-scroll";

const Hero = (props) => {
  return (
    <div className="wrapper">
      <img alt="Background" className="hero-bg" src="/img/test3.svg"></img>
      <header className="hero">
        <div className="filter"></div>
        <WritingEffect text={props.headline}></WritingEffect>
        {props.box && props.onlyElement && (
          <div className="hero-box">{props.box}</div>
        )}

        {!props.onlyElement && (
          <a
            href="#scroll-to"
            className="down-arrow"
            onClick={(e) => {
              e.preventDefault();
              scroller.scrollTo("content", {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -props.navHeight(),
              });
            }}
          >
            <img
              src="/img/less.svg"
              className="hero-icon"
              alt="show more icon"
            />
          </a>
        )}
      </header>
    </div>
  );
};

export default Hero;
