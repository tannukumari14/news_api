"use client"
import React, { useState } from "react";
import intinal_articles from "./data.js";
import Header from "./header.js";
import SearchBar from "./search_bar.js";
import Footer from "./footer.js";
import News_row from "./news_row.js";


const page = () => {
  const [articles, setArticles] = useState(intinal_articles);

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar setArticles={setArticles} />
        <div className='top-news'>Top News From India</div>
        <News_row article1={articles[0]} article2={articles[1]} article3={articles[2]} />
        <News_row article1={articles[3]} article2={articles[4]} article3={articles[5]}  />
        <News_row article1={articles[6]} article2={articles[7]} article3={articles[8]} />
        <News_row articles={articles}/>
      </div>
      <Footer />
    </>
  );
};

export default page;
