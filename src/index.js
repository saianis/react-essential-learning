import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'blue',
  color: 'white',
  fontFamily: 'Arial'
};



// without JSX

// const title = React.createElement(
//   'ul',
//   {id: 'title', className: 'header', style: style},
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )

// with Jsx

ReactDOM.render(
  <div style={style}>
    <h1> Welcome to JSX</h1>
    <p>React is fun</p>
  </div>, 
  document.getElementById('root')
)
