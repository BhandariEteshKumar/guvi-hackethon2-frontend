import "./index.css";
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import Profile from "./Profile";
import EditUser from "./EditUser";
import { createContext } from "react";
const MovieContext = createContext();
export default function App() {
  const [users, setUsers] = useState([
    {
      name: "user1",
      password: "user1",
      age: "21",
      email: "user1@gmail.com",
    },
    {
      name: "user2",
      password: "user2",
      age: "24",
      email: "user2@gmail.com",
    },
    {
      name: "user3",
      password: "user3",
      age: "23",
      email: "user3@gmail.com",
    },
    {
      name: "user4",
      password: "user4",
      age: "24",
      email: "user4@gmail.com",
    },
  ]);

  return (
    <div className="app">
      <AppBar position="static" sx={{ backgroundColor: "#203040" }}>
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/create-user">Add User</Link>
        </Toolbar>
      </AppBar>
      <h1>Using Context API</h1>
      <MovieContext.Provider value={[users, setUsers]}>
        <Switch>
          <Route path="/create-user">
            <AddUser />
          </Route>
          <Route path="/edit-user/:id">
            <EditUser />
          </Route>
          <Route path="/edit-profile/:id">
            <EditUser />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/">
            <UserTable />
          </Route>
        </Switch>
      </MovieContext.Provider>
    </div>
  );
}

export { MovieContext };
