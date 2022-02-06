import { MainS, Medias, MediaItem, Options, About, Pokedex, SearchBox, Search } from './styles';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiFillTwitterSquare} from "react-icons/ai";

export default function Main(){

    return(

        <MainS>
            <Medias>
                <MediaItem><AiFillLinkedin/></MediaItem>
                <MediaItem><AiOutlineGithub/></MediaItem>
                <MediaItem><AiOutlineInstagram/></MediaItem>
                <MediaItem><AiFillTwitterSquare/></MediaItem>
            </Medias>
            <SearchBox>
                <Search>Pesquisar</Search>
            </SearchBox>
        </MainS>

    )

}