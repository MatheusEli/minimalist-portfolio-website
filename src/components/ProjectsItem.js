import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectsItem({ project }) {

    const isMobile = window.innerWidth < 768;
    let content;

    if (isMobile) {
         content = (
            <>
                <img
                    src={project.img}
                    alt="Project Image"
                    className="project__img"
                />
                <article
                    className='project__text'
                >
                    <h2 className='project__title'>{project.title}</h2>
                    <p>{project.text}</p>

                    <Link to={`portfolio-details/${project.slug}`}>
                        <button className='project__button'>View Project</button>
                    </Link>
                </article>
            </>
        );
    } else {
        content =  (
            <>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    src={project.img}
                    alt=""
                    className="project__img"
                />
                <motion.article
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='project__text'
                >
                    <h2 className='project__title'>{project.title}</h2>
                    <p>{project.text}</p>

                    <Link to={`portfolio-details/${project.slug}`}>
                        <button className='project__button'>View Project</button>
                    </Link>
                </motion.article>
            </>
        );

    }

    return <li className="projects__item">{content}</li>;
}

export default ProjectsItem;