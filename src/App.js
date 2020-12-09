import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, check] = useState("");

  function primeNumberCheck(input) {
    var inputNum = input.target.value;
    var out = "Please Enter valid number Input";

    if (inputNum === "a") {
      alert("Enter valid number");
    } else {
      for (var i = 2; i <= inputNum / 2; i++) {
        if (inputNum % i === 0) {
          out = "Not a Prime Number";
          return check(out);
        } else {
          out = "Prime Number";
          return check(out);
        }
      }
    }

    return check(out);
  }

  return (
    <div className="App">
      <h1>prime number check</h1>
      <h2>Enter a number to check prime or not</h2>
      <input onChange={primeNumberCheck} />
      <div>{output}</div>
    </div>
  );
}
