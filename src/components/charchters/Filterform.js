import React, { useState, useEffect } from 'react';

const Filter = ({ onFilter }) => {
  const [gender, setGender] = useState('');
  const [house, setHouse] = useState('');
  const [ancestry, setAncestry] = useState('');
  const [allCharacters, setAllCharacters] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setAllCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters();
  }, []);

  const applyFilter = (e) => {
    e.preventDefault();
    const filteredCharacters = allCharacters.filter(character => {
      return (
        (gender === '' || character.gender === gender) &&
        (house === '' || character.house === house) &&
        (ancestry === '' || character.ancestry === ancestry)
      );
    });
    onFilter(filteredCharacters);
  };

  // Function to clear filters
  const clearFilters = () => {
    setGender('');
    setHouse('');
    setAncestry('');
    onFilter(allCharacters); // Reset to display all characters
  };

  return (
    <div className="filter">
      <button onClick={() => setShowFilter(!showFilter)}>Open Filter</button>
      {showFilter && (
        <form onSubmit={applyFilter}>
          <div className="filter-option">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="house">House:</label>
            <select id="house" value={house} onChange={e => setHouse(e.target.value)}>
              <option value="">All</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="ancestry">Ancestry:</label>
            <select id="ancestry" value={ancestry} onChange={e => setAncestry(e.target.value)}>
              <option value="">All</option>
              <option value="pure-blood">Pure-blood</option>
              <option value="half-blood">Half-blood</option>
              <option value="muggle-born">Muggle-born</option>
            </select>
          </div>
          <div className="filter-option">
            <button type="submit">Apply Filter</button>
            <button type="button" onClick={clearFilters}>Clear Filters</button> {/* Button to clear filters */}
          </div>
        </form>
      )}
    </div>
  );
};

export default Filter;