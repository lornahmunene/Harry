import React from 'react';
import { Link } from 'react-router-dom';

const CharacterItems = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.actor}
            </li>
            <li>
              <strong>House:</strong> {item.house}
            </li>
            <li>
              <strong>Birthday:</strong> {item.dateOfBirth}
            </li>
            <li>
              <strong>Ancestry:</strong> {item.ancestry}
            </li>
          </ul>
          <Link to={`/details/${item.id}`} className="btn">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterItems;
