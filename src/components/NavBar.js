import './Nav.css';
import logo from '../logojr.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <div className='Header'>
            <img src={logo} className="Logo" alt="logo" />
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Tienda</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
            <CartWidget />
        </div>
    );
};

export default NavBar
