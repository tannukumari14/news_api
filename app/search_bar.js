// const SearchBar = () => {
//   return (
//   <>
//     <div className="search">
//         <input placeholder="Search" className="search-bar" type="search" />
//         <button className="go_button ">Go</button>
//     </div>
//   </>
//   )
// }
// export default SearchBar;

import { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [newsData, setNewsData] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log('Search clicked:', searchInput);
    fetchNews(searchInput);
  };

  class Product{
    constructor(title,description,urlToImage,url){
      this.title = title;
      this.description = description;
      this.urlToImage=urlToImage;
      this.url=url;
    }
  }

  
  const fetchNews = (searchQuery) => {
    const apiKey = "44137023ef4d47af8275855373f32548";
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const news = data.articles.map(article => {
          return new Product(article.description, article.title, article.url, article.urlToImage);
        });
        console.log(news,"NEWS");
        setNewsData(news);
      })
      
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };
  
    return (
      <>
        <div className="search">
          <input value={searchInput} placeholder="Search" className="search-bar" type="search" onChange={handleSearchInputChange} />
          <button onClick={handleSearchButtonClick} className="go_button">Go</button>
        </div>
        {newsData.map((item) => (
          <div key={item.description}>
            <img className='image' src={item.urlToImage}/>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.url}</p>
          </div>
        ))} 
      </>
    );
  };
  
  export default SearchBar;




// import { useState } from 'react';

// const SearchBar = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [newsData, setNewsData] = useState([]);

//   const handleSearchInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearchButtonClick = () => {
//     console.log('Search clicked:', searchInput);
//     fetchNews(searchInput);
//   };

//   const fetchNews = (searchQuery) => {
//     const apiKey = "44137023ef4d47af8275855373f32548";
//     const url = https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey};

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); 
//         setNewsData(data.articles); // Assuming data is an array of articles, set the state with fetched data
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       });
//   };

//   return (
//     <>
//       <div className="search">
//         <input value={searchInput} placeholder="Search" className="search-bar" type="search" onChange={handleSearchInputChange} />
//         <button onClick={handleSearchButtonClick} className="go_button">Go</button>
//       </div>
//       {newsData.map((item) => (
//         <div key={item.description}>
//           <h1>{item.title}</h1>
//           <p>release_date:{item.publishedAt}</p>
//           <p>original_language:{item.source.name}</p>
//           <img src={item.urlToImage} alt="News Thumbnail" />
//           <p>{item.description}</p>
//           <p>{item.url}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default SearchBa

