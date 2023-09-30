import { Link } from 'react-router-dom';
import './style.css';

function Loja() {
  return (
    <div id="loja-container">
      <Link to="/produtos/playstation" className="loja-link">PlayStation</Link>
      <Link to="/produtos/xbox" className="loja-link">Xbox</Link>
      <Link to="/produtos/atari" className="loja-link">Atari</Link>
      <Link to="/produtos/supernintendo" className="loja-link">Super Nintendo</Link>
    </div>
  );
}

export default Loja;
