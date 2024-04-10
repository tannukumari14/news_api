// import React, { useState } from "react";

// const SearchBar = () => {
//   const [userInput, setUserInput] = useState("");
//   const new_articles = [];

//   const handleSearchInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   const fetchNews = () => {
//     const apiKey = "44137023ef4d47af8275855373f32548";
//     const url = `https://newsapi.org/v2/everything?q=${userInput}&apiKey=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const search_articles = data.articles.slice(0, 9);
//         search_articles.forEach((search_article) => {

//           const new_article = {
//             id: search_article.id,
//             title: search_article.title,
//             url: search_article.url,
//             description: search_article.description,
//             urlToImage: search_article.urlToImage
//           };
//           new_articles.push(new_article);
//         });
//         console.log(new_articles);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };

//   return (
//     <>
//       <div className="search">
//         <input 
//           type="search" 
//           placeholder="Search" 
//           className="search-bar" 
//           // value={userInput}
//           onChange={handleSearchInput} 
//         />
//         <button 
//           className="go_button"
//           onClick={fetchNews} 
//         >Go</button>
//       </div>
//     </>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";

// const SearchBar = ({ setArticles }) => {
//   const [userInput, setUserInput] = useState("");

//   const handleSearchInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   const fetchNews = () => {
//     const apiKey = "44137023ef4d47af8275855373f32548";
//     const url = `https://newsapi.org/v2/everything?q=${userInput}&apiKey=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const searchArticles = data.articles.slice(0, 9);
//         setArticles(searchArticles); // Update parent component's state with new articles
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };

//   return (
//     <div className="search">
//       <input 
//         type="search" 
//         placeholder="Search" 
//         className="search-bar" 
//         value={userInput}
//         onChange={handleSearchInput} 
//       />
//       <button 
//         className="go_button"
//         onClick={fetchNews} 
//       >Go</button>
//     </div>
//   );
// };

// export default SearchBar;
"use client"
import React, { useState } from "react";

const SearchBar = ({ setArticles }) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchInput = (e) => {
    setUserInput(e.target.value);
  };

  const fetchNews = () => {
    const apiKey = "44137023ef4d47af8275855373f32548";
    const url = `https://newsapi.org/v2/everything?q=${userInput}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const searchArticles = data.articles.slice(0, 9);
        setArticles(searchArticles); // Update parent component's state with new articles
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="search">
      <input 
        type="search" 
        placeholder="Search" 
        className="search-bar" 
        value={userInput}
        onChange={handleSearchInput} 
      />
      <button 
        className="go_button"
        onClick={fetchNews} 
      >Go</button>
    </div>
  );
};

export default SearchBar;
