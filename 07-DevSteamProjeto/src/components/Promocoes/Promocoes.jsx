import style from "./Promocoes.module.css"

const Promocoes = (props) => {
  const precoAntigo = 109.90;

  return (
    <div className="promo-card">
      <img src={props.game.image} alt={props.game.title} />

      <h3>{props.game.title}</h3>

      <p className="preco-antigo">R$ {precoAntigo.toFixed(2)}</p>
      <p className="preco-atual">R$ {props.game.price.toFixed(2)}</p>
      <span className="desconto"> -%50 </span>
     

      <button onClick={() => props.addToCart(props.game)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Promocoes;


