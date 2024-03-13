import React from 'react';
import List_items from "./List_items.js";

const News_article = ({NewsData,NewsData1,NewsData2}) => {
    return (
        <>
            <div className="row">
                <List_items news_data={NewsData}/>
                <List_items news_data={NewsData1}/>
                <List_items news_data={NewsData2}/>
            </div>
        </>
    );
}
export default News_article;



