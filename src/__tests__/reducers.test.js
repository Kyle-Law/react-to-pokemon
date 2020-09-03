import pokemonReducer from '../reducers/pokemonReducer';

const initialState = {
  pokemons: [],
  pokemon: {},
  season: 'All',
  search: '',
};

it('handles actions of type HANDLE_SEARCH', () => {
  const action = {
    type: 'HANDLE_SEARCH',
    search: 'abc',
  };

  const newState = pokemonReducer(initialState, action);

  expect(newState.search).toEqual('abc');
});

it('handles actions of type HANDLE_SEASON', () => {
  const action = {
    type: 'HANDLE_SEASON',
    season: '3',
  };

  const newState = pokemonReducer(initialState, action);

  expect(newState.season).toEqual('3');
});

it('handles action with unknown type', () => {
  const newState = pokemonReducer(initialState, { type: 'ASDKLJAD' });

  expect(newState).toEqual(initialState);
});
