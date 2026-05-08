import style from "./Header.module.css"

const Header = (props) => {
  return (
    <header className="header">
      <h1>DevSteam</h1>

      <input
        type="text"
        placeholder="Buscar"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <button onClick={props.toggleCart}>🛒</button>
    </header>
  );
};

export default Header
