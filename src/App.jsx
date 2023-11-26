import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./App.css";

function App() {
  let [name, setName] = useState(0);

  let plus = () => {
    setName(name + 1);
  };
  let minus = () => {
    if (name <= 0) {
      name = 0;
    }
    setName(name - 1);
  };
  let reset = () => {
    setName(0);
  };
  return (
    <>
      <div className="container">
        <div className="border">
          <div className="screen">
            <span>{name}</span>
          </div>
          <div className="btn">
            <button onClick={plus}>
              <FaPlus />
            </button>
            <button onClick={minus}>
              <FaMinus />
            </button>
            <button onClick={reset}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
