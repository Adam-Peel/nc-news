function SearchBar() {
  return (
    <section className="searchbar">
      <div>
        {/* TODO - Add labels */}
        <input type="text" placeholder="search by title"></input>
        <button className="searchbar-button">Search</button>
      </div>
      <div>
        <nav>
          <span>
            <button className="searchbar-button">Newest</button>
          </span>
          <span>
            <button className="searchbar-button">Hottest</button>
          </span>
          <span>
            <button className="searchbar-button">Most talked about</button>
          </span>
        </nav>
      </div>
    </section>
  );
}

export default SearchBar;
