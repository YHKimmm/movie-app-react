import styles from "./About.module.css";

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";


function About() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.about__page}>
                <h1>Welcome to MVDB!</h1>
                <div className={styles.inform}>
                    <section className={styles.about__project}>
                        <h3>About the Project</h3>
                        <p>MVDB is a Movie Database listing the movies based on popularity, rating, and release date. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
                        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                    </section>
                    <section className={styles.about__publisher}>
                        <h3>Meet the publisher</h3>
                        <p>MVDB is a React JS project proudly created by Zahra, Moon, and Kay. We are an ambitious web development team who love coding, designing best user experience, and challenging! </p>
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