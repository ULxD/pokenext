import Header from '../../components/header';
import Main from '../../components/main';
import Footer from '../../components/footer';
import { PokemonBox, LeftBox, RightBox, PokeName, PokeStats, PokeD } from './styles';
import Image from 'next/image';



export const getStaticPaths = async () => {
    
    const maxPokemons = 251

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }

} 

export const getStaticProps = async (context) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data },
    }
} 

export default function Pokemon({ pokemon }){

    console.log(pokemon)
    return (
        <>
        <Header/>
        <Main>
            <PokemonBox>
                <LeftBox>

                <PokeName>{pokemon.name}</PokeName>
                <Image
                    src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                    width='240'
                    height='240'
                    alt={Pokemon.name}
                />
                </LeftBox>
                <RightBox>
                    <PokeName>Informações</PokeName>
                    <PokeStats>
                        <PokeD>ALTURA: {pokemon.height * 10} cm</PokeD>
                        <PokeD>PESO: {pokemon.weight / 10} kg</PokeD>
                        {pokemon.types.map((item,index) => (
                            <PokeD key={index}>TIPO: {item.type.name} </PokeD>
                        ))}
                    </PokeStats>
                </RightBox>
                
            </PokemonBox>
        </Main>
        <Footer/>
        
        </>
    )

}