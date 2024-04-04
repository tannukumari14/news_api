import React from 'react';

const News_article = ({article}) => (
  <>
   <div className='col-sm-4'>
    <img className='image' src={article.image} alt={article.Name} />
    <h2 className='Name' >{article.Name}</h2>
    <p className='description'>{article.description}</p>
    <a className="article  ">
      Read full article <img className="arrow" src="arrow.jpeg" alt="arrow" />
    </a>
  </div>
  </>
);
export default News_article;


