import { useState } from "react";
import { Button } from "antd";
import backURL from "../../public/icon/back.svg";
import divideURL from "../../public/icon/divide.svg";
import multiplyURL from "../../public/icon/multiply.svg";
import "./Calculator.css";
let arr = [];
function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [currentOp, setCurrentOp] = useState("");
  const handleNumber = (e) => {
    setInput(input + e);
  };
  const handleOperator = (e) => {
    setCurrentOp(e);
    if (arr.length === 0) {
      setCurrentOp(e);
      arr.push(+input);
      setInput("");
    } else if (arr.length === 1) {
      arr.push(+input);
      let result = evaluate();
      arr.length = 0;
      arr.push(+result);
      setCurrentOp(e);
      setInput("");
      setResult(+result);
    } else {
      return;
    }
  };
  const evaluate = () => {
    switch (currentOp) {
      case "+":
        return +arr[0] + +arr[1];
      case "-":
        return +arr[0] - +arr[1];
      case "x":
        return +arr[0] * +arr[1];
      case "/":
        return +arr[0] / +arr[1];
    }
  };
  const equalClick = () => {
    if (arr.length === 1) {
      if (result === "" && input === "") {
        return;
      } else if ((result !== "") & (input === "")) {
        switch (currentOp) {
          case "+":
            return +input + +result;
          case "-":
            return +input - +result;
          case "x":
            return +input * +result;
          case "/":
            return +input / +result;
        }
      } else {
        arr.push(+input);
        let result = evaluate();
        arr.length = 0;
        arr.push(+result);
        setResult(+result);
      }
    } else if (arr.length === 0) {
      return;
    }
  };
  return (
    <div style={{ margin: 20 }}>
      <div style={{ fontSize: 24, fontWeight: "bold" }}>Calculator</div>
      <div
        className="Calculator"
        style={{
          border: "1px solid white",
          borderRadius: 12,
          width: 300,
          height: 370,
          background: "gray",
          marginTop: 12,
        }}
      >
        <div className="Display">
          <div
            className="input"
            style={{
              width: 280,
              height: 50,
              backgroundColor: "white",
              marginLeft: 10,
              marginTop: 10,
              color: "orange",
              fontWeight: "bold",
            }}
          >
            {input}
          </div>
          <div
            className="result"
            style={{
              width: 280,
              height: 50,
              background: "white",
              color: "green",
              marginLeft: 10,
              alignItems: "end",
              textAlign: "right",
              fontWeight: "bolder",
            }}
          >
            {result}
          </div>
        </div>
        <div
          className="Button"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            padding: 10,
          }}
        >
          <Button
            onClick={() => {
              handleNumber(1);
            }}
          >
            1
          </Button>
          <Button
            onClick={() => {
              handleNumber(2);
            }}
          >
            2
          </Button>
          <Button
            onClick={() => {
              handleNumber(3);
            }}
          >
            3
          </Button>
          <Button
            onClick={() => {
              handleNumber(4);
            }}
          >
            4
          </Button>
          <Button
            onClick={() => {
              handleNumber(5);
            }}
          >
            5
          </Button>
          <Button
            onClick={() => {
              handleNumber(6);
            }}
          >
            6
          </Button>
          <Button
            onClick={() => {
              handleNumber(7);
            }}
          >
            7
          </Button>
          <Button
            onClick={() => {
              handleNumber(8);
            }}
          >
            8
          </Button>
          <Button
            onClick={() => {
              handleNumber(9);
            }}
          >
            9
          </Button>
          <Button
            onClick={() => {
              handleOperator("+");
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              handleOperator("-");
            }}
          >
            -
          </Button>
          <Button
            onClick={() => {
              handleOperator("x");
            }}
          >
            <img src={multiplyURL} />
          </Button>
          <Button
            onClick={() => {
              handleOperator("/");
            }}
          >
            <img src={divideURL} />
          </Button>
          <Button
            onClick={() => {
              setInput(input.slice(0, -1));
            }}
          >
            <img src={backURL} />
          </Button>
          <Button
            onClick={() => {
              equalClick();
            }}
          >
            =
          </Button>
          <Button
            onClick={() => {
              setInput("");
              setResult("");
              arr.length = 0;
            }}
          >
            AC
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
