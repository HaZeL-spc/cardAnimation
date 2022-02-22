import React from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { CARDWIDTH, CARDBORDER, CARDCOUNTER, ANGLE, RADIUS } from "./cardConst";

const ArrowsContainer = styled.div`
  position: absolute;
  top: ${(props) => props.theme.screenHeight - props.theme.height}px;
  left: ${(props) => props.theme.width + CARDBORDER}px;
  width: ${CARDWIDTH}px;
  height: 50px;

  // display: flex;
  // justify-content: space-between:
  // align-items: center;
  // flex-direction: row;
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
      props.setCardCenter((cardCenter) => cardCenter - 1);
    }
    //   var newPosAll = [];
    //   var i;
    //   for (i = 0; i < CARDCOUNTER; i++) {
    //     var newPos = {};
    //     newPos["width"] =
    //       window.innerWidth / 2 -
    //       CARDWIDTH / 2 -
    //       RADIUS *
    //         Math.cos(Math.PI / 2 + (Math.PI * (i + 1 - props.cardCenter)) / 15);
    //     newPos["height"] =
    //       window.innerHeight / 4 +
    //       RADIUS -
    //       RADIUS *
    //         Math.sin(Math.PI / 2 + ((i + 1 - props.cardCenter) * Math.PI) / 15);
    //     //console.log(i - props.cardCenter);
    //     newPos["angle"] = props.cardPos[i]["angle"] + (Math.PI / ANGLE) * 180;
    //     newPosAll.push(newPos);
    //   }

    //   props.setCardPos(newPosAll);
    // }
  };

  const moveRight = () => {
    if (props.cardCenter < CARDCOUNTER - 1) {
      props.setCardCenter((cardCenter) => cardCenter + 1);
    }
    //   var newPosAll = [];
    //   var i;
    //   for (i = 0; i < CARDCOUNTER; i++) {
    //     var newPos = {};
    //     newPos["width"] =
    //       window.innerWidth / 2 -
    //       CARDWIDTH / 2 -
    //       RADIUS *
    //         Math.cos(Math.PI / 2 + (Math.PI * (i - 1 - props.cardCenter)) / 15);
    //     newPos["height"] =
    //       window.innerHeight / 4 +
    //       RADIUS -
    //       RADIUS *
    //         Math.sin(Math.PI / 2 + ((i - 1 - props.cardCenter) * Math.PI) / 15);

    //     //console.log(newPos["angle"], newPos["angle"] + (Math.PI / ANGLE) * 180);
    //     newPos["angle"] = props.cardPos[i]["angle"] - (Math.PI / ANGLE) * 180;
    //     newPosAll.push(newPos);
    //   }

    //   props.setCardPos(newPosAll);
    // }
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
