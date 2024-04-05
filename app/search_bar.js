import React, { useState } from "react";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");

  const handlesearchInput = (e) => {
    setUserInput(e.target.value);
  };

  const handlegoButton = () => {
    console.log("search button clicked", userInput);
    fetchNews(userInput);
  };

  const fetchNews = (userInput) => {
    const apiKey = "44137023ef4d47af8275855373f32548";
    const url = `https://newsapi.org/v2/everything?q=${userInput}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log(data.articles)
      })

      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="search">
        <input onChange={handlesearchInput} placeholder="Search" className="search-bar" type="search" />
        <button onClick={handlegoButton} className="go_button">Go</button>
      </div>
    </>
  );
};

export default SearchBar;
