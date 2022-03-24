export default function SearchItem({ query, handleChange }) {
  return (
    <div>
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for package ID"
          value={query}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
