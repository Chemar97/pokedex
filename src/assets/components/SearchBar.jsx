import React from 'react';

const SearchBar = ({setPokemonInput, pokemonInput, searchPokemon}) => {
    return (
        <div>
             <section className='search-bar-container'>
                <input
                    className='search-bar'
                    type="text"
                    placeholder='search Pokemon'
                    value={pokemonInput}
                    onChange={e => setPokemonInput(e.target.value)}
                />
                <button 
                    className='searchBotton' 
                    onClick={searchPokemon}
                >
                    search
                </button>
            </section>
        </div>
    );
};

export default SearchBar;