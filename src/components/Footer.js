import { getYear } from "../utilities/getDates";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Footer({ copyright, author }) {
    return (
        <footer className={styles.footer}>
            <p><FontAwesomeIcon icon={faFilm} size='2x' style={{ 'padding': '20px' }} /></p>
            <p>&copy; {copyright} {author} all rights reserved.</p>
        </footer>
    );
}

Footer.defaultProps = {
    author: 'Brayden',
    copyright: getYear()
}

export default Footer;