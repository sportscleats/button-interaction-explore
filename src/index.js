import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Chevron from "./Chevron";
import Image from "./Image";

function Component({ children }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = () => setOpen(!open);
  const focusInput = () => {
    document.querySelector("input").focus();
    toggle();
  };

  return (
    <div className="container">
      <div className="top-container">
        <div className="input-dropdown">
          <div className={open ? "button-input  long" : "button-input"}>
            <div
              className={open ? "input-wrapper" : "input-wrapper wrapper-hide"}
            >
              <div className="chevron-container" onClick={toggle}>
                <Chevron />
              </div>
              <input
                className="input"
                placeholder="Type to search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className={open ? "start-hide" : "start"} onClick={focusInput}>
              Add Sales Comps
            </div>
          </div>
          <div className={open ? "dropdown-show" : "dropdown-hide"}>
            <Dropdown children={value} />
          </div>
        </div>
        <div className="comp-number">0 of 5 comps added</div>
      </div>
      <div
        className={
          open ? "bottom-container  container-extend" : "bottom-container"
        }
      >
        <Image />
        <div
          className={open ? "bottom-content large" : "bottom-content small"}
          onClick={toggle}
        >
          {open
            ? "Search for an address to add comps"
            : "Add up to 5 Supporting Sales Comps"}
        </div>
      </div>
    </div>
  );
}

function Dropdown({ children, classChange }) {
  return (
    <div className={classChange}>
      <div className="dropdown-container">
        <div className="dropdown-head"> Search for...</div>
        <div className="search-for">{children}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<Component />, document.querySelector("#root"));
