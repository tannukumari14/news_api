// with dummy data manually hardcode

const News_row = () => {
  return (
    <>
       <div className='col-sm-4'>
        <img className="image" src="image1.png"></img>
        <h2 className="text" >Echoes of Defeat:A Personal Reflection on India's 2023 World Cup Loss</h2>
        <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
        <a className="read-article hidden-link">
            Read full article <img className="arrow" src="arrow.jpeg" alt="arrow" />
        </a>
      </div>
    </>
  );
};
export default News_row;
