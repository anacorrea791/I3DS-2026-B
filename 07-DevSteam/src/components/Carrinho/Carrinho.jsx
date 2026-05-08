import style from './Carrinho.module.css'

const Carrinho = (props) => {
  const soma = props.cart.reduce((total, jogo) => {
    return total + jogo.price;
  }, 0);

  return (
    <div className="cart">
      <h3>Carrinho</h3>

     {props.cart.map((jogo) => {
        const desconto = jogo.price / 2;

        return (
          <div key={jogo.id} className="item-cart">
            <img src={jogo.image} alt={jogo.title} />

            <div className="info-cart">
              <p>Nome - {jogo.title}</p>
              <p>Preço - R$ {jogo.price.toFixed(2)}</p>
              <p>Desconto - R$ {desconto.toFixed(2)}</p>
            </div>
          </div>
        );
      })}

      <h2>Total: R$ {soma.toFixed(2)}</h2>
    </div>
  );
}; 


export default Carrinho;
