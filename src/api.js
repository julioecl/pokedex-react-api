export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const reponse = fetch(url)
        return await (await reponse).json()
    } catch (error) {
        console.log('error', error)
    }
}
export const getPokemons = async (limit = 20, offset= 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`
        const reponse = fetch(url)
        return await (await reponse).json()
    } catch (error) {
        console.log('error', error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const reponse = fetch(url)
        return await (await reponse).json()
    } catch (error) {
        console.log('error', error)
    }
}