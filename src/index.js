import React, { Component } from 'react';
import { render } from 'react-dom';
import { exec } from 'child_process';

let bookList = [
  {"title": "Three mistakes of my life", "author": "Chetan Bhagat", "pages": 234},
  {"title": "Two states", "author": "Chetan Bhagat", "pages": 354},
  {"title": "One night at call center", "author": "Chetan Bhagat", "pages": 300}
]

// Child Component
const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
    <div>
      <p>
        The library is hiring. Go to www.library.com/jobs for more.
      </p>
    </div>

const NotHiring = () => 
    <div>
      <p>
        The library is not hiring. Check back later for more info.
      </p>
    </div>    



// Parent component
class Library extends Component {

  state = { 
    open: true,
    freeBookmark: true,
    hiring: false
   }

  toggleOpenClosed = () => {
    this.setState( prevState => 
      ({
        open: !prevState.open
      }
    ))
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring / > : <NotHiring />}
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>
          Change
        </button>
        {books.map(
          ( book, i) => 
            <Book 
              key= {i}
              title={book.title} 
              author={book.author} 
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}/>
        )}
      </div>
    )

  }
}

render(
  <Library books={bookList} />, 
  document.getElementById('root')
)
