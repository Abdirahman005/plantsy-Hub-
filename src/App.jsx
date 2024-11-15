
import React, { useState } from "react";
import PlantList from "./components/PlantList";
import AddPlantForm from "./components/AddPlantForm";
import Mango from  "./assets/Mango.jpg";
import Orange from "./assets/Orange.jpeg";
import  Apple from "./assets/Apple.jpg";
import Pinneaple from "./assets/Pinneaple.jpeg";

function App() {
  const [plants, setPlants] = useState([
    { id: 1, name: "Mango tree", price: 70, image: "https://shorturl.at/VEqKv", soldOut: false },
    { id: 2, name: "Orange tree", price: 1000, image: "https://shorturl.at/0UDAu", soldOut: false },
    { id: 3, name: "Pinneaple tree", price: 150, image: "https://shorturl.at/obQFK ", soldOut: false },
    { id: 2, name: "Apple tree", price: 120, image: "https://shorturl.at/wBivO ", soldOut: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addPlant = (newPlant) => {
    setPlants([...plants, { id: plants.length + 1, ...newPlant }]);
  };

  const markAsSoldOut = (id) => {
    setPlants(plants.map(plant => (plant.id === id ? { ...plant, soldOut: true } : plant)));
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Plantsy</h1>
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} markAsSoldOut={markAsSoldOut} />
    </div>
  );
}

export default App;
