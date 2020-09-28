import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Chevron from "./Chevron";
import Image from "./Image";

function Component({ children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="container">
      <div className="top-container">
        <div className={open ? "button-input  long" : "button-input"}>
          <div
            className={open ? "input-wrapper" : "input-wrapper wrapper-hide"}
          >
            <div className="chevron-container" onClick={toggle}>
              <Chevron />
            </div>
            <input className="input" placeholder="Type to search" />
          </div>
          <div className={open ? "start-hide" : "start"} onClick={toggle}>
            Add Sales Comps
          </div>
        </div>
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

ReactDOM.render(<Component />, document.querySelector("#root"));
