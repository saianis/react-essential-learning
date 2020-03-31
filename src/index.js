import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'blue',
  color: 'white',
  fontFamily: 'Arial'
};




// const title = React.createElement(
//   'ul',
//   {id: 'title', className: 'header', style: style},
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )

ReactDOM.render(
  <div>
    <h1> Welcome to JSX</h1>
    <p>React is fun</p>
  </div>, 
  document.getElementById('root')
)
