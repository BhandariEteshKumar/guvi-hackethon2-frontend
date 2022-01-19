import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext, TheaterContext } from "./App";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Seats() {
  const { id } = useParams();
  const [movies] = useContext(MovieContext);
  const [theaters] = useContext(TheaterContext);
  //seats store the booking data
  let theater = theaters.filter((theater) => +id === theater.movieId)[0];
  let seats = theater.booked;
  //total amount is the payment for the tickets
  const [total_amount, setAmout] = useState(0);
  const history = useHistory();
  //when a user selects the seat we select the data
  function handleClick(e, ind) {
    e.preventDefault();
    if (seats[ind] === "booked") return;
    e.target.style.color = seats[ind] === "Booked" ? "green" : "red";
    if (seats[ind] === "Blocked") {
      e.target.style.color = "grey";
      seats[ind] = "Not Booked";
      setAmout(total_amount - 150);
      fetch(
        `https://guvi-hackethon2.herokuapp.com/theaters/${id}/${theater.name}`,
        {
          method: "POST",
          body: JSON.stringify(seats),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((data) => console.log(data));
      return;
    }
    setAmout(total_amount + 150);
    seats[ind] = "Blocked";
    fetch(
      `https://guvi-hackethon2.herokuapp.com/theaters/${id}/${theater.name}`,
      {
        method: "POST",
        body: JSON.stringify(seats),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
  console.log(movies, theaters);
  const style2 = { color: "green" };
  const style1 = { color: "grey" };
  const style3 = { color: "red" };
  // arr is used for indexing
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //creating table component to render the seats
  console.log(theater, seats[0], seats[0] === "Not Booked");
  return (
    <div className="seats">
      <table>
        <tbody>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[10 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 10 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[20 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 20 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[30 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 30 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[40 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 40 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[50 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 50 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[60 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 60 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[70 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 70 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[80 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
                onClick={(e) => handleClick(e, 80 + ar)}
              >
                <WeekendIcon />
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((ar) => (
              <td
                style={
                  seats[90 + ar] === "Not Booked"
                    ? style1
                    : seats[ar] === "Blocked"
                    ? style3
                    : style2
                }
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
              for (let i = 0; i < seats.length; i++) {
                if (seats[i] === "Blocked") seats[i] = "Booked";
              }
              fetch(
                `https://guvi-hackethon2.herokuapp.com/theaters/${id}/${theater.name}`,
                {
                  method: "POST",
                  body: JSON.stringify(seats),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                }
              )
                .then((data) => data.json())
                .then((data) => console.log(data));
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
