import { handleSearch, handleFilter } from '../actions/pokemonActions';

describe('handleSearch Action Creator', () => {
  it('has the correct type', () => {
    const action = handleSearch('abc');

    expect(action.type).toEqual('HANDLE_SEARCH');
  });

  it('has the correct type', () => {
    const action = handleSearch('abc');

    expect(action.search).toEqual('abc');
  });
});

describe('handleFilter Action Creator', () => {
  it('has the correct type', () => {
    const action = handleFilter('abc');

    expect(action.type).toEqual('HANDLE_SEASON');
  });

  it('has the correct type', () => {
    const action = handleFilter('3');

    expect(action.season).toEqual('3');
  });
});
