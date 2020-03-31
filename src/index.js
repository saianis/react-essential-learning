import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


let bookList = [
  {"title": "Three mistakes of my life", "author": "Chetan Bhagat", "pages": 234},
  {"title": "Two states", "author": "Chetan Bhagat", "pages": 354},
  {"title": "One night at call center", "author": "Chetan Bhagat", "pages": 300}
]

// Child Component
const Book = ({title="No title provide", author="No author", pages=0, freeBookmark}) => {
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
// Note: Component lifecycle methods are only available when using class syntax and can't use them with function components
class Library extends Component {

  static defaultProps = {
    books: [
      {"title": "Five point someone", "author": "Chetan Bhagat", "pages": 324},
    ]

  }

  state = { 
    open: true,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading: false
  }

  componentDidMount() {
    this.setState({loading : true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
          .then(data => data.json())
          .then(data => this.setState({data, loading: false}))
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
        {this.state.loading ? 'loading...' : 
          <div>
            {this.state.data.map (product => {
              return (
                <div key={product.id}> 
                  <h3>Library product of the week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100}/>

                </div>
              )
            })}

          </div>}
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

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}

render(
  <Library books={bookList} />, 
  document.getElementById('root')
)
