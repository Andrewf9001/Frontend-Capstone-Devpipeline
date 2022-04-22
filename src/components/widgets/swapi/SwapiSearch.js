import { useState, useEffect } from "react";

const countUrl = "https://www.swapi.tech/count/all";
const urls = [
  "https://www.swapi.tech/api/films",
  "https://www.swapi.tech/api/people",
  "https://www.swapi.tech/api/planets",
  "https://www.swapi.tech/api/species",
  "https://www.swapi.tech/api/starships",
  "https://www.swapi.tech/api/vehicles",
];

const SwapiSearch = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [search, setSearch] = useState("");
  const [counts, setCounts] = useState([]);
  const [results, setResults] = useState(null);

  const handleSearchSelected = (e) => {
    let request = url;

    if (slug) {
      request = `${request}/${slug}`;
    }

    if (search) {
      request = `${url}/?name=${search}`;
    }

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .then(() => {
        setSearch("");
        setSlug("");
      });
  };

  useEffect(() => {
    fetch(countUrl)
      .then((res) => res.json())
      .then((data) => setCounts(data.counts))
      .catch((err) => console.log("Fetch Count: ", err));
  }, []);

  const stripUrl = (url) => {
    return url.split("/").at(-1);
  };

  return (
    <div className="swapi-container">
      <div className="swapi-select-wrapper">
        <select onChange={(e) => setUrl(e.target.value)}>
          <option>Select Category</option>
          {urls.map((url) => {
            return (
              <option key={url} value={url}>
                {stripUrl(url)}
              </option>
            );
          })}
        </select>
      </div>

      {url && (
        <div className="input-btn-wrapper">
          {!search && (
            <input
              type="number"
              min="1"
              max={counts[stripUrl(url)]}
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          )}

          {!slug && (
            <input
              type="text"
              value={search}
              placeholder="Enter Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          <button
            disabled={results ? true : false}
            onClick={handleSearchSelected}
          >
            Search
          </button>

          <button
            disabled={results ? false : true}
            onClick={() => setResults(null)}
          >
            Clear
          </button>
        </div>
      )}

      {results && (
        <div className="json-wrapper">
          <h1>{JSON.stringify(results)}</h1>
        </div>
      )}
    </div>
  );
};

export default SwapiSearch;
