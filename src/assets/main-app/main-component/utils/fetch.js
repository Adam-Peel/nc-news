async function fetchData(baseURL) {
  try {
    const data = await fetch(baseURL);
    const formattedData = await data.json();
    return formattedData;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default fetchData;
