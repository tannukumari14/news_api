import React from 'react';

const News_articles = ({news_data}) => (
  <>
   <div className='col-sm-4'>
    <img className='image' src={news_data.image} alt={news_data.Name} />
    <h2 className='Name' >{news_data.Name}</h2>
    <p className='description'>{news_data.description}</p>
    <a className="article  ">
      Read full article <img className="arrow" src="arrow.jpeg" alt="arrow" />
    </a>
  </div>
  </>
);
export default News_articles;


