import './App.css';
import Element from './Component/Element/Element';
import Navbar from './Component/Navbar/Navbar';
import axios from 'axios';
import React, { useState, useEffect} from 'react'


const App = () => {
  const [pokemon, setPokemons] = useState([]);
  useEffect(() => {
    getPOC();
  }, []);

  const getPOC = () => {
    var endPo = [];
    for (var i = 1; i < 301; i++) {
      endPo.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endPo.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pocFIL = (name) => {
    var filPocs = [];
    if (name === "") {
      getPOC();
    }
    for (var i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        filPocs.push(pokemon[i]);
      }
    }

    setPokemons(filPocs);
  };
  

  return (
    <div>
    <Navbar pocFIL={pocFIL}/>
    {pokemon.map((pokemon)=>(
       <Element 
       id = {pokemon.data.id}
       name={pokemon.data.name} 
       image={pokemon.data.sprites.front_default} 
       hp={pokemon.data.stats[0].base_stat} 
       attack={pokemon.data.stats[1].base_stat}
       defense={pokemon.data.stats[2].base_stat}
       types={pokemon.data.types[0].type.name}
       species={pokemon.data.species.name}
       speed={pokemon.data.stats[0].base_stat}
       spattack={pokemon.data.stats[3].base_stat}
       spaddeffens = {pokemon.data.stats[4].base_stat}
       weight={pokemon.data.weight}
       height={pokemon.data.height}
       base_experience={pokemon.data.base_experience}
       game_index={pokemon.data.game_indices[0].game_index}
       move={pokemon.data.moves[0].move.name}
       />
    ))
    }
    </div>
  );
}

export default App;
