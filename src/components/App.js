/* eslint-disable react/jsx-pascal-case */
import "../Style/App.css";
import "../Style/Mobile_Light.css";
import "../Style/Dark_Single_button.css";
import "../Style/Light_Single_button.css";

import Mobile from "./dark_mobile_card.js";
import Light_Mobile from "./Light_mobile_card.js";
import Dark_Single_Button from "./Dark_Single_button.js";
import Light_Single_Button from "./Light_Single_button.js";

function App() {
  return (
    <div>
      <Mobile />
      <Light_Mobile />
      <Dark_Single_Button />
      <Light_Single_Button />
    </div>
  );
}

export default App;
