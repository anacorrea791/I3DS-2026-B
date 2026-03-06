import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, [props.apiUrl, props.movieID]);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt={movieDesc.Title} />

          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="logo" />
              {movieDesc.Type}

              <h1>{movieDesc.Title}</h1>

              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
                rel="noreferrer"
              >
                ▶️ {t("watch")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            {t("rating")}: {movieDesc.imdbRating} | {t("duration")}:{" "}
            {movieDesc.Runtime} | {t("release")}: {movieDesc.Released}
          </div>

          <div className={styles.containerFlex}>
            <p>
              {t("actors")}: {movieDesc.Actors}
            </p>
            <p>
              {t("genre")}: {movieDesc.Genre}
            </p>
          </div>
        </div>

        <div className={styles.desc}>
          <p>
            {t("plot")}: {movieDesc.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
