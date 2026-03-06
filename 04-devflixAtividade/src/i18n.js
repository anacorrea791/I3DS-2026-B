import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      // Busca
      searchPlaceholder: "Pesquise por filmes e séries...",
      searchButton: "Botão de pesquisa",
      movieNotFound: "Filme não encontrado",

      // Botões de controle
      darkMode: "Escuro",
      lightMode: "Claro",

      // Detalhes do filme
      watch: "Assistir",
      rating: "Avaliação",
      duration: "Duração",
      release: "Lançamento",
      actors: "Elenco",
      genre: "Gênero",
      plot: "Sinopse",

      // Rodapé
      madeWith: "Feito com",
      by: "por",

      // Alt texts
      logoAlt:
        "Imagem do logo da plataforma de streaming Devflix, com fundo preto e letras vermelhas destacando o nome.",
    },
  },
  en: {
    translation: {
      // Search
      searchPlaceholder: "Search for movies and series...",
      searchButton: "Search button",
      movieNotFound: "Movie not found",

      // Control buttons
      darkMode: "Dark",
      lightMode: "Light",

      // Movie details
      watch: "Watch",
      rating: "Rating",
      duration: "Duration",
      release: "Release",
      actors: "Actors",
      genre: "Genre",
      plot: "Plot",

      // Footer
      madeWith: "Made with",
      by: "by",

      // Alt texts
      logoAlt:
        "Image of the Devflix streaming platform logo, with a black background and red letters highlighting the name.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma padrão sempre pt-BR
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
