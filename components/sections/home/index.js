import {Medias, MediaItem, Search, SearchBox} from './styles';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiFillTwitterSquare} from "react-icons/ai";
import Link from 'next/link';

export default function SectionHome(){

    return(
        <>
             <Medias>
                <MediaItem><AiFillLinkedin/></MediaItem>
                <MediaItem><AiOutlineGithub/></MediaItem>
                <MediaItem><AiOutlineInstagram/></MediaItem>
                <MediaItem><AiFillTwitterSquare/></MediaItem>
            </Medias>
            <SearchBox>
                <Search><Link href='/'>Pesquisar</Link></Search>
            </SearchBox>
        </>
        
    )

    
}