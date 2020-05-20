import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import uuid from 'react-uuid';


const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [searchInput, setsearchInput] = useState('');
  const [feedError, setFeedError] = useState(null);

  const url = 'https://newsapi.org/v2/top-headlines?country=ng&pageSize=60&apiKey=7e880dff532742e38183bea3a25100bb';

  const searchUrl = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=7e880dff532742e38183bea3a25100bb`;


  const handleFormSubmit = async e => {
    e.preventDefault();
    setisLoading(true)
    try {
      const response = await fetch(searchUrl);
      const data = await response.json()
      console.log(data);
      if (data.status === 'ok') {
          setisLoading(false)
          setFeeds(data.articles)
        } else if (data.status === 'error') {
          setFeedError(data.message)
        }
    } catch (error) {
      console.log(error)
      setFeedError(error.message)

    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json()
        // console.log(data);
        if (data.status === 'ok') {
          setisLoading(false)
          setFeeds(data.articles)
        } else if (data.status === 'error') {
          setisLoading(false);
          setFeedError(data.message)
        }
      } catch (error) {
        console.log(error)
        setisLoading(false);
        setFeedError(error.message)
      }
    }
    fetchData()
  }, []);

    const FeedList = feeds.length ? (
    feeds.map((feed) => {
      const { source: { name }, title, description, url, urlToImage, publishedAt, } = feed;
      return (
        <article className="article" key={uuid()}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="image col-5" style={{backgroundImage: `url(${urlToImage})`}}></a>
          <a href={url} target="_blank" rel="noopener noreferrer" className="article-details col-7">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              <span>{name}</span>
              <span>{publishedAt}</span>
            </p>            
          </a>
        </article>
      )
    })
  ) : (
    <p>No News available</p>
  );

  return (
    <div className="container">
      <form action="#" onSubmit={handleFormSubmit}>
        <label htmlFor="searchInput">
          Enter a Topic to Search:
          <input 
            type="text"
            className=""
            value={searchInput}
            name="searchInput"
            onChange={e => setsearchInput(e.target.value)}
            required
          />
        </label>
        <button>Search</button>
      </form>

      <div className="row">
        {feedError ? <p>{feedError}</p> : null}
        {isLoading ? <Spinner /> : FeedList}
      </div>
      {/* <footer>
        Built by <a href="">Young-Einstein10</a>
      </footer> */}
    </div>
  )
}

export default Dashboard;
