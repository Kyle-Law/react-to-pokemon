const initialState = {
  pokemons: [],
  pokemon: {},
  season: "All",
  search: "",
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS":
      console.log("huhu");
      return {
        ...state,
        pokemons: action.payload,
      };
    case "FETCH_POKEMON":
      console.log("hehe");
      return {
        ...state,
        pokemon: action.payload,
      };
    case "HANDLE_SEARCH":
      // console.log(action.search);
      // let newList = state.pokemons.filter((p) =>
      //   p.name.includes(action.search)
      // );
      return {
        ...state,
        search: action.search,
      };
    case "HANDLE_SEASON":
      // let newList = state.pokemons.filter((p) =>
      //   p.name.includes(action.search)
      // );
      // let pokemonInSeasons;
      // if (action.season === "1") {
      //   pokemonInSeasons = state.pokemons.filter((p) => p.id <= 151);
      // } else if (action.season === "2") {
      //   pokemonInSeasons = state.pokemons.filter(
      //     (p) => p.id > 151 && p.id <= 251
      //   );
      // } else if (action.season === "3") {
      //   pokemonInSeasons = state.pokemons.filter((p) => p.id > 251);
      // } else {
      //   pokemonInSeasons = state.pokemons;
      // }
      return {
        ...state,
        season: action.season,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
