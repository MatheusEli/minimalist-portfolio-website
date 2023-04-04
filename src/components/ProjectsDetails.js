import ManageProject from '../assets/detail/desktop/image-manage-hero@2x.jpg';
import ManageProjectPreview1 from '../assets/detail/desktop/image-manage-preview-1@2x.jpg';
import ManageProjectPreview2 from '../assets/detail/desktop/image-manage-preview-2@2x.jpg';


function ProjectDetails() {
    return (
        <div className='project-details'>
            <div className="project-details__header">
                <img src={ManageProject} alt="" className="project-details__img" />
            </div>

            <main className="project-details__box">
                <article
                    className='project-details__text'
                >
                    <h2 className='project-details__title'>Manage</h2>
                    <p>This project required me to build a fully responsive
                        landing page to the designs provided. I used HTML5,
                        along with CSS Grid and JavaScript for the areas
                        that required interactivity, such as the testimonial slider.</p>
                    <button className='project-details__button'>Visit website</button>
                </article>

                <div className='project-details__background-box'>
                    <article className='project-details__background'>
                        <h3 className='project-details__background-title'>Project Background</h3>
                        <p className='project-details__background-text'>This project was a front-end  challenge from Frontend Mentor.
                            It’s a platform that enables you to practice building websites
                            to a design and project brief. Each challenge includes mobile
                            and desktop designs to show how the website should look at
                            different screen sizes. Creating these projects has helped me
                            refine my workflow and solve real-world coding problems.
                            I’ve learned something new with each project,
                            helping me to improve and adapt my style.</p>
                    </article>

                    <section className='project-details__previews'>
                        <h3 className='project-details__previews-title'>Static Previews</h3>
                        <img className='project-details__previews-img' src={ManageProjectPreview1} alt="" />
                        <img className='project-details__previews-img' src={ManageProjectPreview2} alt="" />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ProjectDetails;