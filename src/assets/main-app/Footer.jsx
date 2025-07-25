import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <Typography variant="body2">
        Part of a portfolio for&nbsp;
        <Link to="http://www.adampeel.co.uk">Adam Peel</Link>
      </Typography>
    </footer>
  );
}
