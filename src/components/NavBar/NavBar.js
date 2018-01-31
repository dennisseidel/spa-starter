import React from 'react';

const person = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="dropdown navigation">
      <a className="navbar-item">
        <img src={props.logo} alt={props.alt} width={props.width} height={props.width} />
      </a>
      {
        props.elements.map((element) => (
          <a className="navbar-item" href={element.url}>
            {element.name}
          </a>
        ))
      }
      { props.isAuthenticated === true ? [
          <div className="navbar-end">
            <a className="navbar-item">
              Logout
            </a>
          </div> ] : [
          <div className="navbar-end">
            <a className="navbar-item">
              Login
            </a>
          </div>
        ]}
    </nav>
  );
}

export default person;