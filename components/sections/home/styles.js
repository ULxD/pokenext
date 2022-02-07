import styled from 'styled-components';


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