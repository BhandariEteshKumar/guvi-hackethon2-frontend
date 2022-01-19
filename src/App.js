import "./index.css";
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserTable from "./UserTable";
import AddUser from "./AddUser";
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
          <Link to="/home">
            <img
              className="homeimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gT2j_3ct4KwFdsbgmnAzSkOp9qs1o_D2eA&usqp=CAU"
              alt="Poster"
            ></img>
          </Link>
          <img
            className="homeimg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4jUpwXdtBRHDOqYCdCHVTBRv2TAB58cKyA&usqp=CAU"
            alt="Poster"
          ></img>
        </Toolbar>
      </AppBar>
      {/* context api for providing data to children */}
      <MovieContext.Provider value={[movies, setMovies]}>
        <TheaterContext.Provider value={[theaters, setTheaters]}>
          {/* routing between the */}
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
