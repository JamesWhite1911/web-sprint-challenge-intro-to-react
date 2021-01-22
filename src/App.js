import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const fireStarters = ['charmander', 'scorbunny', 'cyndaquil', 'fennekin', 'litten', 'tepig', 'torchic', 'chimchar'];

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const urls = [];
  fireStarters.forEach(elem => {
    urls.push(axios.get(`https://pokeapi.co/api/v2/pokemon-species/${elem}/`))
  });

  useEffect(() => {
    axios
      .all(urls)
      .then(res => {
        setData(res)
        setIsLoading(false);
      })
      .catch(err => console.log("Error: ", err))
  }, [])

  let name = "";
  let info = "";
  let id = "";
  let pokemon = data.map(elem => {
    return elem
  });;


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { isLoading ?  "Loading"  : 
      pokemon.map(elem => {
        let flavor = [];
        id = elem.data.id;
        name = elem.data.name.charAt(0).toUpperCase() + elem.data.name.slice(1);
        elem.data.flavor_text_entries.forEach(entry => {
          if (entry.language.name === 'en') {
            flavor.push(entry.flavor_text)
          }
        });
        info = flavor[0];
        return <Character key = {id} name={name} info={info} />
      })}
    </div>
  );
}

export default App;
