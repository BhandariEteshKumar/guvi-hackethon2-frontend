import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext, TheaterContext } from "./App";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Seats() {
  const { id, index } = useParams();
  const [movies, setMovies] = useContext(MovieContext);
  const [theaters, setTheaters] = useContext(TheaterContext);
  let seats = theaters.filter((theater) => +id === theater.movieId);
  seats = seats[0].booked;
  const [total_amount, setAmout] = useState(0);
  const history = useHistory();

  //   seats = theaters.filter((theater) => +id === theater.movieId);
  //   seats = seats[0].booked;
  function handleClick(e, ind) {
    e.preventDefault();

    e.target.style.color = seats[ind] === "Booked" ? "green" : "red";
    if (seats[ind] === "Booked") {
      seats[ind] = "Not Booked";
      setAmout(total_amount - 150);
      return;
    }
    setAmout(total_amount + 150);
    seats[ind] = "Booked";
    fetch(`https://guvi-hackethon2.herokuapp.com/theaters/${id}`, {
      method: "POST",
      body: JSON.stringify(seats),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
  console.log(movies, theaters);
  const style2 = { color: "green" };
  const style1 = { color: "red" };
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[10 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 10 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[20 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 20 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[30 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 30 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[40 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 40 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[50 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 50 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[60 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 60 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[70 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 70 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[80 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 80 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={seats[90 + ar] === "Not Booked" ? style2 : style1}
                onClick={(e) => handleClick(e, 90 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <footer>
        <h3>Total Amount: {total_amount}</h3>
        <Button
          varient="outlined"
          onClick={() => {
            if (total_amount > 0) {
              alert("Tickets Booked");
            } else alert("No Tickets Booked");
            history.push("/home");
          }}
        >
          Proceed
        </Button>
      </footer>
    </div>
  );
}
