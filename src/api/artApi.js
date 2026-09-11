const SEARCH_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting";

const OBJECT_URL = (id) =>
  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

export async function getArtworks() {
  const searchResponse = await fetch(SEARCH_URL);
  const searchResult = await searchResponse.json();

  const ids = searchResult.objectIDs.slice(0, 12);

  const objects = await Promise.all(
    ids.map((id) => fetch(OBJECT_URL(id)).then((res) => res.json()))
  );

  return objects.filter((obj) => obj.primaryImageSmall);
}