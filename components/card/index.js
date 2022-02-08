import Image from 'next/image';
import { PokeTitle, PokedexItem, PokeNumber } from './styles';
import Link from 'next/link';

export default function  Card({ Pokemon }){

    return(
        <>
        <Link href={`/pokemon/${Pokemon.id}`} passHref>
            <PokedexItem>
                <Image 
                    src={`https://cdn.traction.one/pokedex/pokemon/${Pokemon.id}.png`}
                    width='120'
                    height='120'
                    alt={Pokemon.name}
                />

                <PokeNumber>#{Pokemon.id}</PokeNumber>
                <PokeTitle>{Pokemon.name}</PokeTitle>
            </PokedexItem>
        </Link>
        
        </>
    )
}