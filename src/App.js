import React, {useState} from "react";

//Components
import Header from "./components/Header";

const App = () =>  {
  const [text, setText] = useState("No Dark Mode");
  return (
    <div className="App">
      <Header titulo = "gato1" item = "item1" classCss = "normal-header" setText = {setText}/> 
      <h2>{text}</h2>
    </div>
  );
}

export default App;
