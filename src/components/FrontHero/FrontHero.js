import React from 'react';

const fronthero = (props) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h2 className="subtitle is-3">
            Build <b>anything</b> with EcoSphere
          </h2>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Search ..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default fronthero;