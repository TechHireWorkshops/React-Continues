import React, { useState, useEffect } from 'react';
import '../css/container.css';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function CharacterContainer() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await axios.get('https://swapi.dev/api/people');
    console.log(response);
    setCharacters(response.data.results);
  };

  return (
    <div className='container'>
      <h1>People</h1>
      <div className='card-container'>
        {characters &&
          characters.map(character => {
            return (
              <Link to={`/characters/${character.url.slice(-2, -1)}`}>
                <Card
                  title={character.name}
                  attr1={'Eye color:'}
                  attr1Data={character.eye_color}
                  attr2={'Hair color:'}
                  attr2Data={character.hair_color}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
