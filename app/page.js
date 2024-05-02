"use client"
import React, { useState } from "react";
import initial_articles from "./data.js";
import Header from "./header.js";
import SearchBar from "./search_bar.js";
import Footer from "./footer.js";
import NewsRow from "./news_row.js";
import intinal_articles from "./data.js";

const Page = () => {
  let [articles, setArticles] = useState(initial_articles);

  console.log(articles)

  const changeArticles = (newArticles) => {
    setArticles(newArticles);
  };


  return (
    <>
      <Header />
      <div className="container">
        <SearchBar changeArticles={changeArticles} />
        <div className="top-news">Top News From India</div>
        <NewsRow article1={articles[0]} article2={articles[1]} article3={articles[2]} />
        <NewsRow article1={articles[3]} article2={articles[4]} article3={articles[5]} />
        <NewsRow article1={articles[6]} article2={articles[7]} article3={articles[8]} />
      </div>
      <Footer />
    </>
  );
};

export default Page;


