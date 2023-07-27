export const awaitFunction = async (link) => {
    const res = await fetch(link)
    const data = await res.json();
    return data.results
  }