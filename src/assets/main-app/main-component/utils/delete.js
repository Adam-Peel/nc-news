async function deleteData(baseURL) {
  try {
    const deleted = await fetch(baseURL, { method: "DELETE" });
    if (!deleted.ok) {
      throw new Error(`Response status: ${deleted.status}`);
    }
  } catch (err) {
    throw err;
  }
}

export default deleteData;
