import { Button } from "@mui/material";
import { useState } from "react";
export default function UserTable({ users, setUsers, add }) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const example = {};
  example.name = name;
  example.password = password;
  example.age = age;
  example.email = email;
  return (
    <div className="dis">
      <table>
        <thead>
          <tr>
            <th colSpan={5}>Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>User Name</th>
            <th>Password</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
          {users.map((user, index1) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    let data = users.filter((user, index) => {
                      return index1 !== index;
                    });
                    setUsers(data);
                  }}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {add ? (
        <form>
          <div className="row">
            <label htmlFor="title" className="col">
              UserName:{" "}
            </label>
            <input
              id="title"
              type="text"
              className="col"
              onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="poster" className="col">
              Password:{" "}
            </label>
            <input
              type="text"
              id="poster"
              className="col"
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="rating" className="col">
              Age:{" "}
            </label>
            <input
              type="text"
              id="rating"
              className="col"
              onInput={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="row">
            <label className="col">Email: </label>
            <textarea
              className="col"
              onInput={(e) => setEmail(e.target.value)}
            ></textarea>
          </div>
          <Button variant="text" onClick={() => setUsers([...users, example])}>
            Add
          </Button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
