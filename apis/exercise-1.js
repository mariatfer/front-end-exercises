class FetchError extends Error {
    constructor(message){
        super(message);
    }
}

async function fetchPokeapi() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    throw new FetchError(e);
  }
}

fetchPokeapi();