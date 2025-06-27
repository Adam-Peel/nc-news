function BadRequest(errorStatus) {
  if (errorStatus === 404) {
    return (
      <main>
        <h1>We're sorry, but not all news is good news!</h1>
        <h2>
          The content can't be retrieved. If possible try and simplify your
          search request.
        </h2>
      </main>
    );
  } else if (errorStatus === 400) {
    return (
      <main>
        <h1>We're sorry, but not all news is good news!</h1>
        <h2>It looks like the content you wanted wasn't found.</h2>
      </main>
    );
  } else {
    return (
      <main>
        <h1>We're sorry, but not all news is good news!</h1>
        <h2>
          Something went wrong with where we're getting the news from. Please
          try again or check back later...
        </h2>
      </main>
    );
  }
}

export default BadRequest;
