import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";
import image from "./image.jpg";


const News = (props) => {
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] =useState(0);

  const UpdateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=3d208a0d95334e8fa962c9284d8379eb&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    UpdateNews();
    document.title=capitalizeFirstLetter(props.category) + " -News Deck";
  }, []);
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=3d208a0d95334e8fa962c9284d8379eb&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <>
      <h1
        className="text-center head"
        style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}
      >
        NewsDeck - Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container text-center">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((element, index) => (
                <div
                  className="col-md-4"
                  key={
                    element.url
                      ? `${element.url}-${index}`
                      : `news-item-${index}`
                  }
                >
                  <NewsItem
                    title={
                      element.title ? element.title.slice(0, 45) : "No Title"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "No Description"
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                    }
                    newsUrl={element.url}
                    author={element.author || "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))
            ) : (
              <h3 className="text-center">No news available.</h3>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News
News.defaultProps = {
  country: "us",
  pagesize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
