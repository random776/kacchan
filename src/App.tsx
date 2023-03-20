import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Ringo from "/apple.jpeg";
import Chikurin from "/chikurin.jpeg";
import Flower from "/apple.jpg";
import Funabashi from "/funabashi.jpg";
import Sakura from '/sakura.jpeg'
import Utokyo from '/utokyo.jpeg'
import Yellow from '/yello.jpeg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  return (
    <div className="comp">
      <div className="box">
        <AutoPlaySwipeableViews>
          <div>
            <img src={Ringo} alt="りんご" />
          </div>
          <div>
            <img src={Chikurin} alt="竹林" />
          </div>
          <div>
            <img src={Flower} alt="花" />
          </div>
          <div>
            <img src={Funabashi} alt="駅" />
          </div>
          <div>
            <img src={Sakura} alt="桜" />
          </div>
          <div>
            <img src={Utokyo} alt="東大" />
          </div>
          <div>
            <img src={Yellow} alt="黄色い花" />
          </div>
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

export default App;
