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
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

function ArticleCard(article) {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const d = new Date(article.article.created_at);
  const date = d.toDateString();

  return (
    <div className="article-card-container" key={article.article.id}>
      <Card
        className="article-card"
        key={article.article.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2",
            typography: { sm: "body2", xs: "caption" },
            justifyContent: "flex-start",
          }}
        >
          <CardHeader
            sx={{
              maxHeight: 35,
              typography: { sm: "body2", xs: "caption" },
              textAlign: "left",
            }}
            avatar={provideAvatar(article.article.author, 35, users)}
            title={article.article.author}
            variant="caption"
            subheader={date.slice(4)}
          />
        </Box>
        <CardActionArea
          onClick={() => navigate(`/articles/${article.article.article_id}`)}
        >
          <CardMedia
            component="img"
            maxHeight="125"
            className="article-card-image"
            image={article.article.article_img_url}
            alt="An image of the article"
          />
          <CardContent sx={{}}>
            <Typography
              className="article-card-title"
              gutterBottom
              component="div"
              textAlign="left"
              sx={{ typography: { md: "body1", sm: "body2", xs: "caption" } }}
            >
              {article.article.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2",
            typography: { sm: "body2", xs: "caption" },
            justifyContent: "space-evenly",
          }}
        >
          <Badge
            badgeContent={article.article.comment_count}
            color="primary"
            showZero
          >
            <CommentIcon fontSize="small" />
          </Badge>
          <Badge badgeContent={article.article.votes} color="primary" showZero>
            <HowToVoteIcon fontSize="small" sx={{ ml: 1 }} />
          </Badge>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              typography: { sm: "body2", xs: "caption" },
            }}
          >
            {article.article.topic}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}

export default ArticleCard;
