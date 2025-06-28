import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";
import Avatar from "@mui/material/Avatar";
import fetchData from "./utils/fetch";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeIcon from "@mui/icons-material/Code";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        // marginLeft: drawerWidth,
        width: drawerWidth,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

function Sidebar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const handleClick = function () {
    setOpen(!open);
    if (!open) {
      document.getElementsByClassName("header").style.marginLeft = "15%";
      document.getElementsByClassName("main").style.marginLeft = "15%";
      document.getElementById("sidebar").style.width = "15%";
      document.getElementById("sidebar").style.display = "block";
    }
  };

  let navigate = useNavigate();

  return (
    <div className="aside" id="sidebar">
      <Drawer variant="permanent" open={open} className="sidebar">
        <DrawerHeader>
          <IconButton onClick={handleClick} disableRipple>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar
          alt={currentUser[0].name}
          src={currentUser[0].avatar_url}
          sx={{ width: 65, height: 65 }}
        />
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }} disableRipple></ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItem key="all-posts" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                onClick={() => navigate(`/articles`)}
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate(`/articles`)}
                primary="All posts"
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key="coding" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                onClick={() => navigate(`/topics/coding`)}
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                <CodeIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate(`/topics/coding`)}
                primary="Coding"
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="cooking" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                onClick={() => navigate(`/topics/cooking`)}
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate(`/topics/cooking`)}
                primary="Cooking"
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="football" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              disableRipple
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                onClick={() => navigate(`/topics/football`)}
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                <SportsSoccerIcon />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate(`/topics/football`)}
                primary="Football"
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 1 }}>
            <ListItemText primary={topicMessage} />
          </ListItemButton>
        </List> */}

        {/* {topicList ? (
          topicList.topics.map((topic) => (
            <List component="div" disablePadding key={topic.slug}>
              <ListItem
                key={topic.slug}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={topic.slug}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          ))
        ) : (
          <></>
        )} */}

        <Divider />
      </Drawer>
    </div>
  );
}

export default Sidebar;
