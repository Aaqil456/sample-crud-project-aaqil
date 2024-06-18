import React, { useState } from "react";
import "./style/ItemList.css";

const ItemList = ({ items, onDelete, onUpdate }) => {
  const [editingItemId, setEditingItemId] = useState(null);
  const [editItemDetails, setEditItemDetails] = useState({
    name: "",
    description: "",
  });

  const handleEditClick = (item) => {
    setEditingItemId(item.id);
    setEditItemDetails({ name: item.name, description: item.description });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditItemDetails({ ...editItemDetails, [name]: value });
  };

  const handleUpdateClick = () => {
    onUpdate(editingItemId, editItemDetails);
    setEditingItemId(null);
    setEditItemDetails({ name: "", description: "" });
  };

  return (
    <div className="item-list-container">
      <h2>Items List</h2>
      {items.length === 0 ? (
        <p className="no-item-paragraph">No items added</p>
      ) : (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item-list-item">
              {editingItemId === item.id ? (
                <div className="item-details">
                  <input
                    type="text"
                    name="name"
                    value={editItemDetails.name}
                    onChange={handleInputChange}
                    className="item-input"
                  />
                  <input
                    type="text"
                    name="description"
                    value={editItemDetails.description}
                    onChange={handleInputChange}
                    className="item-input"
                  />
                  <div>
                    <button className="item-button" onClick={handleUpdateClick}>
                      Save
                    </button>
                    <button
                      className="item-button"
                      onClick={() => setEditingItemId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                </div>
              )}
              <div className="item-actions">
                {editingItemId !== item.id && (
                  <>
                    <button
                      className="item-button"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="item-button"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
