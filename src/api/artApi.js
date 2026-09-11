const BASE = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function getDepartments() {
  const res = await fetch(`${BASE}/departments`);
  const data = await res.json();
  return data.departments;
}

export async function getArtworks({ query, departmentId } = {}) {
  const params = new URLSearchParams();
  params.set("hasImages", "true");
  params.set("q", query && query.trim() ? query.trim() : "art");
  if (departmentId) params.set("departmentIds", departmentId);

  const searchRes = await fetch(`${BASE}/search?${params.toString()}`);
  const searchData = await searchRes.json();

  const ids = (searchData.objectIDs || []).slice(0, 20);

  const objects = await Promise.all(
    ids.map((id) => fetch(`${BASE}/objects/${id}`).then((res) => res.json()))
  );

  return objects.filter((obj) => obj.primaryImageSmall);
}
