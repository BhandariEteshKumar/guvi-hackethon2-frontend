import "./index.css";
import { Button } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputArr, setInputArr] = useState(["Hit the gym"]);
  console.log(inputArr);
  return (
    <div className="todo">
      <input onChange={(e) => setInputText(e.target.value)} />
      <Button
        variant="contained"
        onClick={() => setInputArr([...inputArr, inputText])}
      >
        Add to List
      </Button>

      {inputArr.map((clr) => (
        <AddColor clr={clr} />
      ))}
    </div>
  );
  function AddColor({ clr }) {
    // console.log("func", clr);
    return (
      <div className="list">
        {clr}
        <div className="btn">
          <Button variant="contained" color="error">
            remove
          </Button>
        </div>
      </div>
    );
  }
}
