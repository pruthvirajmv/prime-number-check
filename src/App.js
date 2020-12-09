import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, check] = useState("");

  function primeNumberCheck(input) {
    var inputNum = input.target.value;
    var out = "Invalid Input";
    for (var i = 2; i <= inputNum / 2; i++) {
      if (inputNum % i === 0) {
        out = "Not a Prime Number";
        return check(out);
      } else {
        out = "Prime Number";
        return check(out);
      }
    }

    return check(out);
  }

  return (
    <div className="App">
      <h1>prime number check</h1>
      <h2>Enter number to check prime or not</h2>
      <input
        style={{
          fontFamily: "inherit",
          border: "2px solid",
          borderRadius: "0.2rem",
          fontSize: "large"
        }}
        onChange={primeNumberCheck}
      />
      <div
        style={{
          paddingTop: "1rem",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          color: "green"
        }}
      >
        {output}
      </div>
      <h4> Hope you enjoyed this quick and simple web app </h4>
      <h5>
        hit
        <a
          style={{ textDecoration: "none", color: "orange" }}
          href="https://pruthvirajmv.netlify.app/projects.html"
        >
          {" "}
          iampruthviraj
        </a>{" "}
        to see more projects
      </h5>
    </div>
  );
}
