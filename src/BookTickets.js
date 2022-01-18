import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "./App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";

export default function BookTickets() {
  const { id } = useParams();
  let selected = false,
    bookin = true;
  const [movies, setMovies] = useContext(MovieContext);
  const [theaters, setTheaters] = useState([]);
  const history = useHistory();
  let movie;
  useEffect(() => {
    fetch("https://guvi-hackethon2.herokuapp.com/theaters")
      .then((data) => data.json())
      .then((theaters) => {
        setTheaters(theaters);
      });
  }, []);
  movie = theaters.filter(
    (theater) => +id === +theater.movieId || +id === +theater.movieid
  );
  console.log(theaters, movie);
  return (
    <div>
      {!selected ? (
        bookin ? (
          movie.map((book) => (
            <div className="theaterdis">
              <h3>Theater Name: {book.name}</h3>
              <h3>Show Time : {book.showtime}</h3>
              <Button
                varient="outlined"
                onClick={() => history.push(`/movies/${id}/seats`)}
              >
                Book
              </Button>
            </div>
          ))
        ) : (
          <h1>No Theaters to display</h1>
        )
      ) : (
        ""
      )}
    </div>
  );
}
