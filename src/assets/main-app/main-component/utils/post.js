async function postData(url, bodyToPost) {
  try {
    const post = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyToPost[0]),
    });
    const formattedPost = await post.json();
    return formattedPost;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default postData;
