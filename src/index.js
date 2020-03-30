import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'blue',
  color: 'white',
  fontFamily: 'Arial'
};

const title = React.createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello! Created my first react element'
)

ReactDOM.render(
  title, document.getElementById('root')
)
