import styled from 'styled-components';


export const Nav = styled.div`
    position: absolute;
    height: 10vh;
    right: 2vw;
    width: 90vw;
    color: #ffffff;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1280px){
        justify-content: space-around;
    }

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 15vw;
    height: 100%;
`

export const MenuItem = styled.div`

    cursor: pointer;
    transition: transform 0.5s, border-color 0.5s;
    border-bottom: 2px solid rgba(0,0,0,0);
    line-height: 20px;
    margin: 0 1vw;
    

    &:hover {
      transform: scale(1.10);
      border-color: #ffffff;
    }
    

`

export const Logo = styled.div`
    height: 8vh;
    width: 14vw;
    margin-right: 10vw;

    cursor: pointer;

    background-image: url(/imgs/pokelogo.png);
    background-position:center;
    background-size: contain;
    background-repeat: no-repeat;

`
