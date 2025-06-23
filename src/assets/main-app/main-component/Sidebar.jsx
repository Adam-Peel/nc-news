function Sidebar() {
  return (
    <aside>
      <div className="sidebar user-avatar">USER IMAGE HERE</div>
      <div className="sidebar username">Username here</div>
      <div id="main-header-stats-div">User stats here</div>
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
