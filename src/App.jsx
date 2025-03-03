import React, { useState } from "react";
import "./App.css";

function App() {
  const [showValue, setvalue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={showValue} />
          </div>
          <div>
            <input type="button" value="AC" onClick={(e) => setvalue("")} />
            <input
              type="button"
              value="DE"
              onClick={(e) => setvalue(showValue.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => setvalue(showValue + e.target.value)}
            />
            <input
              type="button"
              value="="
              className="equal"
              onClick={(e) => setvalue(eval(showValue))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
