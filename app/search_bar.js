const Search = () => {
  return (
    <div className="Search" >
      <form className="d-flex" role="search">
        <img id="search_icon" src="search.jpeg" alt="Search" /> 
        <h4 id="search_text">Search</h4>
        <input className="form-control me-2" type="search" aria-label="Search" /> 
        <button className="go_button btn " type="submit">Go</button>
      </form>
    </div>
  );
}

export default Search;
