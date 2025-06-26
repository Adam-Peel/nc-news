async function patchData(url, bodyToPatch) {
  try {
    const patch = await fetch(url, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyToPatch[0]),
    });
    const formattedPatch = await patch.json();
    if (!formattedPatch.ok) {
      throw formattedPatch.status;
    }
    return formattedPatch;
  } catch (err) {
    throw err;
  }
}

export default patchData;
