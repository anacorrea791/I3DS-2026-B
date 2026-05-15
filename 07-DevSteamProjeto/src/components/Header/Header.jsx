
import logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <div className="header">

      <div className="logo">
        <img src={logo} alt="logo" />

        <h1>DevSteam</h1>
      </div>

      <input
        type="text"
        placeholder="Buscar"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <button onClick={props.toggleCart}>
        🛒
      </button>

    </div>
  );
};

export default Header;
