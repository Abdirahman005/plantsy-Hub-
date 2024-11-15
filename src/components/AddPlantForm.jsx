
import React, { useState } from "react";

function AddPlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return alert("All fields are required!");

    addPlant({ name, price: parseFloat(price), image, soldOut: false });
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default AddPlantForm;
