async function postData(url, bodyToPost) {
  try {
    const post = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyToPost[0]),
    });
    const formattedPost = await post.json();
    if (!formattedPost.ok) {
      throw formattedPost.status;
    }
    return formattedPost;
  } catch (err) {
    throw err;
  }
}

export default postData;
