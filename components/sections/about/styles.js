import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: 50vh;
    width: 50%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    position: absolute;

    top: 20%;

    text-align: center;

    @media (max-width: 1024px){
        left: 30%;
        background: #ffffff;
        width: 60vw;
        border-radius: 2vh;
        border: 2px solid #003A70;
    }

    @media (max-width: 450px){
        width: 90%;
        left: 5%;
    }
`

export const TitleAbout = styled.div`
    font-size: 3rem;
`

export const DescriptionAbout = styled.div`
    width: 50%;
    margin-top: 2vh;

    @media (max-width: 450px){
        width: 80%;;
    }

`