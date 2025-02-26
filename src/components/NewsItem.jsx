import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

const NewsItem=(props)=>  {
    let { title, description, imageurl, newsUrl,author,date,source } = props;
    return (
      <div className="my-3 mx-3">
        <div className="card" style={{height:'auto',maxWidth:'90%'}}>
          <div style={{position:'relative'}}>
          <img src={imageurl} className="card-img-top" alt="..." />
         
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-custom" style={{zIndex:"1", transform: "translate(-50%, 50%)"}}>
  {source}
    </span>
    </div>
    <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{position:'relative'}}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem
