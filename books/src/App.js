import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import books from './books.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {books.map((books)=> {
          return <books title={books.title}
            author={books.author}
            book_image_url={books.book_image_url}
            description={books.description}
          />
        })}
      </div>
    );
  }
}

const books = [
  {
    title: 'The Ancient Magus Bride',
    author:	'Kore Yamazaki',
    book_image_url: 'https://img1.ak.crunchyroll.com/i/spire2/fcd25c135faf173a4d8a67a82b3400b71507240910_full.jpg',
    description: 'Having been ostracized by both her relatives and partially by society, orphaned high school student Chise Hatori decides to sell herself at an auction in order for somebody else to take her in and have a new place to call home. At the auction in London, she is sold for five million pounds to Elias Ainsworth, a seven-foot-tall humanoid with an animal skull for a head. This magus, who seems closer to demon than human, will either bring her the light she desperately seeks or drown her in ever deeper shadows in her new country, Britain'
  },
  {
    title: 'Fairy Tail',
    author:	'Hiro Mashima',
    book_image_url: 'https://images.penguinrandomhouse.com/cover/9781632364203',
    description: 'The world of Earth-land is home to numerous guilds where wizards[3] apply their magic for paid job requests. Natsu Dragneel, a dragon slayer wizard from the Fairy Tail guild, explores the Kingdom of Fiore in search of his missing adoptive father, the dragon Igneel.'
  }
]

export default App;
