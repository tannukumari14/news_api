"use client"
import React from "react";
import articles from "./data.js";
import Header from "./header.js";
import SearchBar from "./search_bar.js";
import Footer from "./footer.js";
import News_row from "./news_row.js";

const page = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar />
        <div className='top-news'>Top News From India</div>
        <News_row article1={articles[0]} article2={articles[1]} article3={articles[2]} />
        <News_row article1={articles[3]} article2={articles[4]} article3={articles[5]}  />
        <News_row article1={articles[6]} article2={articles[7]} article3={articles[8]} />
      </div>
      <Footer />
    </>
  );
};

export default page;