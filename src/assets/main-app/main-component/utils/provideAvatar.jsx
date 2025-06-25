import Avatar from "@mui/material/Avatar";

function provideAvatar(author, pixels, users) {
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
    }
  });
}

export default provideAvatar;
