import React from 'react';
import  News_articles  from "./News_articles.js";

const News_row = ({NewsData,NewsData1,NewsData2}) => {
    return (
        <>
            <div className="row">
                < News_articles news_data={NewsData}/>
                < News_articles  news_data={NewsData1}/>
                < News_articles news_data={NewsData2}/>
            </div>
        </>
    );
}
export default News_row;



