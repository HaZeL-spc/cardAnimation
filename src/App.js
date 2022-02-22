import "./App.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { CARDHEIGHT, CARDWIDTH, INCREASMENT, CARDCOUNTER } from "./cardConst";
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
        window.innerWidth / 2 - CARDWIDTH / 2 + i * (CARDWIDTH + CARDWIDTH / 5);
      newPos["height"] = window.innerHeight / 2 - CARDHEIGHT / 2;

      // if (i === cardCenter) {
      //   newPos["width"] = newPos["width"] + INCREASMENT;
      //   newPos["height"] = newPos["height"] + INCREASMENT;
      // }

      newCardPos.push(newPos);
    }

    centerNew["width"] = window.innerWidth / 2 - CARDWIDTH / 2;
    centerNew["height"] = 100;
    centerNew["screenHeight"] = window.innerHeight;

    setCenter(centerNew);
    setCardPos(newCardPos);
  };

  useEffect(() => {
    changeCardPos();
    window.addEventListener("resize", changeCardPos);
    return () => {
      window.removeEventListener("resize", changeCardPos);
    };
  }, []);

  return (
    <div className="App">
      {cardPos.map((element, index) => (
        <ThemeProvider key={index} theme={element}>
          <Card index={index} cardCenter={cardCenter} />
        </ThemeProvider>
      ))}
      <ThemeProvider theme={center}>
        <Arrows
          cardPos={cardPos}
          setCardPos={setCardPos}
          cardCenter={cardCenter}
          setCardCenter={setCardCenter}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
