import { logoImg } from "../../variables";
import React, {useContext} from "react";
import styled from "styled-components";
import FavoriteContext from "../../contexts/favorite-context";




const NavBar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return (
        <Nav>
            <div>
                <Img src={logoImg} alt="PokeApi Logo"></Img>
            </div>
            <Div>
                { favoritePokemons.length } 💖
            </Div>
        </Nav>
    )
}

export default NavBar

const Nav = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`   
const Img = styled.img`
    width: 160px;`

const Div = styled.div`
    font-size: 1.5em
`