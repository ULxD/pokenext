import { Nav, Logo, NavMenu, MenuItem} from './styles'
import Link from 'next/link'



export default function Header(){

    return(
        <Nav>
            <Link href='/' passHref><Logo/></Link>
            <NavMenu>
                <MenuItem><Link href="/">Home</Link></MenuItem>
                <MenuItem><Link href='/about'>Sobre</Link></MenuItem>
                <MenuItem><Link href='/pokedex'>Pokedex</Link></MenuItem>
            </NavMenu>
        </Nav>
    )
}