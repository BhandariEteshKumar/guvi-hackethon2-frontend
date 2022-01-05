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
import { useEffect } from "react";
const MovieContext = createContext();
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://61c412bff1af4a0017d99279.mockapi.io/users")
      .then((data) => data.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="app">
      <AppBar position="static" sx={{ backgroundColor: "#203040" }}>
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/create-user">Add User</Link>
        </Toolbar>
      </AppBar>
      <h1>Using Aximos-useEffect() and fetch</h1>
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
