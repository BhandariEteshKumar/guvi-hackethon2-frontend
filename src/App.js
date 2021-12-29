import "./index.css";
import { Button } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputArr, setInputArr] = useState(["Hit the gym"]);
  console.log(inputArr);
  return (
    <div className="todo">
      <div className="todochild">
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <Button
          variant="contained"
          onClick={() => {
            setInputArr([...inputArr, inputText]);
            handleSubmit();
          }}
        >
          Add to List
        </Button>
      </div>
      {inputArr.map((clr) => (
        <AddColor clr={clr} />
      ))}
    </div>
  );

  function handleSubmit() {
    // clearing the values
    console.log("handle");
    setInputText("");
  }

  function AddColor({ clr }) {
    // console.log("func", clr);
    return (
      <div className="list">
        {clr}
        <div className="btn">
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              const remaingArr = inputArr.filter((input) => {
                return clr !== input;
              });
              setInputArr(remaingArr);
              handleSubmit();
            }}
          >
            remove
          </Button>
        </div>
      </div>
    );
  }
}
