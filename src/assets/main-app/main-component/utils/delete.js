async function deleteData(baseURL) {
  try {
    const deleted = await fetch(baseURL, { method: "DELETE" });
    if (!deleted.ok) {
      throw deleted.status;
    }
  } catch (err) {
    throw err;
  }
}

export default deleteData;
