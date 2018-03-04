import React from 'react';

const newsbox = (props) => {
  return (
    <div className="tile is-4 is-parent">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.picture} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{props.title}</p>
          <div className="content">
            {props.summary}
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <a href="https://twitter.com/codinghorror/status/506010907021828096">{props.button}</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default newsbox;