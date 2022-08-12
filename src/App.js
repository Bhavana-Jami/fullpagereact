import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <First/>
          <Second/>
          <Third/>
        </div>
      );
    }}
  />
);
export default App;