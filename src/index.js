import React, { Component } from 'react';
import { render } from 'react-dom';
import { exec } from 'child_process';

let bookList = [
  {"title": "Three mistakes of my life", "author": "Chetan Bhagat", "pages": 234},
  {"title": "Two states", "author": "Chetan Bhagat", "pages": 354},
  {"title": "One night at call center", "author": "Chetan Bhagat", "pages": 300}
]




// Child Component
const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>pages: {pages} pages</p>
    </section>
  )
}


// Parent component
class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map(
          ( book, i) => 
            <Book 
              key= {i}
              title={book.title} 
              author={book.author} 
              pages={book.pages}/>
        )}
      </div>
    )

  }
}

render(
  <Library books={bookList} />, 
  document.getElementById('root')
)
