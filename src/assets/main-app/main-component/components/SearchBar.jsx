import { useState } from "react";

function SearchBar({ title, url }) {
  const [searchParams, setSearchParams] = useState(url);

  function handleChange(event) {
    setSearchParams(url + event.target.value);
  }
  console.log(searchParams);

  return (
    <section className="searchbar">
      <h3 className="article-start-accent">{title}</h3>
      <nav>
        <form>
          <select
            id="sort-by"
            value={searchParams}
            label="Sort by:"
            onChange={handleChange}
          >
            <option>Sort by</option>
            <option value="?sort=votes:desc">Votes: Descending</option>
            <option value="?sort=votes:asc">Votes: Ascending</option>
            <option value="?sort=created_at:asc">Date: Descending</option>
            <option value="?sort=created_at:desc">Date: Ascending</option>
          </select>
        </form>
      </nav>
    </section>
  );
}

export default SearchBar;
