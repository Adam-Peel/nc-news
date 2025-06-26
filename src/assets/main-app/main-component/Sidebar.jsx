import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import fetchData from "./utils/fetch";

function Sidebar() {
  const { currentUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [topicList, setTopicList] = useState(null);
  const [topicMessage, setTopicMessage] = useState(null);
  const [fetching, SetFetching] = useState(false);

  const handleClick = async function () {
    setOpen(!open);
    if (open) {
      return;
    }
    SetFetching(true);
    setTopicMessage("loading");
    try {
      const fetchedTopics = await fetchData(
        `https://news-aggregator-7e9t.onrender.com/api/topics`
      );
      setTopicList(fetchedTopics);
      setTopicMessage(null);
    } catch (err) {
      setTopicMessage("Error");
    } finally {
      SetFetching(false);
    }
  };

  return (
    <aside>
      <div className="sidebar user-avatar">
        <Avatar
          alt={currentUser[0].name}
          src={currentUser[0].avatar_url}
          sx={{ width: 65, height: 65 }}
        />
      </div>
      <div id="main-header-stats-div"></div>
      <nav>
        <div className="sidebar topic-list">
          <List
            sx={{ width: "100%", maxWidth: 200, pl: 0 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="sidebar topic-list"
          >
            <ListItemButton sx={{ pl: 0 }}>
              <ListItemText primary={currentUser[0].name} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 0 }}>
              <ListItemText primary="Posts" />
            </ListItemButton>
            <ListItemButton onClick={() => handleClick()} sx={{ pl: 0 }}>
              <ListItemText primary="Topics" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {topicMessage ? (
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText primary={topicMessage} />
                  </ListItemButton>
                </List>
              ) : (
                <></>
              )}

              {topicList ? (
                topicList.topics.map((topic) => (
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 1 }} key={topic.slug}>
                      <ListItemText primary={topic.slug} key={topic.slug} />
                    </ListItemButton>
                  </List>
                ))
              ) : (
                <></>
              )}
            </Collapse>
          </List>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
