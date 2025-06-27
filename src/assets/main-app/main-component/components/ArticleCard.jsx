import CommentIcon from "@mui/icons-material/Comment";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import provideAvatar from "../utils/provideAvatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CodeIcon from "@mui/icons-material/Code";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function ArticleCard(article) {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="article-card-container" key={article.article.id}>
      <Card
        // sx={{ width: 350 }}
        className="article-card"
        key={article.article.id}
      >
        <CardHeader
          sx={{ height: 35 }}
          avatar={provideAvatar(article.article.author, 35, users)}
          title={article.article.author}
          subheader={article.article.created_at.slice(0, 10)}
        />
        <CardActionArea
          onClick={() => navigate(`/articles/${article.article.article_id}`)}
        >
          <CardMedia
            component="img"
            height="125"
            image={article.article.article_img_url}
            alt="An image of the article"
          />
          <CardContent sx={{ height: 125 }}>
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
          <CardActions sx={{ height: 25 }}>
            <Badge
              badgeContent={article.article.comment_count}
              color="primary"
              showZero
            >
              <CommentIcon />
            </Badge>
            <Badge
              badgeContent={article.article.votes}
              color="primary"
              showZero
            >
              <HowToVoteIcon />
            </Badge>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ArticleCard;
