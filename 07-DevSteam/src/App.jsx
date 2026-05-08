import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Promocoes from "./components/Promocoes/Promocoes";
import GameRow from "./components/GameRow/GameRow";
import Carrinho from "./components/Carrinho/Carrinho";

import img01 from "./assets/img01.png";
import img02 from "./assets/img02.png";
import img03 from "./assets/img03.png";
import img04 from "./assets/img04.png";

const promocoes = [
  {
    id: 1,
    title: "League of Legends",
    price: 99.90,
    discount: "-50%",
    image: img01
  },
  {
    id: 2,
    title: "Dota 2",
    price: 99.90,
    discount: "-50%",
    image: img02
  },
  {
    id: 3,
    title: "Valorant",
    price: 99.90,
    discount: "-50%",
    image: img03
  }
];

const jogos = [
  {
    id: 4,
    title: "Counter Strike",
    price: 99.90,
    image: img04
  },
  {
    id: 5,
    title: "Counter Strike",
    price: 99.90,
    image: img04
  },
  {
    id: 6,
    title: "Counter Strike",
    price: 99.90,
    image: img04
  },
  {
    id: 7,
    title: "Counter Strike",
    price: 99.90,
    image: img04
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (game) => {
    setCart((atual) => [...atual, game]);
  };

  const jogosPromocao = promocoes.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  const outrosJogos = jogos.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
        toggleCart={() => setShowCart(!showCart)}
      />

      <h2>PROMOÇÕES</h2>

      <div className="promo-list">
        {jogosPromocao.map((game) => (
          <Promocoes
            key={game.id}
            game={game}
            addToCart={addToCart}
          />
        ))}
      </div>

      <h2>OUTROS JOGOS</h2>

      <div>
        {outrosJogos.map((game) => (
          <GameRow
            key={game.id}
            game={game}
            addToCart={addToCart}
          />
        ))}
      </div>

      {showCart && <Carrinho cart={cart} />}
    </div>
  );
}

export default App;