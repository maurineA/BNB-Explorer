import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faClipboard, faComment } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
 

  return (
    <div style={styles}>
      <Link to="/" style={linkStyles}>
        <FontAwesomeIcon icon={faHome} style={iconStyles} />
        Home
      </Link>
      <Link to="/services" style={linkStyles}>
        <FontAwesomeIcon icon={faBuilding} style={iconStyles} />
        Properties
      </Link>
      <Link to="/postingForm" style={linkStyles}>
        <FontAwesomeIcon icon={faClipboard} style={iconStyles} />
        Post Your Form
      </Link>
      <Link to="/reviews" style={linkStyles}>
        <FontAwesomeIcon icon={faComment} style={iconStyles} />
        Submit & Review
      </Link>
    </div>
  );
}

export default NavBar;
