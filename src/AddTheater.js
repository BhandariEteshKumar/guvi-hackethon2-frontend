import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";
import { MovieContext } from "./App";
import { useParams } from "react-router-dom";
export default function AddUser() {
  const { id, name } = useParams();
  const [users, setUsers] = useContext(MovieContext);
  const [theaterName, setName] = useState(null);
  const [showtime, setShowTime] = useState(null);
  const [booked, setBooked] = useState([
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
    "Not Booked",
  ]);

  const history = useHistory();
  return (
    <form>
      <div className="row">
        <TextField
          label="Theater Name"
          variant="standard"
          id="title"
          type="text"
          className="col"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <TextField
          id="Password"
          label="showtime"
          variant="standard"
          type="text"
          className="col"
          onInput={(e) => setShowTime(e.target.value)}
        />
      </div>

      <div className="row">
        <Button
          variant="outlined"
          onClick={() => {
            console.log("Added Theater");
            fetch(`https://guvi-hackethon2.herokuapp.com/create/${id}`, {
              method: "POST",
              body: JSON.stringify({
                name: theaterName,
                showtime: showtime,
                movieid: id,
                booked: booked,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((data) => data.json())
              .then((data) => {
                console.log(data);
                history.push(`/home/${name}`);
              });
          }}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
