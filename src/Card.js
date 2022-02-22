import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CARDHEIGHT, CARDWIDTH, CARDBORDER } from "./cardConst";

const CardElement = styled.div`
  position: absolute;
  top: ${(props) => props.theme.height}px;
  left: ${(props) => props.theme.width}px;
  height: ${CARDHEIGHT}px;
  width: ${CARDWIDTH}px;
  border: ${CARDBORDER}px solid black;
  border-radius: 20px;
  transition: 0.5s ease;
`;

const Card = (props) => {
  return (
    <CardElement>
      <div className="card-container" id={`card-${props.index}`}>
        <h1 className="card-number">{props.index}</h1>
      </div>
    </CardElement>
  );
};

export default Card;
