import React from 'react';
import '../css/card.css'

export default function Card({ title, attr1, attr1Data, attr2, attr2Data }) {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{attr1} {attr1Data}</p>
      <p>{attr2} {attr2Data}</p>
    </div>
  );
}
