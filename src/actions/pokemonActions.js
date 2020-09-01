import axios from "axios";

export const fetchPokemon = (id) => {
  console.log("Fetching Pokemon with ID: ", id);
  // axios
  //   .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   .then(({ data }) => console.log(data));
  // Below Doesn't run, but above run
  return (dispatch) => {
    console.log("lala");
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
      console.log(data);
      dispatch({ type: "FETCH_POKEMON", payload: data });
    });
  };
};

export const fetchPokemons = () => {
  return (dispatch) => {
    console.log("hello");
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=386")
      .then(({ data }) => {
        dispatch({
          type: "FETCH_POKEMONS",
          payload: data.results.map((r, i) => ({ id: i + 1, name: r.name })),
        });
      });
  };
};

// export const fetchPokemon = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     dispatch({
//       type: "FETCH_POKEMON",
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       err,
//     });
//   }
// };

// export const fetchPokemon = (id) => async (dispatch) => {
//   console.log("fetching pokemon with id", id);
//   try {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     dispatch({
//       type: "FETCH_POKEMON",
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       err,
//     });
//   }
// };

export const handleSearch = (search) => ({
  type: "HANDLE_SEARCH",
  search,
});

export const handleFilter = (season) => ({
  type: "HANDLE_SEASON",
  season,
});
