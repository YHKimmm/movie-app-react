import NavLinks from "./NavLinks";
import styles from './Nav.module.css';

function Navigation() {
    return (
        <nav className={styles.navigation} >
            <NavLinks />
        </nav>
    );
}

export default Navigation;