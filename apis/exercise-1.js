
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.status);
})
.then((data) => {
    console.log(data);
})
.catch((error) => {throw new Error(error)})