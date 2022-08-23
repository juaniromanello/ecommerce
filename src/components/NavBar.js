import './Nav.css';
import logo from '../logojr.png';

const NavBar = () => {
    return(
        <div className='Header'>
            <img src={logo} className="Logo" alt="logo" />
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Tienda</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
        </div>
    );
};

export default NavBar
