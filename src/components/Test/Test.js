import React, { useState } from "react";
import BuggerMenu from "../BuggerMenu/BuggerMenu";

function Test() {
  const [BugMenu, setBugMenu] = useState(false);

  const ClickBug = () => {
    setBugMenu(!BugMenu);
  };
  return (
    <div>
      <button onClick={ClickBug}>Click</button>

      {BugMenu ? (
        <div
          style={{
            height: "700px",
            width: "500px",
            backgroundColor: "darkgoldenrod",
          }}
        >
          <BuggerMenu />
          <div>
            <h3>Home</h3>
            <h3>About</h3>
          </div>
        </div>
      ) : (
        <h1>No Way</h1>
      )}
    </div>
  );
}

export default Test;
