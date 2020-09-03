import React from 'react';
import { Link } from 'react-router-dom';

export default function Connect() {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: '80px' }}
    >
      <h3 className="ui header">Connect</h3>
      <div className="social-media-container">
        <Link
          className=""
          to={{
            pathname: 'https://github.com/Kyle-Law',
          }}
          target="_blank"
        >
          <i className="fab fa-github" />
          {' '}
          GitHub
        </Link>
        <Link
          to={{
            pathname: 'https://www.linkedin.com/in/kyle-lawzhunkhing/',
          }}
          target="_blank"
        >
          <i className="fab fa-linkedin" />
          {' '}
          Linkedin
        </Link>
      </div>
    </div>
  );
}
