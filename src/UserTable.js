import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MovieContext } from "./App";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function UserTable() {
  const { name } = useParams();
  const history = useHistory();
  const [movies, setMovies] = useContext(MovieContext);
  console.log(name);
  return (
    <div id="movies">
      {/* loading the movies */}
      {movies.map((movie) => (
        <div className="main card">
          <img className="card-img-top" src={movie.poster} alt="Poster"></img>
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">{movie.rating}</p>
            <p className="card-text">{movie.summary}</p>
            <Button
              variant="contained"
              onClick={() => {
                history.push(`/movies/create/${movie.id}`);
              }}
            >
              Book Tickets
            </Button>
            {/* rendering the components which are only for admin user */}
            {name === "admin" ? (
              <Button
                variant="contained"
                onClick={() => {
                  fetch(`http://localhost:9004/movies/${movie.id}`, {
                    method: "DELETE",
                  })
                    .then((data) => data.json())
                    .then((movieData) => {
                      console.log(movieData);
                      fetch("http://localhost:9004/home")
                        .then((data) => data.json())
                        .then((movies) => {
                          setMovies(movies);
                        });
                    });
                }}
              >
                Remove
              </Button>
            ) : (
              ""
            )}
            {/* rendering the components which are only for admin user */}
            {name === "admin" ? (
              <Button
                variant="contained"
                onClick={() => history.push(`/theater/${movie.id}/${name}`)}
              >
                Add Theater
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
