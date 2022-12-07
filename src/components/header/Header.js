import logo from '../../assets/img/clapperboard.png';
import {TopMenu} from '../menu/TopMenu';

export const Header = ()=>{

    return (
        <div>
            <img src={logo} alt="logo" />
            <h1>Bienvenido</h1>
            <TopMenu />
        </div>
    )
}