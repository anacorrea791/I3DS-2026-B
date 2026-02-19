import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Imagem do logo da plataforma de streaming Devflix, com fundo preto e letras vermelhas destacando o nome. Ideal para promover o serviço de streaming de filmes e séries, com destaque para conteúdo de alta qualidade."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <Rodape link={"https://github.com/anacorrea791"}>Ana clara</Rodape>

    </div>
  )
}

export default App;
