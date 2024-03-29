import { useState } from 'react';
import AnimalShow from './AnimalShow';

import './App.css';

function getRandomAnimal() {
  const animals = ['bird','cat','cow', 'gator', 'horse'];

  return animals[Math.floor(Math.random()* animals.length)]
}


function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  //the map function is going to be taken and added into a brand new array at the exact same index
  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />
  })

  return (
    <div className='app'> 
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
