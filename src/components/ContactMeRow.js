import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactMeRow() {

    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    
    const attributes = isMobile ? {} : {
        initial:{ opacity: 0, y: 100 },
        whileInView:{ opacity: 1, y: 0 },
        transition:{ duration: 1 }
    };

    return (
        <motion.div
            {...attributes}
            className='contact-me'
        >
            <h4 className='contact-me__text'>Interested in doing a project together?</h4>
            <div className='contact-me__line'></div>
            <Link to="/contact">
                <button className='contact-me__button'>Contact me</button>
            </Link>
        </motion.div>
    );
}

export default ContactMeRow;