/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import "./Style/Mobile_Light.css";
import "./Style/Dark_Single_button.css";
import "./Style/Light_Single_button.css";

import Mobile from "./components/dark_mobile_card.js";
import Light_Mobile from "./components/Light_mobile_card.js";
import Dark_Single_Button from "./components/Dark_Single_button.js";
import Light_Single_Button from "./components/Light_Single_button.js";

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
