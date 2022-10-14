import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])
    // console.log(pokemon.sprites?.other['official-artwork'])

    return (
        <div className={'card ' + pokemon.types?.[0].type.name} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} 
                alt="pokemon-img"
            />
            <section className='card-content'>
                <h3 className="card-title">Stats</h3>
                <p><b>Type: </b>{
                        pokemon.types?.map(pokemonType => (
                            <span key={pokemonType.type.name}>{pokemonType.type.name} </span>
                        ))
                    }</p>
                <p><b>HP: </b>{pokemon?.stats?.[0].base_stat}</p>
                <p><b>attack:  </b>{pokemon?.stats?.[1].base_stat} </p>
                <p><b>defense: </b>{pokemon?.stats?.[2].base_stat}</p>
                <p><b>speed: </b>{pokemon?.stats?.[3].base_stat}</p>
            </section>
            
        </div>
    );
};

export default PokemonCard;