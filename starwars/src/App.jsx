import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import PlanetsContainer from './components/PlanetsContainer';
import CharacterDetail from './components/CharacterDetail';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <img
        className='hero'
        src='https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg'
        alt=''
      />
      <Route path='/' exact>
        <div className='links'>
          <Link to='/characters'>View Characters</Link>
          <Link to='/planets'>View Planets</Link>
        </div>
      </Route>
      <Route exact path='/characters'>
        <CharacterContainer />
      </Route>
      <Route path='/planets'>
        <PlanetsContainer />
      </Route>
      <Route exact path='/characters/:characterId'>
        <CharacterDetail />
      </Route>
    </div>
  );
}

export default App;
