import React, { useState } from 'react';
import './style/ItemForm.css';

const ItemForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName('');
    setDescription('');
  };

  return (
  <form className="item-form" onSubmit={handleSubmit}>
    <div className="input-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="item-input"
      />
      <label className="input-label">Name</label>
    </div>
    <div className="input-container">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="item-input"
      />
      <label className="input-label">Description</label>
    </div>
    <div className="submit-button-container">
      <button className="submit-button" type="submit">
        Add Item
      </button>
    </div>
</form>
  );
};

export default ItemForm;
