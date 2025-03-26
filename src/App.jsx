// src/App.jsx

import { useState } from 'react';
import PokemonList from './components/PokemonList/PokemonList';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonForm from './components/PokemonForm/PokemonForm';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
  { _id: 6, name: 'charizard', weight: 199, height: 7 },
  { _id: 7, name: 'squirtle', weight: 20, height: 8 },
  { _id: 8, name: 'wartortle', weight: 50, height: 3 },
  { _id: 9, name: 'blastoise', weight: 188, height: 3 },
];

const App = () => {

  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        
        <Route
          path="/"
          element={<h2>Home Page</h2>}
        />
        
        <Route
          path="/pokemon"
          element={<PokemonList pokemon={pokemon} />}
        />
        
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        
        <Route
          path="*"
          element={<h2>Whoops, nothing here!</h2>}
        />

      </Routes>
    </>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
