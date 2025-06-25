async function deleteData(baseURL) {
  try {
    const deleted = await fetch(baseURL, { method: "DELETE" });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default deleteData;
