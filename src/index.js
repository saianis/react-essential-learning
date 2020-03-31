import React from 'react';
import ReactDOM from 'react-dom';

// React Component

//  Note: All component names must start with Uppercase letter
class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello All</h1>
      </div>
    )
  }

}


ReactDOM.render(
  <Message />, 
  document.getElementById('root')
)
