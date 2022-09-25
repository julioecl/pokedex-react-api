import React, { useEffect ,  useState } from 'react';
import NavBar from './components/navbar';
import PokemonList from './components/pokemon-list';
import Searchbar from './components/searchbar';
import styled, { createGlobalStyle } from 'styled-components'
import { getPokemonData, getPokemons, searchPokemon } from './api';
import { FavoriteProvider } from './contexts/favorite-context';

const favoritesKey = 'f'

function App() {

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])
  const itensPerPage = 20
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)  
      })
      const results = await  Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))       
    } catch (error) {
      console.log("fetchPokemons error: ",error)
    }       
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  } 
  useEffect(() => {    
    loadFavoritePokemons()
  }, [])
  
  useEffect(() => {    
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updatedFavorites.pop(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setLoading(false)
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites, 
      updateFavoritePokemons: updateFavoritePokemons,
    }}>
      <div>
        <GlobalStyle/>
        <NavBar/>
        <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (
          <H2> Pokemón não encontrado! </H2>
        ) : (<PokemonList pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />)}
      </div>
    </FavoriteProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;     
  }

  body {
    background-color: #cee2eb;   
  }
`


const H2 = styled.h2`
  text-align: center;
  padding: 20px;
`
