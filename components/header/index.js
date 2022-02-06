import { Nav, Logo, NavMenu, MenuItem} from './styles'



export default function Header(){

    return(
        <Nav>
            <Logo/>
            <NavMenu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Pokedex</MenuItem>
                <MenuItem>Favoritos</MenuItem>
            </NavMenu>
        </Nav>
    )
}