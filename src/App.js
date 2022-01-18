import "./index.css";
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { createContext } from "react";
import { useEffect } from "react";
import Login from "./Login";
import BookTickets from "./BookTickets";
import Seats from "./Seats";
import AddTheater from "./AddTheater";
const MovieContext = createContext();
const TheaterContext = createContext();
export default function App() {
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  useEffect(() => {
    fetch("https://guvi-hackethon2.herokuapp.com/home")
      .then((data) => data.json())
      .then((movies) => {
        setMovies(movies);
      });
    fetch("https://guvi-hackethon2.herokuapp.com/theaters")
      .then((data) => data.json())
      .then((theaters) => {
        setTheaters(theaters);
      });
  }, []);
  console.log(movies);

  return (
    <div className="app">
      <AppBar position="static" sx={{ backgroundColor: "#203040" }}>
        <Toolbar>
          <Link to="/home">Home</Link>
          <Link to="/create-movie">Add Movie</Link>
        </Toolbar>
      </AppBar>

      <MovieContext.Provider value={[movies, setMovies]}>
        <TheaterContext.Provider value={[theaters, setTheaters]}>
          <Switch>
            <Route path="/create-movie">
              <AddUser />
            </Route>
            <Route path="/theater/:id/:name">
              <AddTheater />
            </Route>
            <Route path="/signup">
              <AddUser />
            </Route>
            <Route path="/movies/create/:id">
              <BookTickets />
            </Route>
            <Route exact path="/movies/:id/seats">
              <Seats />
            </Route>
            <Route path="/home/:name">
              <UserTable />
            </Route>
            <Route path="/home">
              <UserTable />
            </Route>
            <Route path-="/">
              <Login />
            </Route>
          </Switch>
        </TheaterContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}

export { MovieContext, TheaterContext };
