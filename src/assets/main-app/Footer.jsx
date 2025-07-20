import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <Link to="http://www.adampeel.co.uk">
        <Typography variant="body2">
          Website made by Adam Peel Web Design
        </Typography>
      </Link>
    </footer>
  );
}
