import React, { useContext } from "react";
import styled from "styled-components";
import FavoriteContext from "../../contexts/favorite-context";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)       
    }
    const heart = favoritePokemons.includes(pokemon.name) ?'💖' : '🖤' 
    return(
        <Section>                 
            <Img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></Img>
            <Div> 
                <h3>{pokemon.id} - {pokemon.name}</h3>
                {pokemon.types.map((type, index) => {
                return (
                    <h4 key={index}>
                        {type.type.name}
                    </h4>
                )
                })}                
            </Div>
            <Button onClick={onHeartClick}>
                    {heart}
            </Button>
        </Section> 
    )
}

export default Pokemon

const Section = styled.section`
    height: 100px;
    width: 300px;
    margin: 10px;
    display: flex;
    padding: 10px;
    text-transform: capitalize;
    font-size: 0.9em; 
    border: solid 0.8px;
    justify-content: space-between;   
`

const Div = styled.div`
    display: flex;    
    flex-direction: column;    
    padding: 10px; 
    gap: 5px;
    text-align: center;
    align-itens: center;       
`

const Img = styled.img`
    height: 70px;
    width: 70px;
    margin: 10px;
`

const Button = styled.button`    
    width: 25px;
    height: 25px;
    cursor: po    
`
