import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function ProfileAvatar(): JSX.Element {
  return (
    <Link to="/portfolio">
      <Avatar
        alt="Manuel Garrido Rodriguez Avatar"
        src="https://avatars.githubusercontent.com/u/68009645?s=400&u=14926e500990c7d489b905382c7a76889d8319e7&v=4"
        sx={{ width: 150, height: 150 }}
      />
    </Link>
  );
}

export default ProfileAvatar;
