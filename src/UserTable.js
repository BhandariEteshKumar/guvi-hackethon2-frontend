import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import InfoIcon from "@mui/icons-material/Info";
import { MovieContext } from "./App";
import { useContext } from "react";

export default function UserTable() {
  const history = useHistory();
  const [users, setUsers] = useContext(MovieContext);
  return (
    <div className="dis">
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Password</th>
            <th>Age</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button
                  id="btn"
                  onClick={() => {
                    history.push(`/profile/${user.id}`);
                  }}
                >
                  <InfoIcon color="success" />
                </button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    history.push(`/edit-user/${user.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    // let data = users.filter((user, index) => {
                    //   return user.id !== index;
                    // });
                    // setUsers(data);
                    fetch(
                      `https://61c412bff1af4a0017d99279.mockapi.io/users/${user.id}`,
                      {
                        method: `DELETE`,
                      }
                    )
                      .then((data) => data.json())
                      .then((users) => {
                        fetch(
                          "https://61c412bff1af4a0017d99279.mockapi.io/users"
                        )
                          .then((data) => data.json())
                          .then((users) => setUsers(users));
                      });
                  }}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
