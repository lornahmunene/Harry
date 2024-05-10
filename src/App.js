import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';
import Search from './components/UI/Search';
import NewCharacterForm from './components/charchters/NewCharacterForm';
import Filter from './components/charchters/FilterForm'; // Import the Filter component


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://hp-api.onrender.com/api/characters`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);
  
  const handleQuery = (q) => {
    setQuery(q);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <NewCharacterForm />
      <Search getQuery={handleQuery} />
      <Filter onFilter={(filteredItems) => setItems(filteredItems)} /> {/* Display the Filter component */}
      <CharacterGrid isLoading={isLoading} items={filteredItems} />
     
    </div>
  );
}

export default App;