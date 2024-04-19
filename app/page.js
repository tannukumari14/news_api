"use client"
import React, { useState, useEffect } from 'react';
import Header from './header.js';
import SearchBar from './search_bar.js';
import Footer from './footer.js';
import News_row from './news_row.js';

const Page = () => {
  const [articles, setArticles] = useState([]); 

  const fetchArticles = (a) => {
    setArticles(a)
  };
  useEffect(() => {
      const apiKey = "44137023ef4d47af8275855373f32548";
      fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=9&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          
          data.articles.forEach(article => {
            console.log( "id:",article.id, "title:", article.title, "urlToImage:", article.urlToImage, "description:", article.description)
          });
          let limitedArticles = data.articles.slice(0, 9);
          setArticles(limitedArticles);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);
  
  return (
    <>
      <Header />
      <div className="container">
        <SearchBar fetchArticles={fetchArticles} />
        <div className='top-news'>Top News From India</div>
        <News_row article1={articles[0]} article2={articles[1]} article3={articles[2]} />
        <News_row article1={articles[3]} article2={articles[4]} article3={articles[5]}  />
        <News_row article1={articles[6]} article2={articles[7]} article3={articles[8]} />
      </div>
      <Footer />
    </>
  );
};

export default Page;


