import ManageProject from '../assets/portfolio/desktop/image-portfolio-manage@2x.jpg';
import BookmarkProject from '../assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import InsureProject from '../assets/portfolio/desktop/image-portfolio-insure@2x.jpg';
import FyloProject from '../assets/portfolio/desktop/image-portfolio-fylo@2x.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectsList() {

    const projects = [
        {
            slug: "manage",
            img: ManageProject,
            title: "Manage",
            text: "This project required me to build a fully responsive" +
                "landing page to the designs provided. I used HTML5," +
                "along with CSS Grid and JavaScript for the areas that" +
                "required interactivity, such as the testimonial slider."
        },
        {
            slug: "bookmark",
            img: BookmarkProject,
            title: "Bookmark",
            text: "This project required me to build a fully" +
                "responsive landing page to the designs provided." +
                "I used HTML5, along with CSS Grid and JavaScript" +
                "for the areas that required interactivity, such" +
                "as the features section."
        },
        {
            slug: "insure",
            img: InsureProject,
            title: "Insure",
            text: "This was a small project which mostly" +
                "consisted of HTML and CSS. I built a" +
                "fully-responsive landing page." +
                "The only JavaScript this project" +
                "required was to enable the toggling" +
                "of the mobile navigation."
        },
        {
            slug: "fylo",
            img: FyloProject,
            title: "Fylo",
            text: "This project was built in pure HTML and CSS." +
                "I had mobile and desktop designs to work to" +
                "and built it so that it was fully-responsive." +
                "I took a mobile-first approach" +
                "and used modern CSS like Flexbox and Grid for" +
                "layout purposes."
        }
    ];
    return (
        <ul className="projects__list">
            {
                projects.map((project, index) => {
                    return (
                        <li key={index} className="projects__item">
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
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default ProjectsList;