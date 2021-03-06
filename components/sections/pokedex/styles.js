import styled from 'styled-components';

export const ContainerDex = styled.div`
    border: 3px solid #003A70;
    border-radius: 2vh;

    background: #ffffff;

    position: absolute;
    top: 15%;
    left: 10%;

    height: 75vh;
    width: 50%;

    padding: 2vh 0 0 0;

    text-align: center;

    @media (max-width: 1024px){
        width: 80%;
    }
    
`

export const TitleDex = styled.div`
    color: #3D7DCA;
    font-size: 2.5rem;
    border-bottom: 4px solid #003A70;
`

export const PokedexList = styled.div`
    height: 67vh;
    width: 100%;

    border-bottom-left-radius: 1.5vh;
    border-bottom-right-radius: 1.5vh;
    padding: 1vh;

    display: flex;
    flex-wrap: wrap; 

    overflow: scroll;
    overflow-x: hidden;

    @media (max-width: 1440px){
        height: 66vh;
    }

    @media (max-width: 1280px){
        height: 63.9vh;
    }

    &::-webkit-scrollbar {
        width: 0px;
        border: 1px solid black;
        padding: 1vh 0;
    }
    
` 