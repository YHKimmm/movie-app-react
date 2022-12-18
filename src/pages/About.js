import styles from "./About.module.css";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";


function About() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.about__page}>
                <h1>Welcome to MegaBox!</h1>
                <div className={styles.inform}>
                    <section className={styles.about__project}>
                        <h3>About the Project</h3>
                        <p>MegaBox is a Movie Database listing the movies based on popularity, top rated, recently released, and upcoming. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
                        <p style={{ 'fontStyle': 'italic', 'textDecoration': 'underline' }}>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                    </section>
                    <section className={styles.about__publisher}>
                        <h3>Meet the publisher</h3>
                        <p>MegaBox is a React JS project proudly created by Brayden Kim. I am an ambitious web development team who love coding, designing best user experience, and challenging! </p>
                    </section>
                </div>
                <div className={styles.tmdb}>
                    <img src={`${imageFolderPath}tmdb.svg`} alt="The Movie Database (TMDB)" width="130" height="94" />
                </div>
            </main>

        </div>
    );
}

export default About;