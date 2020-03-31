import React, { Component } from 'react';
import { render } from 'react-dom';

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
const Library = ({books}) => {
  return (
    <div>
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

render(
  <Library books={bookList} />, 
  document.getElementById('root')
)
