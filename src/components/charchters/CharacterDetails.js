import React from 'react';

function CharacterDetails({ character }) {
  return (
    <div>
      {character ? (
        <div className="character-details">
          <img src={character.image} alt={character.name} />
          <div>Name: {character.name}</div>
          <div>House: {character.house}</div>
          <div>Birthday: {character.dateOfBirth}</div>
          <div>Ancestry: {character.ancestry}</div>
          <div>Hair Colour: {character.hairColour}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CharacterDetails;
