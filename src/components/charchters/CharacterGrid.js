import React from 'react';
import { Link } from 'react-router-dom';
import CharacterItems from './CharacterItems';


const CharacterGrid = ({ items }) => {
  return (
    <div className='container'>
      <section className='cards'>
        {items.map((item) => (
          <div key={item.id}>
            
            
            <Link to={`/details/${item.id}`}>
              <CharacterItems item={item} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CharacterGrid;
