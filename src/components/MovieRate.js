import styles from './Movie.module.css';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

function MovieRate({ movieObj }) {
    return (
        <div className={styles.movie__rate}>
            {movieObj.vote_average === 0 ? (<img src={`${imageFolderPath}star.png`} alt="Star" className={styles.star} style={{ "opacity": 0.5 }} />
            ) : movieObj.vote_average <= 5 ? (<img src={`${imageFolderPath}star.png`} alt="Star" className={styles.star__yellow} id="star" />)
                : movieObj.vote_average <= 7 ? (<img src={`${imageFolderPath}star.png`} alt="Star" className={styles.star__green} id="star" />)
                    : (<img src={`${imageFolderPath}star.png`} alt="Star" className={styles.star} id="star" />)}

            {movieObj.vote_average === 0 ? (<p className={styles.star} >{Math.ceil(movieObj.vote_average * 10)}%</p>)
                : movieObj.vote_average <= 5 ? (<p className={styles.star__yellow}>{Math.ceil(movieObj.vote_average * 10)}%</p>)
                    : movieObj.vote_average <= 7 ? (<p className={styles.star__green}>{Math.ceil(movieObj.vote_average * 10)}%</p>)
                        : (<p>{Math.ceil(movieObj.vote_average * 10)}%</p>)}
        </div>
    );
}

export default MovieRate;