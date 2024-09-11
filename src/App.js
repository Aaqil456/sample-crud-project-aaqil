import React, { useState, useEffect } from 'react';
import itemsData from './data';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import './style/App.css'; // Import your custom CSS for styling

const App = () => {
  const [items, setItems] = useState([]);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(itemsData);
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    const newItemWithId = { ...newItem, id: Date.now() };
    setItems([...items, newItemWithId]);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleUpdateItem = (id, updatedDetails) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, ...updatedDetails } : item
    );
    setItems(updatedItems);
  };

  const handleClearStorage = () => {
    localStorage.removeItem('items');
    setItems(itemsData);
  };

  return (
    <div className="App">
      <h1>CRUD Peoject App Using Map Data Structure</h1>
      <div className="form-list-container">
        <ItemForm onSubmit={handleAddItem} />
        <ItemList items={items} onDelete={handleDeleteItem} onUpdate={handleUpdateItem} />
      </div>
      <div className='clear-button-container'>
      <button onClick={handleClearStorage} className="clear-button">Delete All</button>
      </div>
    </div>
  );
};

export default App;
