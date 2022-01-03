import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function Profile({ users }) {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <div className="image">
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt="profile"
        />
      </div>
      <div className="profiledata">
        <p>UserName: {users[id].name}</p>
        <p>Age : {users[id].name}</p>
        <p>Email : {users[id].name}</p>
        <Button
          color="secondary"
          onClick={() => history.push(`/edit-profile/${id}`)}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
