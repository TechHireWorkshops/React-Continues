import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/characterdetail.css';
import axios from 'axios';

export default function CharacterDetail() {
  const [character, setCharacter] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    fetchCharacter();
  }, [characterId]);

  const fetchCharacter = async () => {
    const response = await axios.get(
      `http://swapi.dev/api/people/${characterId}`
    );
    setCharacter(response.data);
  };

  return (
    <>
      {character && (
        <div className='detail'>
          <h1>{character.name}</h1>
          <p>Birth year: {character.birth_year}</p>
          <p>Mass: {character.mass}</p>
          <p>Height: {character.height}</p>
          <Link to={`/characters/${parseInt(characterId) + 1}`}>
            <button>Next Character</button>
          </Link>
        </div>
      )}
    </>
  );
}
