import Avatar from "@mui/material/Avatar";
import { useContext, useId } from "react";
import { UserContext } from "../../contexts/UserContext";

function provideAvatar(author, pixels) {
  const { users } = useContext(UserContext);

  let size = pixels;
  if (typeof pixels !== "number") {
    size = 54;
  }
  return users.map((user) => {
    if (author === user.username) {
      return (
        <Avatar
          alt={`${user.username}`}
          src={`${user.avatar_url}`}
          sx={{ width: size, height: size }}
          key={`${user.username}`}
        >
          {author[0]}
        </Avatar>
      );
    } else {
    }
  });
}

export default provideAvatar;
