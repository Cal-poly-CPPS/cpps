import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import SideNav from "./SideNav";

function App(props, state) {
/*
  const [showResult, setshowresult] = React.useState(true);
  const onClick = () => setshowresult(!showResult);

  const Tab = () => (
    <div>
      <div>hi</div>
    </div>
  );
*/
  

  return (
    /*
    <div className="App">
      <div style={{ color: "red " }}>Hello World!</div>
      <button onClick={onClick} />
      {showResult ? <Tab /> : null}
    </div>
    */
    <>
    <div>
      <SideNav/>
    </div>
    </>
  );
}

export default App;