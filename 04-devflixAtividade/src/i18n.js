import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({

resources:{

en:{
translation:{
searchPlaceholder:"Search movies and series...",
searchButton:"Search button",
movieNotFound:"Movie not found"
}
},

pt:{
translation:{
searchPlaceholder:"Pesquise por filmes e séries...",
searchButton:"Botão de pesquisa",
movieNotFound:"Filme não encontrado"
}
}

},

lng:"pt",
fallbackLng:"pt",

interpolation:{
escapeValue:false
}

});

export default i18n;