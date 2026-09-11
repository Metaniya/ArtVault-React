function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header">
      <h1 className="wordmark">ArtVault</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search artworks or artists"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
}

export default Header;