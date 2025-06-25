import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
  const { currentUser } = useContext(UserContext);

  return (
    <aside>
      <div className="sidebar user-avatar">
        <Avatar
          alt={currentUser[0].name}
          src={currentUser[0].avatar_url}
          sx={{ width: 65, height: 65 }}
        />
      </div>
      <div className="sidebar username">{currentUser[0].name}</div>
      <div id="main-header-stats-div"></div>
      <nav>
        <div className="sidebar topic-list">
          <ul className="sidebar-list">
            {/* List depending on GET call */}
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
          </ul>
        </div>
        <div className="sidebar article-list">
          <ul className="sidebar-list">
            {/* List depending on GET call */}
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
            <li>Article 4</li>
            <li>Article 5</li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
