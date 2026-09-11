function ArtworkCard({ artwork, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(artwork)}>
      <div className="card-image-wrap">
        <img src={artwork.primaryImageSmall} alt={artwork.title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{artwork.title}</h2>
        <p className="card-artist">
          {artwork.artistDisplayName || "Unknown artist"}
        </p>
        <p className="card-date">{artwork.objectDate}</p>
      </div>
    </div>
  );
}

export default ArtworkCard;