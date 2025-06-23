import CommentsFeed from "../components/CommentsFeed";
import UserInteractionBox from "../components/UserInteractionBox";

function SingleArticlePage() {
  return (
    <main>
      <article>
        <section className="article-head">
          <div className="article-head-image">IMAGE HERE</div>
          <div className="article-head-info">
            <h2>Article title</h2>
            <p>Article Topic</p>
            <br>Article Author: Date</br>
          </div>
        </section>
        <section>
          <h3>Article body</h3>
          Here will be the main text of the article I will have to ensure neat
          formatting. Possibly add some funky emphasis to the first letter.
        </section>
        <section>
          <UserInteractionBox />
        </section>
        <section>
          <CommentsFeed />
        </section>
      </article>
    </main>
  );
}

export default SingleArticlePage;
