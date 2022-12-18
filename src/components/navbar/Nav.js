import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Nav() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.logo} >
                <NavLink to="/"><FontAwesomeIcon icon={faFilm} style={{ 'padding': '20px' }} /></NavLink>
            </h1>
            <MobileNavigation />
            <Navigation />
        </div>
    );
}

export default Nav;