import React, { useState } from "react";
import styled from "styled-components";



const Searchbar = (props) => {  

    const [search, setSearch ] = useState([0])
    const {onSearch} = props    
    const onChangeHandler = (e) => {        
        setSearch(e.target.value)        
        if(e.target.value.length === 0 ) {
            onSearch(undefined)
        }
    }   

    const onButtonClickHandler = () => {
        onSearch(search.toLowerCase())               
    } 
    
    const onKeyDownHandler = (e) => {
        const key = e.which
        if (key === 13) {
            onButtonClickHandler()
        }
    }
    
    
    return (
        <Div>       
            <Input placeholder="Buscar pokemón" onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <Button onClick={onButtonClickHandler}> Buscar </Button>            
        </Div>
        
    )
}

export default Searchbar

const Div = styled.div`
    display: flex;    
    gap: 15px;
    justify-content: center;
    padding: 10px; 
    align-itens: center;    
`

const Input = styled.input`
    padding: 10px 10px;    
    background-color: white;
    border-radius: 4px      
`

const Button = styled.button`
    background-color: #0e6f9f;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    border-radius: 4px      
`