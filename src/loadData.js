const API_URL = `https://pokeapi.co/api/v2/pokemon`;

export const getPokemons = async (limit = 24, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export const searchPokemons = async (pokemon) => {
  try {
    const response = await fetch(`${API_URL}/${pokemon}`);
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};
