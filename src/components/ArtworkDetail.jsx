import { useEffect } from "react";

function ArtworkDetail({ artwork, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="detail-image">
          <img
            src={artwork.primaryImage || artwork.primaryImageSmall}
            alt={artwork.title}
          />
        </div>
        <div className="detail-info">
          <button className="detail-close" onClick={onClose}>
            ×
          </button>
          <h2 className="detail-title">{artwork.title}</h2>
          <p className="detail-artist">
            {artwork.artistDisplayName || "Unknown artist"}
          </p>
          <p className="detail-date">{artwork.objectDate}</p>

          {artwork.medium && (
            <div className="detail-row">
              <span className="detail-row-label">Medium</span>
              <span>{artwork.medium}</span>
            </div>
          )}
          {artwork.department && (
            <div className="detail-row">
              <span className="detail-row-label">Department</span>
              <span>{artwork.department}</span>
            </div>
          )}
          {artwork.culture && (
            <div className="detail-row">
              <span className="detail-row-label">Culture</span>
              <span>{artwork.culture}</span>
            </div>
          )}
          {artwork.creditLine && (
            <div className="detail-row">
              <span className="detail-row-label">Credit</span>
              <span>{artwork.creditLine}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtworkDetail;