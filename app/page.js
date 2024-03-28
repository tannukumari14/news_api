"use client"
import React from "react";
import Header from "./header.js";
import SearchBar from "./search_bar.js";
import Footer from "./footer.js"
import news_data from "./data.js"
import News_row from "./New_row.js";

const page = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar />
        <div className='top-news'>Top News From India</div>
        <News_row newsdata={news_data[0]} newsdata1={news_data[1]} newsdata2={news_data[2]}  />
        <News_row newsdata={news_data[3]} newsdata1={news_data[4]} newsdata2={news_data[5]}  />
        <News_row newsdata={news_data[6]} newsdata1={news_data[7]} newsdata2={news_data[8]} />
      </div>
      <Footer />
    </>
  );
};

export default page;