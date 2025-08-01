import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const users = [
    {
      username: "tickle122",
      name: "Tom Tickle",
      scheme: "light",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    },
    {
      username: "grumpy19",
      name: "Paul Grump",
      scheme: "light",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
    },
    {
      username: "happyamy2016",
      name: "Amy Happy",
      scheme: "dark",
      avatar_url:
        "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
    },
    {
      username: "cooljmessy",
      name: "Peter Messy",
      scheme: "light",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
    },
    {
      username: "weegembump",
      name: "Gemma Bump",
      scheme: "light",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
    },
    {
      username: "jessjelly",
      name: "Jess Jelly",
      scheme: "dark",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    },
  ];

  const [currentUser, SetCurrentUser] = useState([users[2]]);

  return (
    <UserContext.Provider value={{ currentUser, SetCurrentUser, users }}>
      {children}
    </UserContext.Provider>
  );
};
