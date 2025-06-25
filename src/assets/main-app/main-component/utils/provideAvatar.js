import Avatar from "@mui/material/Avatar";

function provideAvatar(author, pixels) {
  let size = pixels;
  if (typeof pixels !== "number") {
    size = 54;
  }
  console.log(users.username);
  return users.map((user) => {
    if (author === user.username) {
      return (
        <Avatar
          alt={`${user.username}`}
          src={`${user.avatar_url}`}
          sx={{ width: size, height: size }}
        >
          {author[0]}
        </Avatar>
      );
    } else {
    }
  });
}

export default provideAvatar;
