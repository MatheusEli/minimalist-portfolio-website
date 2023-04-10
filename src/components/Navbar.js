import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import { MenuButton } from './MenuButton';

function Navbar() {

    const [isOpen, setOpen] = useState(false);

    const toggle = isOpen ?  'active' : 'disabled';

    return (
        <div className='navigation'>
            <img src={Logo} alt='Logo Portfolio' className='navigation__logo' />
            <nav className='navigation__nav'>
                <MenuButton
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    strokeWidth="2"
                    color="#33323d"
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    width="34"
                    height="14"
                />
                <ul className={`navigation__list ${toggle}`}>
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