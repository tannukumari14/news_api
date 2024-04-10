import React from 'react';
import News_article from "./news_article.js";

const News_row = ({article1, article2, article3}) => {
    return (
        <>
            <div className="row">
                <News_article article={article1}/>
                <News_article article={article2}/>
                <News_article article={article3}/>
            </div>
        </>
    );
}
export default News_row;


// const News_row = ({article1,article2,article3, new_articles}) => {
    
//     console.log(article1,"article1");
//     console.log(new_articles,"articles");

//     return (
//         <div className="row">
//             <News_article article={article1}/>
//             <News_article article={article2}/>
//             <News_article article={article3}/>
//             {/* {new_articles && new_articles.length > 0 ? (
//                 new_articles.map(news => (
//                     <News_article key={news.id} article={news}/>
//                 ))
//             ) : (
//                 <p>No articles to display</p>
//             )} */}
//         </div>
//     );
// }

// export default News_row;

