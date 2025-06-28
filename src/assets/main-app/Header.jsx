import { useState, useContext } from "react";
import { ColourThemeContext } from "./contexts/ThemeContext";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <header className="header">
      <div id="main-header-logo">
        <RssFeedIcon className="header-logo" sx={{ fontSize: 60 }} />
      </div>
      <div id="header-banner">
        <Typography
          id="main-header-title"
          sx={{
            typography: { xs: "h6", sm: "h5", md: "h3", lg: "h2", xl: "h2" },
          }}
        >
          Northcoders
          <wbr /> News
        </Typography>
      </div>
    </header>
  );
}

export default Header;
