import React from "react";
import { render } from "react-dom";

myGlobal = 4;

function Hi() {
  debugger;
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
