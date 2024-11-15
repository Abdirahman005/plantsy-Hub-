
import React from "react";

function PlantCard({ plant, markAsSoldOut }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <p>Status: {plant.soldOut ? "Sold Out" : "Available"}</p>
      <button onClick={() => markAsSoldOut(plant.id)} disabled={plant.soldOut}>
        {plant.soldOut ? "Sold Out" : "Mark as Sold Out"}
      </button>
    </div>
  );
}

export default PlantCard;
