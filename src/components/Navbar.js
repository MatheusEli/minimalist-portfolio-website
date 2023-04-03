import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
    
    return (
        <div className='navigation'>
            <img src={Logo} alt='Logo Portfolio' className='navigation__logo' />
            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <Link to="/">
                        <li className='navigation__item'>
                            Home
                        </li>
                    </Link>
                    <Link to="/portfolio">
                        <li className='navigation__item'>
                            Portfolio
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className='navigation__item'>
                            Contact Me
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;