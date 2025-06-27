async function fetchData(baseURL) {
  try {
    const data = await fetch(baseURL);
    if (!data.ok) {
      throw data.status;
    }
    const formattedData = await data.json();
    return formattedData;
  } catch (error) {
    throw error;
  }
}

export default fetchData;
