import { Button } from "@mui/material";
import { useState } from "react";

function Movie({ deletebutton, name, poster, rating, summary }) {
  const style1 = { color: "red" };
  const style2 = { color: "green" };
  let [like, setLike] = useState(0);
  let [dislike, setdisLike] = useState(0);
  let ratingColor;
  if (rating >= 8.5)
    ratingColor = (
      <p className="movie-rating" style={style2}>
        ⭐ {rating}
      </p>
    );
  else
    ratingColor = (
      <p className="movie-rating" style={style1}>
        ⭐ {rating}
      </p>
    );
  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        {ratingColor}
      </div>
      <p className="movie-summary">{summary}</p>
      <Button onClick={() => setLike(like + 1)}>👍{like}</Button>
      <Button onClick={() => setdisLike(dislike + 1)}>👎🏻{dislike}</Button>
      {deletebutton}
    </div>
  );
}

export { Movie };
