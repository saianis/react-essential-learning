import React from 'react';
import { render } from 'react-dom';
import Library from './Library';
import { bookList } from './BookList';



render(
  <Library books={bookList} />, 
  document.getElementById('root')
)
