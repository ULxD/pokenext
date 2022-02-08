import styled from 'styled-components';

export const HomeC = styled.div`

    @media (max-width: 1024px){

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        height: 100vh;

    }
`


export const Medias = styled.div`
    height: 23vh;
    width: 2.8vw;

    border: 2px solid #003A70;
    border-radius: 1.5vh;

    color: #3D7DCA;
    
    position: absolute;
    left: 8vw;
    top: 49%;

    font-size: 2.5rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1440px){
        width: 4vw;
        font-size: 2rem
    }

    @media (max-width: 1024px){
        position: static;
        margin: 2vh 0;
    }

    @media (max-width: 800px){
        width: 10vw;
    }

    @media (max-width: 650px){
        width: 13vw;
    }

    @media (max-width: 450px){
        width: 18vw;
        height: 28vh;
    }


`

export const MediaItem = styled.div`

    transition: transform 0.5s;
    cursor: pointer;

    &:hover{
        transform: scale(1.10)
    }

`

export const SearchBox = styled.div`
    height: 10vh;
    width: 20vw;

    background:  transparent;

    border-radius: 1vh;
    border: 2px solid #003A70;

    color: #3D7DCA;

    position: absolute;
    left: 18vw;
    top: 55%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: color 0.5s, background-color 0.5s;

    @media (max-width: 1024px){
        position: static;
        margin: 20vh;
        
        width: 26vw;
    }

    @media (max-width: 800px){
        width: 32vw;
    }

    @media (max-width: 650px){
        width: 50vw;
    }

    @media (max-width: 450px){
        width: 70vw;
    }

    &:hover{

        background:  #3D7DCA;
        color: #FFCB05;
    }

`

export const Search = styled.div`
    font-size: 2.5rem;
    text-transform: uppercase;
    cursor: pointer;

`