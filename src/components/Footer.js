import { getYear } from "../utilities/getDates";
import styles from "./Footer.module.css";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function Footer({ copyright, author }) {
    return (
        <footer className={styles.footer}>
            <p><img src={`${imageFolderPath}logo.jpg`} alt='logo' className={styles.logo} /></p>
            <p>&copy; {copyright} {author} all rights reserved.</p>
        </footer>
    );
}

Footer.defaultProps = {
    author: 'Brayden',
    copyright: getYear()
}

export default Footer;