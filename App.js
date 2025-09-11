import React from "react";
import ReactDOM from "react-dom/client";

const logo = (
  <img src="https://th.bing.com/th/id/R.5eb1959636a370b661bc91940fe49cee?rik=DiotHJlkKQR6dg&riu=http%3a%2f%2fwww.datwebdigital.com%2fDWD%2fwp-content%2fuploads%2f2012%2f06%2flogo-design.jpg&ehk=fa8lsC0cm1nXH1dOqP%2f9dC1ohF3%2bcobEoqkMOaxrV2I%3d&risl=&pid=ImgRaw&r=0" />
);

const searchBar = <input type="search" />;

const userIcon = (
  <img
    src="https://th.bing.com/th/id/OIP.Ln_qrnMeEWlR-sIzaHn2fAHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    alt="user-icon"
  />
);

const Header = () => (
  <div className="header">
    {logo}
    {searchBar}
    {userIcon}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
