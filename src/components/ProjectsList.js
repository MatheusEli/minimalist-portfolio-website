import ManageProject from '../assets/portfolio/desktop/image-portfolio-manage@2x.jpg';
import BookmarkProject from '../assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import InsureProject from '../assets/portfolio/desktop/image-portfolio-insure@2x.jpg';
import FyloProject from '../assets/portfolio/desktop/image-portfolio-fylo@2x.jpg';
import ProjectsItem from './ProjectsItem';


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
                        <ProjectsItem key={index} project={project} />
                    );
                })
            }
        </ul>
    );
}

export default ProjectsList;