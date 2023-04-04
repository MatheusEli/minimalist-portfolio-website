import "./sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <>
            <div className="page-bg"></div>

            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            <div className="page-wrapper"></div>
            <Router>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/portfolio">
                            <PortfolioPage />
                        </Route>

                        <Route exact path="/contact">
                            <ContactPage />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>

        </>
    );
}

export default App;