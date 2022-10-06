import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonFilterType = ({setPokemonList}) => {

    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
       
        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setPokemonTypes(res.data.results))

    }, [])

    const filterByType = (typeUrl) => {
        if (typeUrl) {
            axios.get(typeUrl)
                .then(res => setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon)))
        }else{
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=900")
            .then(res => setPokemonList(res.data.results))
        }
    }

    return (
        <div>
            <section className='filter-input'>
                <select onChange={e => filterByType(e.target.value)}>
                    <option value={""}>-- All --</option>
                    {
                        pokemonTypes.map(typeOption => (
                            <option value={typeOption.url} key={typeOption.url}>{typeOption.name}</option>
                        ))
                    }
                </select>
            </section>

        </div>
    );
};

export default PokemonFilterType;