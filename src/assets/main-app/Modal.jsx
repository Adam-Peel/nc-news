import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        <InfoIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            Northcoders News
            <p>
              This application was built using React with a Vite framework and
              Javascript. The layout is provided with vanilla CSS built from the
              ground up, and styled with Material UI Components. The app is
              plainly styled, as it remains a proof of concept and a 'portfolio'
              piece rather than a full production.
            </p>
            <p>
              It contains all scripts and components necessary to serve a
              front-end app of a mock news aggregator site. In the app, users
              can view articles with multiple sorting and filtering options,
              vote on articles, and post and delete comments. As there are no
              restrictions on accessing the api requests, currently the posting
              and deleting are restricted to one user (to maintain some data
              integrity).
            </p>
            <p>
              The data is retrieved from a back-end repository and application
              which can be found here:
              <br />
              <Link to="https://github.com/Adam-Peel/news-aggregator">
                *GitHub Repo*
              </Link>
            </p>
            <p>
              The api and documentation can be found here:
              <br />
              <Link to="https://www.adampeel.co.uk/api" color="blue">
                <span color="blue">*Api Documentation*</span>
              </Link>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
