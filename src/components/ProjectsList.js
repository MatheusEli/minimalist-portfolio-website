import TrilloProject from '../assets/portfolio/desktop/trillo.png';
import NatoursProject from '../assets/portfolio/desktop/natours.png';
import NexterProject from '../assets/portfolio/desktop/nexter.png';
import TemsProject from '../assets/portfolio/desktop/tems.png';
import ProjectsItem from './ProjectsItem';


function ProjectsList() {

    const projects = [
        {
            slug: "natours",
            img: NatoursProject,
            title: "Natours",
            text: "This project required me to build a fully" +
                "responsive landing page to the designs provided." +
                "I used HTML5, along with CSS Grid and JavaScript" +
                "for the areas that required interactivity, such" +
                "as the features section."
        },
        {
            slug: "nexter",
            img: NexterProject,
            title: "Nexter",
            text: "This was a small project which mostly" +
                "consisted of HTML and CSS. I built a" +
                "fully-responsive landing page." +
                "The only JavaScript this project" +
                "required was to enable the toggling" +
                "of the mobile navigation."
        },
        {
            slug: "trillo",
            img: TrilloProject,
            title: "Trillo",
            text: "This project required me to build a fully responsive" +
                "landing page to the designs provided. I used HTML5," +
                "along with CSS Grid and JavaScript for the areas that" +
                "required interactivity, such as the testimonial slider."
        },
        {
            slug: "tems",
            img: TemsProject,
            title: "TEMS",
            text: "This project required me to build a fully responsive" +
                "landing page to the designs provided. I used HTML5," +
                "along with CSS Grid and JavaScript for the areas that" +
                "required interactivity, such as the testimonial slider."
        }
    ];

    return (
        <ul className="projects__list">
            {
                projects.map((project, index) => {
                    return (
                        <ProjectsItem key={index} project={project} />
                    );
                })
            }
        </ul>
    );
}

export default ProjectsList;