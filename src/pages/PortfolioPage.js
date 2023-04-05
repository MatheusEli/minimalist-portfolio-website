import ProjectsList from "../components/ProjectsList";
import ContactMeRow from "../components/ContactMeRow";

function PortfolioPage() {
    return (
        <>
            <div className="portfolio">
                <ProjectsList />
            </div>
            <ContactMeRow />
        </>
    );
}

export default PortfolioPage;