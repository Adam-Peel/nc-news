import { useContext, useState } from "react";

import { ColourThemeContext } from "./contexts/ThemeContext";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import MoreIcon from "@mui/icons-material/MoreVert";
import BasicModal from "./Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Link, useNavigate } from "react-router";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "32ch",
      "&:focus": {
        width: "48ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "32ch",
      "&:focus": {
        width: "48ch",
      },
    },
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
      },
    },
    [theme.breakpoints.up("xs")]: {
      width: "6ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

export default function Header() {
  const { currentColourTheme, setCurrentColourTheme } =
    useContext(ColourThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [topicsEl, setTopicsEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [checked, setChecked] = useState(true);
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  function handleChange(event) {
    setKeywords(event.target.value);
  }

  const openTopics = Boolean(topicsEl);
  const handleClick = (event) => {
    setTopicsEl(event.currentTarget);
  };
  const handleClose = () => {
    setTopicsEl(null);
  };

  function switchColor(event) {
    setChecked(!checked);
    if (currentColourTheme === "light") {
      setCurrentColourTheme("dark");
    } else {
      setCurrentColourTheme("light");
    }
  }
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const topicsMenuId = "topics-menu";
  const renderTopicsMenu = (
    <Menu
      anchorEl={topicsEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={topicsMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={openTopics}
      onClose={handleClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/nc-news/articles">#all-posts</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/nc-news/topics/coding">#coding</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/nc-news/topics/cooking">#cooking</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/nc-news/topics/football">#football</Link>
      </MenuItem>
    </Menu>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Other users</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <FormGroup>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked
                onClick={switchColor}
              />
            }
            label=""
          />
        </FormGroup>
      </MenuItem>
    </Menu>
  );

  return (
    <header>
      <Box sx={{ flexGrow: 1, maxHeight: "64px", zIndex: 999 }}>
        <AppBar position="static">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Left Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  ml: { xs: "2%", sm: "8%", md: "15%", lg: "20%", xl: "25%" },
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <img src="/nc-thumbnail.png" className="nn-logo" />
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  aria-controls={openTopics ? "topics-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openTopics ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Center Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "center",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Typography
                  sx={{
                    typography: {
                      xl: "h3",
                      lg: "h4",
                      md: "h5",
                      sm: "body1",
                      xs: "body2",
                    },
                    marginRight: 2,
                  }}
                >
                  NC News
                </Typography>
              </Box>

              {/* Right Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mr: { xs: "2%", sm: "8%", md: "15%", lg: "20%", xl: "25%" },
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <MaterialUISwitch
                          sx={{ ml: 2 }}
                          defaultChecked
                          onClick={switchColor}
                        />
                      }
                      label=""
                    />
                  </FormGroup>
                  <BasicModal />
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {renderTopicsMenu}
      </Box>
    </header>
  );
}
