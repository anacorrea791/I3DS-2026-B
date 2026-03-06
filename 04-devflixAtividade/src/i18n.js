import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      searchPlaceholder: "Pesquise por filmes e séries...",
      searchButton: "Botão de pesquisa",
      movieNotFound: "Filme não encontrado",
      watch: "Assistir",
      rating: "Avaliação",
      duration: "Duração",
      release: "Lançamento",
      actors: "Elenco",
      genre: "Gênero",
      plot: "Sinopse",
    },
  },
  en: {
    translation: {
      searchPlaceholder: "Search for movies and series...",
      searchButton: "Search button",
      movieNotFound: "Movie not found",
      watch: "Watch",
      rating: "Rating",
      duration: "Duration",
      release: "Release",
      actors: "Actors",
      genre: "Genre",
      plot: "Plot",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma inicial
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
