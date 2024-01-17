import React, { useState } from "react";
import "./Navbar.css";
// import { a } from "react--dom";
import NAVITEMS from "../../configurations/Navbar/Navbar";
import { NavDropdown } from "react-bootstrap";

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  const hoverFunction = (index) => {
    setDisplay(index);
  };
  const hoverLeaveFunction = () => {
    setDisplay(false);
  };
  return (
    <div className="Navbar">
      <div className="navlinks">
        {NAVITEMS.map((item, index) => {
          return item.submenu ? (
            <NavDropdown title={item.title}
                         className="navtitles" 
                         id="basic-nav-dropdown"
                         show={display === index ? true : false}
                         onMouseEnter={() => hoverFunction(index)}
                         onMouseLeave={hoverLeaveFunction}
                         key={index}>
              {item.submenu.map((data, dataIndex) => {
                return (
                  <NavDropdown.Item 
                                    to={data.address}
                                    key={dataIndex}
                                    className="dropdown-items">
                    {data.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          ) : (
            <a to={item.address} 
                     key={index} 
                     activeClassName={"active"}>
              {item.title}{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
}