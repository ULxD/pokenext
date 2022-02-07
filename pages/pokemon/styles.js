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

    @media (max-width: 1024px){
        width: 85%;
    }
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

    padding-left: 3vw;

    font-size: 1.5rem;


    
` 

export const PokeName = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 5vh;

    

    text-align: center;

    @media (max-width: 1280px){
        font-size: 1.5rem;
    }
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

    @media (max-width: 1280px){
        height: 25vh;
        width: 19vw;
    }

    @media (max-width: 1024px){
        height: 40%;
        width: 85%;
    }
    
`

export const PokeD = styled.div`
    text-align: center;

    border-bottom: 2px dotted #ccc;
    width: 100%;
    padding: 0.2vh;

`
