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
          {users.map((user, index1) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button
                  id="btn"
                  onClick={() => {
                    history.push(`/profile/${index1}`);
                  }}
                >
                  <InfoIcon color="success" />
                </button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    history.push(`/edit-user/${index1}`);
                  }}
                >
                  Edit
                </Button>
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
    </div>
  );
}
