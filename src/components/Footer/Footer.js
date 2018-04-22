import React from 'react';

const footer = (props) => {
  return (
    <footer className="footer has-background-info">
      <div className="container">
        <div className="content has-text-centered has-text-dark">
          <p>
            <a href="/terms">Terms</a> | <a href="/privacy">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;