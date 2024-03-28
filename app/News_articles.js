import React from 'react';

const News_articles = ({list}) => (
  <>
   <div className='col-sm-4'>
    <img className='image' src={list.image} alt={list.Name} />
    <h2 className='Name' >{list.Name}</h2>
    <p className='description'>{list.description}</p>
    <a className="article  ">
      Read full article <img className="arrow" src="arrow.jpeg" alt="arrow" />
    </a>
  </div>
  </>
);
export default News_articles;


