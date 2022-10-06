import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city"
          autoFocus="off"
          autoComplete="off"
          className="input"
          id="input"
        />
        <input
          type="submit"
          value="Search"
          className="search-button"
          id="search-button"
        />
        <button className="current-location" id="current-location">
          {" "}
          <span>📍</span>
        </button>
      </form>
    </div>
  );
}
