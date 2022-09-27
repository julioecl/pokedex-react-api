import React from "react";
import styled from "styled-components";
import Pagination from "../../pagination";
import Pokemon from "../pokemon";

const PokemonList = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props

    const onLeftClick = () => {
        if (page > 0) {
            setPage(page-1)
        }
    }
    const onRightClick = () => {
        if (page+1 !== totalPages){
            setPage(page+1)
        }
    }
    return(
        <div>
            <Section>
                <h1>Pokedéx</h1>                 
            </Section>               
            <div>               
                {loading ? (<Div> Carregando, segura fera...</Div>): (<Div>{pokemons && pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon pokemon={pokemon} key={index}/>
                    )
                })}                
                </Div>)}
            </div> 
            <Pagi>
                <Pagination page={page+1} totalPages={totalPages} onLeftClick={onLeftClick} onRightClick={onRightClick}/>           
            </Pagi>
        </div>
    )
}

export default PokemonList

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    gap: 10px;         
`

const Section = styled.section`
    display: flex;    
    justify-content: center;
    padding: 10px;
`

const Pagi = styled.div`
    display: flex;    
    justify-content: center;
    padding: 10px; 
`