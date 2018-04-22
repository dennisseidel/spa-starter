import React from 'react';

const fronthero = (props) => {
  let navbarClass=`hero is-${props.bgColor}`
  let titleClass=`subtitle is-3 ${props.alignTitle}`

  return (
    <section className={navbarClass}>
      <div className="hero-body">
        <div className="container">
          <h2 className={titleClass}>
            {props.title}
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