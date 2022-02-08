import Header from '../components/header/index';
import Main from '../components/main';
import Footer from '../components/footer';
import SectionPokedex from '../components/sections/pokedex';
import Card from '../components/card';
import Head from 'next/head';

export async function getStaticProps(){

    const maxPokemons = 251

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json()

    data.results.forEach((item,index) => {
        item.id = index + 1
    })

    return {
        props: {
            pokemons: data.results,
        },
    }

}

export default function Pokedex({ pokemons }){

    console.log( pokemons )
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/imgs/pokeball.jpg"/>
            <title>Pokedex - PokeNextJS</title>
        </Head>
        <Header/>
        <Main>  
            <SectionPokedex>
                {pokemons.map((e) => (
                    <Card key={e.id} Pokemon={e}></Card>
                ))}
                
            </SectionPokedex>
        </Main>
        <Footer/>
        </>
    )

}