import React, { Component } from 'react';
//import loading from './loading.svg';

class Callback extends Component {
  render() {
    const style = {
      fontWeight: 'bold',
      color: 'blue',
      textAlign: 'center'
    }

    return (
      <div style={style}>
        <h1>Loading ...</h1>
      </div>
    );
  }
}

export default Callback;