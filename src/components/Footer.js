import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <footer>
      Site by
      {' '}
      <Link to={{ pathname: 'https://github.com/Kyle-Law' }} target="_blank">
        Kyle Law
      </Link>
    </footer>
  );
}
