import { useEffect, useState } from "react";
import { getArtworks } from "./api/artApi";

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks().then((data) => {
      setArtworks(data);
    });
  }, []);

  return (
    <div>
      <h1>ArtVault</h1>

      {artworks.map((artwork) => (
        <div key={artwork.objectID}>
          <h2>{artwork.title}</h2>
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
          <img
            src={artwork.primaryImageSmall}
            alt={artwork.title}
            width={200}
          />
        </div>
      ))}
    </div>
  );
}

export default App;