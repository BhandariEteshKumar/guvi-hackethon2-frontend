import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { MovieContext } from "./App";
import { useContext } from "react";

export default function EditUser() {
  const [users, setUsers] = useContext(MovieContext);
  const { id } = useParams();
  const history = useHistory();
  const example = users[id - 1];
  // example.name = users[id].name;
  // example.password = users[id].password;
  // example.age = users[id].age;
  // example.email = users[id].email;
  console.log(id, users[id - 1], example);
  return (
    <form>
      <div className="row">
        <TextField
          label="UserName"
          variant="standard"
          id="title"
          type="text"
          className="col"
          onInput={(e) => (example.name = e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="Password"
          label="Password"
          variant="standard"
          type="text"
          className="col"
          onInput={(e) => (example.password = e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          label="Age"
          variant="standard"
          type="text"
          id="Age"
          className="col"
          onInput={(e) => (example.age = e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="email"
          label="email"
          variant="standard"
          className="col"
          onInput={(e) => (example.email = e.target.value)}
        />
      </div>
      <p></p>
      <div className="row">
        <Button
          variant="outlined"
          onClick={() => {
            fetch(`https://61c412bff1af4a0017d99279.mockapi.io/users/${id}`, {
              method: "PUT",
              body: JSON.stringify(example),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((data) => data.json())
              .then(() => {
                fetch("https://61c412bff1af4a0017d99279.mockapi.io/users")
                  .then((data) => data.json())
                  .then((users) => setUsers(users));
                history.push("/");
              });
          }}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
