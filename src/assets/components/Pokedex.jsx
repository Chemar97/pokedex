import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonFilterType from './PokemonFilterType';
import SearchBar from './SearchBar';

const Pokedex = () => {

    const name = useSelector(state => state.username)
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonInput, setPokemonInput] = useState("")
    

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=900")
            .then(res => setPokemonList(res.data.results))

    }, [])

    const searchPokemon = () => {
        navigate(`/pokedex/${pokemonInput}`)
    }

    const [page, setPage] = useState(1)
    const pokemonPerPage = 10
    const lastPokeIndex = page * pokemonPerPage
    const firstPokeIndex = lastPokeIndex - pokemonPerPage

    const pokemonPaginated = pokemonList.slice(
        firstPokeIndex,
        lastPokeIndex
    )

    const totalPages = Math.ceil(pokemonList.length / pokemonPerPage)
    const pagesNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
        
    }

    const [maxIndex, setMaxIndex] = useState(5)
    const [minIndex, setMinIndex] = useState(0)

    if(page !== totalPages){
        if((page%2) === 0){
            if(page === maxIndex){
                setMaxIndex(maxIndex + 4)
                setMinIndex(minIndex + 3)
            }
        }else{
            if(page === maxIndex){
                setMaxIndex(maxIndex + 5)
                setMinIndex(minIndex + 4)
            }
        }
    }

    const returnHom = () => {
        navigate('/')
    }
    

     const pagesNumbersLimit = pagesNumbers.slice(minIndex, maxIndex)

    return (
        <div className='pokedex'>
            <h1>Pokedex</h1>
            <h3>Welcome {name}, here you'll find your favorite pokemon</h3>
            <button className="home" onClick={returnHom}>
                home
            </button>
            {/* Componente para buscar pokemon por nombre */}
            <SearchBar setPokemonInput={setPokemonInput}
                pokemonInput={pokemonInput}
                searchPokemon={searchPokemon}
            />

            <PokemonFilterType setPokemonList={setPokemonList}/> {/* Componente para realizar el filtrado por tipo */}

            <section className="pokemon-card-container">
                {
                    pokemonPaginated.map(pokemon => (
                        <PokemonCard url={pokemon.url} key={pokemon.url} />
                    ))
                }
            </section>

            <section className="index-buttons">
                <button onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Prev page
                </button>
                {
                    pagesNumbersLimit.map(number => (

                        <button onClick={() => setPage(number)}
                            key={number}
                        >
                            {number}
                        </button>
                    ))
                }
                <button onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next page
                </button>
            </section>
                
        </div>
    );
};

export default Pokedex;