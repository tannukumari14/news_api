import React from 'react';
import  News_articles  from "./News_articles.js";

const News_row = ({newsdata,newsdata1,newsdata2}) => {
    return (
        <>
            <div className="row">
                < News_articles list={newsdata}/>
                < News_articles  list={newsdata1}/>
                < News_articles list={newsdata2}/>
            </div>
        </>
    );
}
export default News_row;



