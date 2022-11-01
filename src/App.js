import "./App.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState, useLayoutEffect } from "react";
import { CARDWIDTH, CARDCOUNTER, RADIUS, ANGLE } from "./cardConst";
import Card from "./Card";
import Arrows from "./Arrows";

function App() {
  const [cardPos, setCardPos] = useState([]);
  const [center, setCenter] = useState({});
  const [cardCenter, setCardCenter] = useState(0);

  const changeCardPos = (e) => {
    var newCardPos = [];
    var centerNew = {};

    for (var i = 0; i < CARDCOUNTER; i++) {
      var newPos = {};

      newPos["width"] =
        window.innerWidth / 2 -
        CARDWIDTH / 2 -
        RADIUS * Math.cos(Math.PI / 2 + (Math.PI * (i - cardCenter)) / 15);

      //console.log(cardCenter);

      newPos["height"] =
        window.innerHeight / 4 +
        RADIUS -
        RADIUS * Math.sin(Math.PI / 2 + (Math.PI * (i - cardCenter)) / 15);

      newPos["angle"] = (((i - cardCenter) * Math.PI) / ANGLE) * 180;
      //console.log(newPos);
      //newPos["angle"] = 0;
      //console.log((((i - cardCenter) * Math.PI) / 60) * 180);
      // if (i === cardCenter) {
      //   newPos["width"] = newPos["width"] + INCREASMENT;
      //   newPos["height"] = newPos["height"] + INCREASMENT;
      // }

      newCardPos.push(newPos);
    }

    centerNew["width"] = window.innerWidth / 2 - CARDWIDTH / 2;
    centerNew["height"] = 100;
    centerNew["screenHeight"] = window.innerHeight;
    console.log(centerNew);

    setCenter(centerNew);
    setCardPos(newCardPos);
  };

  useLayoutEffect(() => {
    changeCardPos();
    window.addEventListener("resize", changeCardPos);
    return () => {
      window.removeEventListener("resize", changeCardPos);
    };
  }, [cardCenter]);

  console.log(cardPos);

  return (
    <div className="App">
      {cardPos.length > 0 &&
        cardPos.map((element, index) => (
          <ThemeProvider key={index} theme={element}>
            <Card index={index} />
          </ThemeProvider>
        ))}
      {center["width"] && (
        <ThemeProvider theme={center}>
          <Arrows
            cardPos={cardPos}
            setCardPos={setCardPos}
            cardCenter={cardCenter}
            setCardCenter={setCardCenter}
          />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
