import style from './Carrinho.module.css'

const Carrinho = (props) => {
  const soma = props.cart.reduce((total, jogo) => {
    return total + jogo.price;
  }, 0);

  return (
    <div className="cart">
      <h3>Carrinho</h3>

      {props.cart.map((jogo) => {
        return (
          <div key={jogo.id} className="item-cart">
            <img src={jogo.image} alt={jogo.title} />

            <div className="info-cart">
              <p>{jogo.title}</p>
              <p>R$ {jogo.price.toFixed(2)}</p>
            </div>
          </div>
        );
      })}

      <h2>Total: R$ {soma.toFixed(2)}</h2>

      <button className="finalizar">Finalizar compra</button>
    </div>
  );
};

export default Carrinho;

