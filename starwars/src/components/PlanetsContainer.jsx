import React, { useState, useEffect } from 'react';
import '../css/container.css';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PlanetsContainer() {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    const response = await axios.get('https://swapi.dev/api/planets');
    console.log(response);
    setPlanets(response.data.results);
  };

  return (
    <div>
      <h1>Planets</h1>
      <div className='card-container'>
        {planets &&
          planets.map(planet => {
            return (
              <Link>
                <Card
                  title={planet.name}
                  attr1={'Climate:'}
                  attr1Data={planet.climate}
                  attr2={'Terrain:'}
                  attr2Data={planet.terrain}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
