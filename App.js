import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 className="head" tabIndex="5">
    My name is sushanth
  </h1>
);

console.log(heading);

//React Component

const HeadingComponenet = () => {
  return <h1>Learning React</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponenet />);
