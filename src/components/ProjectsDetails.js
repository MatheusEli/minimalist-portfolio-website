import ManageProject from "../assets/detail/desktop/image-manage-hero@2x.jpg";
import ManageProjectPreview1 from "../assets/detail/desktop/image-manage-preview-1@2x.jpg";
import ManageProjectPreview2 from "../assets/detail/desktop/image-manage-preview-2@2x.jpg";

import BookmarkProject from "../assets/detail/desktop/image-bookmark-hero@2x.jpg";
import BookmarkProjectPreview1 from "../assets/detail/desktop/image-bookmark-preview-1@2x.jpg";
import BookmarkProjectPreview2 from "../assets/detail/desktop/image-bookmark-preview-2@2x.jpg";

import InsureProject from "../assets/detail/desktop/image-insure-hero@2x.jpg";
import InsureProjectPreview1 from "../assets/detail/desktop/image-insure-preview-1@2x.jpg";
import InsureProjectPreview2 from "../assets/detail/desktop/image-insure-preview-2@2x.jpg";


import { useParams } from "react-router-dom";
import ContactMeRow from "./ContactMeRow";

function ProjectDetails() {
  const { slug } = useParams();

  const projects = [
    {
      slug: "natours",
      mainImg: ManageProject,
      previewImg1: ManageProjectPreview1,
      previewImg2: ManageProjectPreview2,
      title: "Natours",
      text:
        "This project required me to build a fully responsive" +
        "landing page to the designs provided. I used HTML5," +
        "along with CSS Grid and JavaScript for the areas that" +
        "required interactivity, such as the testimonial slider.",
      backgroundDescription:
        "This project was a front-end" +
        "challenge from Frontend Mentor. It’s a platform" +
        "that enables you to practice building websites to a" +
        "design and project brief. Each challenge includes" +
        "mobile and desktop designs to show how the website" +
        "should look at different screen sizes. Creating" +
        "these projects has helped me refine my workflow" +
        "and solve real-world coding problems. I’ve learned" +
        "something new with each project," +
        "helping me to improve and adapt my style.",
    },
    {
      slug: "nexter",
      mainImg: BookmarkProject,
      previewImg1: BookmarkProjectPreview1,
      previewImg2: BookmarkProjectPreview2,
      title: "Nexter",
      text:
        "This project required me to build a fully" +
        "responsive landing page to the designs provided." +
        "I used HTML5, along with CSS Grid and JavaScript" +
        "for the areas that required interactivity, such" +
        "as the features section.",
      backgroundDescription:
        "This project was a front-end" +
        "challenge from Frontend Mentor. It’s a platform that" +
        "enables you to practice building websites to a design" +
        "and project brief. Each challenge includes mobile and" +
        "desktop designs to show how the website should look at" +
        "different screen sizes. Creating these projects has helped" +
        "me refine my workflow and solve real-world coding problems." +
        "I’ve learned something new with each project," +
        "helping me to improve and adapt my style.",
    },
    {
      slug: "trillo",
      mainImg: InsureProject,
      previewImg1: InsureProjectPreview1,
      previewImg2: InsureProjectPreview2,
      title: "Trillo",
      text:
        "This was a small project which mostly" +
        "consisted of HTML and CSS. I built a" +
        "fully-responsive landing page." +
        "The only JavaScript this project" +
        "required was to enable the toggling" +
        "of the mobile navigation.",
      backgroundDescription:
        "This project was a front-end" +
        "challenge from Frontend Mentor. It’s a platform that" +
        "enables you to practice building websites to a design" +
        "and project brief. Each challenge includes mobile and" +
        "desktop designs to show how the website should look at" +
        "different screen sizes. Creating these projects has helped" +
        "me refine my workflow and solve real-world coding problems." +
        "I’ve learned something new with each project," +
        "helping me to improve and adapt my style.",
    },
    {
      slug: "tems",
      mainImg: InsureProject,
      previewImg1: InsureProjectPreview1,
      previewImg2: InsureProjectPreview2,
      title: "TEMS",
      text:
        "This project was built in pure HTML and CSS." +
        "I had mobile and desktop designs to work to" +
        "and built it so that it was fully-responsive." +
        "I took a mobile-first approach" +
        "and used modern CSS like Flexbox and Grid for" +
        "layout purposes.",
      backgroundDescription:
        "This project was a front-end" +
        "challenge from Frontend Mentor. It’s a platform that" +
        "enables you to practice building websites to a design" +
        "and project brief. Each challenge includes mobile and" +
        "desktop designs to show how the website should look at" +
        "different screen sizes. Creating these projects has helped" +
        "me refine my workflow and solve real-world coding problems." +
        "I’ve learned something new with each project," +
        "helping me to improve and adapt my style.",
    },
    {
      slug: "sostems",
      mainImg: InsureProject,
      previewImg1: InsureProjectPreview1,
      previewImg2: InsureProjectPreview2,
      title: "SOS TEMS",
      text:
        "This project was built in pure HTML and CSS." +
        "I had mobile and desktop designs to work to" +
        "and built it so that it was fully-responsive." +
        "I took a mobile-first approach" +
        "and used modern CSS like Flexbox and Grid for" +
        "layout purposes.",
      backgroundDescription:
        "This project was a front-end" +
        "challenge from Frontend Mentor. It’s a platform that" +
        "enables you to practice building websites to a design" +
        "and project brief. Each challenge includes mobile and" +
        "desktop designs to show how the website should look at" +
        "different screen sizes. Creating these projects has helped" +
        "me refine my workflow and solve real-world coding problems." +
        "I’ve learned something new with each project," +
        "helping me to improve and adapt my style.",
    }
  ];

  const project = projects.find((project) => project.slug === slug);

  return (

    <>

      <div className="project-details">
        <div className="project-details__header">
          <img src={project.mainImg} alt="Project Main Image" className="project-details__img" />
        </div>

        <main className="project-details__box">
          <article className="project-details__text">
            <h2 className="project-details__title">{project.title}</h2>
            <p>{project.text}</p>
            <button className="project-details__button">Visit website</button>
          </article>

          <div className="project-details__background-box">
            <article className="project-details__background">
              <h3 className="project-details__background-title">
                Project Background
              </h3>
              <p className="project-details__background-text">
                {project.backgroundDescription}
              </p>
            </article>

            <section className="project-details__previews">
              <h3 className="project-details__previews-title">Static Previews</h3>
              <img
                className="project-details__previews-img"
                src={project.previewImg1}
                alt="Project Preview Image 1"
              />
              <img
                className="project-details__previews-img"
                src={project.previewImg2}
                alt="Project Preview Image 2"
              />
            </section>
          </div>
        </main>
      </div>
      <ContactMeRow />
    </>
  );
}

export default ProjectDetails;
