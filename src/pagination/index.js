import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
        
    return (
        <Div>
            <Button onClick={onLeftClick}>◀</Button>
            <div>{page} de {totalPages}</div>
            <Button onClick={onRightClick}>▶</Button>
        </Div>
    )
}

export default Pagination

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    gap: 10px;
`

const Button = styled.button`    
    align-itens: center;    
    width: 20px;
    height: 20px; 
    margin: auto;
    border: none;        
`