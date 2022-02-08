import {Medias, MediaItem, Search, SearchBox, HomeC} from './styles';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiFillTwitterSquare} from "react-icons/ai";
import Link from 'next/link';

export default function SectionHome(){

    return(
        <>
            <HomeC>
                <Medias>
                    <MediaItem >
                        <Link href='https://www.linkedin.com/in/whelisson-dias/' passHref>
                            <a target="_blank" rel="noreferrer">
                                <AiFillLinkedin/>
                            </a>
                        </Link>
                    </MediaItem>

                    <MediaItem>
                        <Link href='https://github.com/ULxD' passHref>
                            <a target="_blank" rel="noreferrer">
                                <AiOutlineGithub/>
                            </a>
                        </Link>
                    </MediaItem>

                    <MediaItem>
                        <Link href="https://www.instagram.com/whelixd/" passHref>
                            <a target="_blank" rel="noreferrer">
                                <AiOutlineInstagram/>
                            </a>
                        </Link>
                    </MediaItem>

                    <MediaItem>
                        <Link href="https://twitter.com/Whelixd" passHref>
                            <a target="_blank" rel="noreferrer">
                                <AiFillTwitterSquare/>
                            </a>
                        </Link>
                    </MediaItem>

                </Medias>

                <SearchBox>
                    <Search><Link href='/pokedex'>Pesquisar</Link></Search>
                </SearchBox>
            </HomeC>
        </>
        
    )

    
}