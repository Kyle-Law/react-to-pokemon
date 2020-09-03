const initialState = {
  pokemons: [],
  pokemon: {},
  season: 'All',
  search: '',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'FETCH_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'HANDLE_SEARCH':
      return {
        ...state,
        search: action.search,
      };
    case 'HANDLE_SEASON':
      return {
        ...state,
        season: action.season,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
