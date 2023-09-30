import { Link } from 'react-router-dom';

function Home () {
  return (
    <div>
      <h1>Bem-vindo a página Home</h1>
      <span>Nossa primeira aplicação em REACT</span>
      <br/><br/>
      <Link to="/sobre">Sobre</Link>
      <br/><br/>
      <Link to="/contato">Contato</Link>
      <br/><br/>
      <Link to="/loja">Loja</Link>
    </div>
  )
}

export default Home;
