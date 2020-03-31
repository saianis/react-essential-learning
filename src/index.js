import React, { Component } from 'react';
import { render } from 'react-dom';

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>pages: {pages} pages</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      <Book title='Three mistakes of my life' author='Chetan Bhagat' pages={300}/>
      <Book title='Two states' author='Chetan Bhagat' pages={250}/>
      <Book title='One night at Call Center' author='Chetan Bhagat' pages={350}/>
    </div>
  )
}

render(
  <Library />, 
  document.getElementById('root')
)
