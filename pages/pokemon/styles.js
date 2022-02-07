import styled from "styled-components";


export const PokemonBox = styled.div`
    border: 3px solid #003A70;
    border-radius: 2vh;

    background: #ffffff;

    position: absolute;
    top: 15%;
    left: 10%;

    height: 75vh;
    width: 50%;

    padding: 2vh 0 0 0;

    

    display: flex;
    justify-content: center;
    align-items: center;
`


export const LeftBox = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20vh;
`

export const RightBox = styled.div`
    width: 50%;
    height: 100%;

    padding-left: 5vw;

    font-size: 2rem;

    
    
` 

export const PokeName = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 5vh;

    

    text-align: center;
`

export const PokeStats = styled.div`
    margin-top: 20vh;

    border: 2px solid #003A70;
    border-radius: 1vh;

    height: 20vh;
    width: 18vw;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const PokeD = styled.div`

    border-bottom: 2px dotted #ccc;
    width: 15vw;
    padding: 0.2vh;

`
