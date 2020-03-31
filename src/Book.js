import React from 'react';

export const Book = ({title="No title provide", author="No author", pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>pages: {pages} pages</p>
        <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
      </section>
    )
  }