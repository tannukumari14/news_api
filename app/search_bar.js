import React, { useState } from "react";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const articlesData = [];

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
        const articles = data.articles.slice(0, 9); 
        articles.forEach((article) => {
          const title = article.title;
          const url = article.url;
          const description = article.description;
          const urlToImage = article.urlToImage;

          const articleObject = {
            title: title,
            url: url,
            description: description,
            urlToImage: urlToImage
          };
          articlesData.push(articleObject);
        });
        console.log(articlesData);
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
