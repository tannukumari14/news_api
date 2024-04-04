import React from 'react';
import  News_article  from "./News_article.js";

const News_row = ({newsdata,newsdata1,newsdata2}) => {
    return (
        <>
            <div className="row">
                < News_article article={newsdata}/>
                < News_article  article={newsdata1}/>
                < News_article article={newsdata2}/>
            </div>
        </>
    );
}
export default News_row;



