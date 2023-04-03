import LogoLight from '../assets/logo-light.png';
import GithubIcon from '../assets/icons/github.png';
import TwitterIcon from '../assets/icons/twitter.png';
import LinkedinIcon from '../assets/icons/linkedin.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className='footer__box'>

                <img src={LogoLight} alt='Logo Portfolio' className='footer__logo' />
                <nav className='footer__nav'>
                    <ul className='footer__list'>
                        <Link to="/">
                            <li className='footer__item'>
                                Home
                            </li>
                        </Link>
                        <Link to="/portfolio">
                            <li className='footer__item'>
                                Portfolio
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li className='footer__item'>
                                Contact Me
                            </li>
                        </Link>
                    </ul>

                    <ul className='footer__icons-list'>
                        <a target='_blank' href='https://github.com/MatheusEli'>
                            <li className='footer__icons-item'>
                                <img className='footer__icons-img' src={GithubIcon} alt='Github icon' />
                            </li>
                        </a>
                        <a target='_blank' href='https://twitter.com/MatheusEli99'>
                            <li className='footer__icons-item'>
                                <img className='footer__icons-img' src={TwitterIcon} alt='Twitter icon' />
                            </li>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/matheus-eli-ferreira/'>
                            <li className='footer__icons-item'>
                                <img className='footer__icons-img' src={LinkedinIcon} alt='Linkedin icon' />
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;