import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">React Learning</h1>;

const elem = <h3>React Element</h3>;
const number = 39;

const HeadingComponenet = () => (
  <div id="container">
    {elem}
    {number % 2 === 0 ? (
      <h2>{number} is Even Number</h2>
    ) : (
      <h2>{number} is Odd Number</h2>
    )}
    {Title()}
    <Title></Title>
    <Title />
    <h2>React Functional Component</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponenet />);
