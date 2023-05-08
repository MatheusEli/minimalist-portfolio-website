import ImgPrincipal from '../assets/homepage/desktop/image-homepage-hero@2x.png';
import ImgPrincipalMobile from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import Arrows from '../assets/arrows.png';
import Me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactMeRow from '../components/ContactMeRow';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const { t, i18n } = useTranslation();
    console.log(i18n.language);
    const changeLanguageHandler = () => {
        if(i18n.language === 'en-US'){
            i18n.changeLanguage("pt-BR");
        }else if(i18n.language === 'pt-BR'){
            i18n.changeLanguage("en-US");
        }
    }

    let content;

    const isMobile = window.innerWidth < 768;
    const renderedResponsiveImgs = () => {
        return (
            <picture>
                <source srcSet={ImgPrincipal} media="(min-width: 1280px)" />
                <source srcSet={ImgPrincipalMobile} media="(max-width: 768px)" />
                <img src={ImgPrincipal} alt="Main" className="header__img-principal" />
            </picture>
        );
    }

    if (isMobile) {
        content = (
            <>
                <div className="header">
                    {
                        renderedResponsiveImgs()
                    }
                    <div className="header__heading-box">
                        <h2
                            className="header__heading-text"
                        >{t('main-title')}</h2>
                        <div
                            className="header__heading-button">
                            <div className='header__arrows-box'>
                                <img className='header__arrows-img' src={Arrows} alt="Button icon" />
                            </div>
                            <span className='header__heading-button-text'>About me</span>
                        </div>

                    </div>
                </div>

                <div className="about-me">
                    <img
                        src={Me}
                        alt='Me'
                        className='about-me__img'
                    />
                    <article
                        className='about-me__text'
                    >
                        <h2 className='about-me__title'>About me</h2>
                        <p>{t('bio')}</p>

                        <Link to="/portfolio">
                            <button className='about-me__button'>Go to portfolio</button>
                        </Link>
                    </article>
                </div>
            </>
        );
    } else {
        content = (
            <>
                <div className="header">
                    {
                        renderedResponsiveImgs()
                    }
                    <div className="header__heading-box">
                        <motion.h2
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="header__heading-text"
                        >{t('main-title')}</motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3 }}
                            className="header__heading-button"
                            onClick={changeLanguageHandler}>
                            <div className='header__arrows-box'>
                                <img className='header__arrows-img' src={Arrows} alt="Button icon" />
                            </div>
                            <span className='header__heading-button-text'>About me</span>
                        </motion.div>

                    </div>
                </div>

                <div className="about-me">
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={Me}
                        alt='Me'
                        className='about-me__img'
                    />
                    <motion.article
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='about-me__text'
                    >
                        <h2 className='about-me__title'>About me</h2>
                        <p>{t('bio')}</p>

                        <Link to="/portfolio">
                            <button className='about-me__button'>Go to portfolio</button>
                        </Link>
                    </motion.article>
                </div>
            </>
        );
    }

    return (

        <>
            {content}
            <ContactMeRow />
        </>

    );
}

export default HomePage;