import React from "react";
import styled from "styled-components";
import { CARDHEIGHT, CARDWIDTH, CARDBORDER, ICONSIZE } from "./cardConst";
import {
  DiPython,
  DiBootstrap,
  DiCss3,
  DiDjango,
  DiGit,
  DiHtml5,
  DiJavascript,
  DiReact,
} from "react-icons/di";

const CardElement = styled.div`
  position: absolute;
  top: ${(props) => {
    console.log(props.theme);
    return props.theme.height;
  }}px;
  left: ${(props) => props.theme.width}px;
  height: ${CARDHEIGHT}px;
  width: ${CARDWIDTH}px;
  border: ${CARDBORDER}px solid black;
  border-radius: 20px;
  transform: rotate(${(props) => props.theme.angle}deg);
  // transition: top 0.5s ease;
  // transition: left 0.5s ease;
  // transition: transform 0.5s ease;
  transition: 0.5s ease;
`;

const Card = (props) => {
  const icons = [
    <DiPython size={ICONSIZE}></DiPython>,
    <DiDjango size={ICONSIZE}></DiDjango>,
    <DiBootstrap size={ICONSIZE}></DiBootstrap>,
    <DiCss3 size={ICONSIZE}></DiCss3>,
    <DiHtml5 size={ICONSIZE}></DiHtml5>,
    <DiJavascript size={ICONSIZE}></DiJavascript>,
    <DiReact size={ICONSIZE}></DiReact>,
    <DiGit size={ICONSIZE}></DiGit>,
  ];

  const icon = icons[props.index];

  return (
    <CardElement>
      <div className="card-container" id={`card-${props.index}`}>
        {/* <h1 className="card-number">{props.index}</h1> */}
        {icon}
      </div>
    </CardElement>
  );
};

export default Card;
