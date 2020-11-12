import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img
          src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F12%2Fporg-1.jpg'
          alt=''
        />
      </Link>
      <h1>Star Wars</h1>
    </header>
  );
}
