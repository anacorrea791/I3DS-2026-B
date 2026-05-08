import style from "./GameRow.module.css";

const GameRow = (props) => {
  return (
    <div className="game-row">
      <img src={props.game.image} alt={props.game.title} />

      <div>
        <h3>{props.game.title}</h3>
        <p>Ação, Estratégia, Multiplayer</p>
      </div>

      <h2>R$ {props.game.price}</h2>

      <button onClick={() => props.addToCart(props.game)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default GameRow;
