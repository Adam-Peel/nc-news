import CommentIcon from "@mui/icons-material/Comment";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import provideAvatar from "../utils/provideAvatar";
// Here
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

function ArticleCard(article) {
  const { users } = useContext(UserContext);

  return (
    <div className="article-card-container" key={article.article.id}>
      <Card sx={{ width: 350 }} className="article-card">
        <CardHeader
          avatar={provideAvatar(article.article.author, 35, users)}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={article.article.author}
          subheader={article.article.created_at.slice(0, 10)}
        />
        <CardMedia
          component="img"
          height="140"
          image={article.article.article_img_url}
          alt="An image of the article"
        />
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign="left"
            >
              {article.article.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {article.article.topic}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Badge
            badgeContent={article.article.comment_count}
            color="primary"
            showZero
          >
            <CommentIcon />
          </Badge>
          <Badge badgeContent={article.article.votes} color="primary" showZero>
            <HowToVoteIcon />
          </Badge>
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleCard;
