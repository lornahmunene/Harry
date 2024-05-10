import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/charchters/CharacterGrid';
import Search from './components/UI/Search';
import { Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/charchters/CharacterDetails';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios('https://hp-api.onrender.com/api/characters');
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <Routes>
        <Route
          path="/"
          element={<CharacterGrid isLoading={isLoading} items={items} />}
        />
        <Route path="/details/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
};

export default App;
