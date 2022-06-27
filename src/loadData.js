const API_URL = `https://pokeapi.co/api/v2`;

export const getPokemons = async (limit = 24, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
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

export const searchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${API_URL}/pokemon/${pokemon}`);
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export const loadPokemonsTypes = async () => {
  try {
    const response = await fetch(`${API_URL}/type`);
    return await response.json();
  } catch (error) {
    console.log('Error', error);
  }
};

export const filterPokemonsByType = async (type) => {
  try {
    const response = await fetch(`${API_URL}/type/${type}`);
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
}
