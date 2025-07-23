import CommentIcon from "@mui/icons-material/Comment";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router";
import provideAvatar from "../utils/provideAvatar";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ArticleCard(article) {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const d = new Date(article.article.created_at);
  const date = d.toDateString();

  return (
    <div className="article-card-container" key={article.article.id}>
      <Card
        className="article-card"
        raised="true"
        key={article.article.id}
        variant="elevation"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: true,
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2",
            typography: { sm: "body2", xs: "caption" },
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
        <Container
          className="card-image-title-container"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <CardActionArea
            onClick={() =>
              navigate(`/nc-news/articles/${article.article.article_id}`)
            }
            sx={{
              borderRadius: "5px",
              transition: "transform 0.15s ease-in-out",
              "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: "1px", maxHeight: "180px" }}
              className="article-card-image"
              image={article.article.article_img_url}
              alt={`An image of the ${article.article.topic} article`}
            />
            <CardContent>
              <Typography
                className="article-card-title"
                gutterBottom
                component="div"
                textAlign="left"
                sx={{ typography: { md: "body2", sm: "body2", xs: "caption" } }}
              >
                {article.article.title[0].toUpperCase()}
                {article.article.title.slice(1).toLowerCase()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            padding: "2",
            typography: { sm: "body2", xs: "caption" },
            justifyContent: "space-evenly",
            marginTop: "auto",
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
          <Box
            className="article-card-topic"
            bgcolor="gray"
            sx={{
              borderRadius: 20,
              pl: 2,
              pr: 2,
              mb: 1,
              ml: 1,
              "&:hover": { bgcolor: "#1976d2" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "white",
                typography: { sm: "body2", xs: "caption" },
              }}
            >
              <Link
                className="article-card-topic-link"
                to={`/nc-news/topics/${article.article.topic}`}
              >
                {article.article.topic}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
