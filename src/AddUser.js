import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";

export default function AddUser() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const history = useHistory();
  return (
    <form>
      <div className="adduser row">
        <TextField
          label="UserName"
          variant="standard"
          id="title"
          type="text"
          className="col"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="Password"
          label="Password"
          variant="standard"
          type="text"
          className="col"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          label="Age"
          variant="standard"
          type="text"
          id="Age"
          className="col"
          onInput={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="email"
          label="email"
          variant="standard"
          className="col"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <p></p>
      <div className="row">
        <Button
          variant="outlined"
          onClick={() => {
            fetch("http://localhost:9004/signup", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((data) => data.json())
              .then(() => {
                history.push("/");
              });
            history.push("/");
          }}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
