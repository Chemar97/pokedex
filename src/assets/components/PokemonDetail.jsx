import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pokelogo from '../img/Poke.webp'
import { useNavigate } from 'react-router-dom';
const PokemonDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    const hpBar = pokemon?.stats[0].base_stat
    const attkBar = pokemon?.stats[1].base_stat
    const defBar = pokemon?.stats[2].base_stat
    // console.log(hpBar)

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={pokemon?.types[0].type.name}>
            <img src={pokelogo} alt="logo" className='logo' />
            <button className="back" onClick={back}>back</button>
            <br />

            <section className={'pokemon-info-container ' + pokemon?.types[0].type.name}>
                <div className="pokemon-container">
                    <img
                        className='pokemon-sprite'
                        src={pokemon?.sprites.other.dream_world.front_default}
                        alt="pokemon-img"
                        style={{ width: '200px' }}
                    />
                    <div className='pokemon-name-id'>
                        <h2>{pokemon?.name}</h2>
                        <p className='id'># {pokemon?.id}</p>
                    </div>
                    <div className='pokemon-weight-height'>
                        <p><b>Weight: </b>{(pokemon?.weight)/10} kg</p>
                        <p><b>Height: </b>{(pokemon?.height)/10} m</p>
                    </div>

                </div>

                <div className="stats-container">
                    <h2>Stats Base</h2>
                    <b>HP: </b>
                    <div className="grafico"><strong className="barra" style={{ width: `${hpBar}%` }}>{pokemon?.stats[0].base_stat}</strong></div>
                    <b>Attack: </b>
                    <div className="grafico2"><strong className="barra2" style={{ width: `${attkBar}%` }}>{pokemon?.stats[1].base_stat}</strong></div>
                    <b>Defense: </b>
                    <div className="grafico3"><strong className="barra3" style={{ width: `${defBar}%` }}>{pokemon?.stats[2].base_stat}</strong></div>
                </div>

                <div className="Movements-container">
                    <h2>Movements</h2>
                    <ul className='moves-list'>
                        {
                            pokemon?.moves.map(move => (
                                <li className='move-item' key={move.move.name}>
                                    {
                                        move.move.name
                                    }
                                </li>

                            ))
                        }
                    </ul>
                </div>

                <section className="pokeInfo">
                    <div className="type-container">
                        <h3>Type: </h3>
                        {
                            pokemon?.types.map(pokemonType => (
                                <p key={pokemonType.type.name} className={'type-info ' + pokemonType.type.name} >{pokemonType.type.name} </p>
                            ))
                        }
                    </div>

                    <div className="abilities-container">
                        <h3>Abilities: </h3>
                        {
                            pokemon?.abilities.map(pokemonAbility => (
                                <p key={pokemonAbility.ability.name} className={'abilities-info '} >{pokemonAbility.ability.name} </p>
                            ))
                        }
                    </div>

                </section>

            </section>
        </div>
    );
};

export default PokemonDetail;