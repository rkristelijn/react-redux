import React from "react";
import { render } from "react-dom";

import CreateClass from "./CreateClass";

function Hi() {
  debugger;
  return (
    <div>
      <p>Hi.</p>
      <CreateClass />
    </div>
  );
}

render(<Hi />, document.getElementById("app"));
