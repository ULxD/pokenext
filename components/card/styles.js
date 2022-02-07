import styled from 'styled-components';


export const PokedexItem = styled.div`
    height: 20vh;
    width: 31%;

    margin: 1vh 0.5vw 0.5vh 0.5vw;
    padding: 2vh 0 0 0;

    border: 2px solid #003A70;
    border-radius: 1vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: transform 0.5s;

    background: #3D7DCA;
    color:  #FFCB05;

    @media (max-width: 1280px){
        width: 47.5%;
        height: 22vh;
    }

    :hover {
      transform: scale(1.02);
      border-color: #3D7DCA;
      background:  transparent;
      color: #3D7DCA;
    }
    
`

export const PokeTitle = styled.div`



`

export const PokeNumber = styled.div`
    
`