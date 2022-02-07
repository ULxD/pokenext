import {Medias, MediaItem, Search, SearchBox, HomeC} from './styles';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiFillTwitterSquare} from "react-icons/ai";
import Link from 'next/link';

export default function SectionHome(){

    return(
        <>
            <HomeC>
                <Medias>
                    <MediaItem href=''><AiFillLinkedin/></MediaItem>
                    <MediaItem><AiOutlineGithub/></MediaItem>
                    <MediaItem><AiOutlineInstagram/></MediaItem>
                    <MediaItem><AiFillTwitterSquare/></MediaItem>
                </Medias>
                <SearchBox>
                    <Search><Link href='/pokedex'>Pesquisar</Link></Search>
                </SearchBox>
            </HomeC>
        </>
        
    )

    
}