import { TitleDex, ContainerDex, PokedexList} from './styles';

export default function SectionPokedex({ children }){

    return(
        <>
            
            <ContainerDex>
                <TitleDex>Pokedex</TitleDex>
                <PokedexList>
                    {children}
                </PokedexList>
            </ContainerDex>
        </>
    )

}