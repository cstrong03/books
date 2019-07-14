import React from 'react';

const books = props =>(
  <div>
    <h1>{props.title}</h1>
    <h3>{props.author}</h3>
    <img className="image" alt={props.description} src={props.book_image_url}/>
    <p>{props.description}</p>
  </div>
);

export default books;
