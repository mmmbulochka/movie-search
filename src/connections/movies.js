export async function getMovie(query) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("key", process.env.NEXT_PUBLIC_KEY);
  url.searchParams.set("query", query);
  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error("getMovie", response);
    throw new Error("ERROR getMovie fetch");
  }
  return response.json();
}