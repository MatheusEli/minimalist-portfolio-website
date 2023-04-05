import ImgPrincipal from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import Arrows from '../assets/arrows.png';
import Me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactMeRow from '../components/ContactMeRow';

function HomePage() {

    return (

        <>
            <div className="header">
                <img src={ImgPrincipal} className="header__img-principal" />
                <div className="header__heading-box">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="header__heading-text"
                    >Hey, I'm Matheus Eli and I love building beautiful websites</motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        className="header__heading-button">
                        <div className='header__arrows-box'>
                            <img className='header__arrows-img' src={Arrows} />
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
                    <p>I’m a junior front-end developer looking for a new role in an exciting company.
                        I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                        When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required.
                        I’m based in São Paulo, BR, but I’m happy working remotely and have experience in remote teams.
                        When I’m not coding, you’ll find me outdoors. I love being out in nature whether
                        that’s going for a walk, run or cycling. I’d love you to check out my work.</p>

                    <Link to="/contact">
                        <button className='about-me__button'>Go to portfolio</button>
                    </Link>
                </motion.article>
            </div>

            <ContactMeRow />
        </>

    );
}

export default HomePage;