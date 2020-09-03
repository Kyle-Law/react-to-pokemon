import axios from 'axios';

export const fetchPokemon = id => dispatch => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
    dispatch({ type: 'FETCH_POKEMON', payload: data });
  });
};

export const fetchPokemons = () => dispatch => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=386').then(({ data }) => {
    dispatch({
      type: 'FETCH_POKEMONS',
      payload: data.results.map((r, i) => ({ id: i + 1, name: r.name })),
    });
  });
};

export const handleSearch = search => ({
  type: 'HANDLE_SEARCH',
  search,
});

export const handleFilter = season => ({
  type: 'HANDLE_SEASON',
  season,
});
