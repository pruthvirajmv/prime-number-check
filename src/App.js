import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, check] = useState("");
  // const fisrtTwoPrime = [2, 3];

  function primeNumberCheck(input) {
    var inputNum = input.target.value;
    var out = "Invalid Input";
    console.log(inputNum);
    // if (inputNum >= 0 && inputNum <= 1) {
    //   out = "Prime Number starts from 2";
    //   return check(out);
    // } else
    if (inputNum > 1 && inputNum < 4) {
      out = "Prime Number";
      // console.log(out);
      return check(out);
    }

    for (var i = 2; i <= inputNum / 2; i++) {
      if (inputNum % i === 0) {
        out = "Not a Prime Number";
        return check(out);
      } else {
        out = "Prime Number";
        return check(out);
      }
    }
    // console.log(out);
    return check(out);
  }

  return (
    <div className="App">
      <h1>prime number check</h1>

      <div
        style={{
          paddingBottom: "1rem",
          fontSize: "1.8rem",
          fontWeight: "bolder",
          letterSpacing: "0.1rem",
          color: "green"
        }}
      >
        {output}
      </div>
      <input
        style={{
          fontFamily: "inherit",
          border: "2px solid",
          borderRadius: "0.2rem",
          fontSize: "large",
          maxWidth: "150px"
        }}
        onChange={primeNumberCheck}
      />
      <h2>Enter number to check prime or not</h2>
      <p>Note: prime numbers are greater than 1</p>
      <h4>
        enjoyed the app? hit
        <a
          style={{ textDecoration: "none", color: "orange" }}
          href="https://pruthvirajmv.netlify.app/projects.html"
        >
          {" "}
          iampruthviraj
        </a>{" "}
        to see more projects
      </h4>
    </div>
  );
}
