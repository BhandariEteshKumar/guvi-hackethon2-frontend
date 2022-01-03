import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
export default function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const history = useHistory();
  const example = {};
  example.name = users[id].name;
  example.password = users[id].password;
  example.age = users[id].age;
  example.email = users[id].email;
  console.log(typeof age);
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
            let data = users.map((user, index) => {
              if (index !== +id) return user;
              return example;
            });
            setUsers(data);
            history.push("/");
          }}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
