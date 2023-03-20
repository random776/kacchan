import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  return (
    <div className="comp">
      <div className="box">
        <AutoPlaySwipeableViews>
          <div>
            <img src="./pictures/apple.jpeg" alt="りんご" />
          </div>
          <div>
            <img src="./pictures/chikurin.jpeg" alt="竹林" />
          </div>
          <div>
            <img src="./pictures/flower.jpg" alt="花" />
          </div>
          <div>
            <img src="./pictures/funabashi.jpg" alt="駅" />
          </div>
          <div>
            <img src="./pictures/sakura.jpeg" alt="桜" />
          </div>
          <div>
            <img src="./pictures/utokyo.jpeg" alt="東大" />
          </div>
          <div>
            <img src="./pictures/yello.jpeg" alt="黄色い花" />
          </div>
        </AutoPlaySwipeableViews>
      </div>
    </div>
  );
}

export default App;
