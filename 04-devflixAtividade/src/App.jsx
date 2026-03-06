import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/logo.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import { useTranslation } from "react-i18next";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // TRADUÇÃO
  const { t, i18n } = useTranslation();

  // TEMA (salvo no navegador)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ESTADOS DO MODAL
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  // BUSCAR FILMES
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  // BUSCA INICIAL
  useEffect(() => {
    (async () => {
      await searchMovies("tinker bell");
    })();
  }, []);

  // APLICAR TEMA NO BODY
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ABRIR MODAL
  const openModal = (movieID) => {
    setSelectedMovie(movieID);
    setShowModal(true);
  };

  // FECHAR MODAL
  const closeModal = () => {
    setShowModal(false);
  };

  // TROCAR IDIOMA
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // TROCAR TEMA
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  

  return (
    <div id="App">

      <img
        id="Logo"
        src={logo}
        alt="Imagem do logo da plataforma de streaming Devflix, com fundo preto e letras vermelhas destacando o nome."
        style={{ width: "480px", height: "auto" }}
      />

      {/* BOTÕES DE CONTROLE */}
      <div className="controls">

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button onClick={() => changeLanguage("pt")}>
          🇧🇷 PT
        </button>

        <button onClick={() => changeLanguage("en")}>
          🇺🇸 EN
        </button>

      </div>

      {/* BUSCA */}
      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={t("searchPlaceholder")}
        />

        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt={t("searchButton")}
        />
      </div>

      {/* LISTA DE FILMES */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              {...movie}
              apiUrl={apiUrl}
              click={() => openModal(movie.imdbID)}
            />
          ))}
        </div>
      ) : (
        <h2 className="empty">
          😔 {t("movieNotFound")}
        </h2>
      )}

      {/* MODAL DE DESCRIÇÃO */}
      {showModal && (
        <MovieDescription
          apiUrl={apiUrl}
          movieID={selectedMovie}
          click={closeModal}
        />
      )}

      {/* RODAPÉ */}
      <Rodape link={"https://github.com/anacorrea791"}>
        Ana clara
      </Rodape>

    </div>
  );
};

export default App;