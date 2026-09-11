import { useEffect, useState } from "react";
import { getArtworks } from "./api/artApi";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ArtworkCard from "./components/ArtworkCard";
import ArtworkDetail from "./components/ArtworkDetail";
import Footer from "./components/Footer";

function App() {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const timeout = setTimeout(() => {
      setLoading(true);
      setError(null);

      getArtworks({ query: searchTerm, medium: activeFilter })
        .then((data) => {
          if (!cancelled) {
            setArtworks(data);
            setLoading(false);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setError("Couldn't load artworks. Try again.");
            setLoading(false);
          }
        });
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [searchTerm, activeFilter]);

  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Filters activeFilter={activeFilter} onSelect={setActiveFilter} />

      {loading && <p className="status-msg">Loading artworks...</p>}
      {error && <p className="status-msg error">{error}</p>}
      {!loading && !error && artworks.length === 0 && (
        <p className="status-msg">No artworks found. Try a different search.</p>
      )}

      <div className="grid">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.objectID}
            artwork={artwork}
            onSelect={setSelectedArtwork}
          />
        ))}
      </div>

      {selectedArtwork && (
        <ArtworkDetail
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;