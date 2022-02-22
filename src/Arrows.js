import React from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { CARDWIDTH, CARDBORDER, CARDCOUNTER } from "./cardConst";

const ArrowsContainer = styled.div`
  position: absolute;
  top: ${(props) => props.theme.screenHeight - props.theme.height}px;
  left: ${(props) => props.theme.width + CARDBORDER}px;
  width: ${CARDWIDTH}px;
  height: 50px;

  display: flex;
  justify-content: space-between:
  align-items: center;
  flex-direction: row;
`;

const ButtonArrow = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-color: white;
  border: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Arrows = (props) => {
  const moveLeft = () => {
    if (props.cardCenter > 0) {
      var newPosAll = [];
      var i;
      for (i = 0; i < CARDCOUNTER; i++) {
        var newPos = {};
        newPos["width"] =
          props.cardPos[i]["width"] + (CARDWIDTH + CARDWIDTH / 5);
        newPos["height"] = props.cardPos[i]["height"];
        newPosAll.push(newPos);
      }

      props.setCardPos(newPosAll);
      props.setCardCenter((cardCenter) => cardCenter - 1);
    }
  };

  const moveRight = () => {
    if (props.cardCenter < CARDCOUNTER - 1) {
      props.setCardCenter((cardCenter) => cardCenter + 1);
      var newPosAll = [];
      var i;
      for (i = 0; i < CARDCOUNTER; i++) {
        var newPos = {};
        newPos["width"] =
          props.cardPos[i]["width"] - (CARDWIDTH + CARDWIDTH / 5);
        newPos["height"] = props.cardPos[i]["height"];
        newPosAll.push(newPos);
      }

      props.setCardPos(newPosAll);
    }
  };

  return (
    <ArrowsContainer>
      <div className="arrow-container">
        <ButtonArrow onClick={moveLeft}>
          <FiArrowLeft size={60} />
        </ButtonArrow>
        <ButtonArrow onClick={moveRight}>
          <FiArrowRight size={60} />
        </ButtonArrow>
      </div>
    </ArrowsContainer>
  );
};

export default Arrows;
