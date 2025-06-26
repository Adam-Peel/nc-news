async function fetchData(baseURL) {
  try {
    const data = await fetch(baseURL);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    const formattedData = await data.json();
    return formattedData;
  } catch (error) {
    throw err;
  }
}

export default fetchData;
