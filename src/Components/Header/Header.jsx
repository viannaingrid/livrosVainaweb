import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../Pages/Inicio/Inicio.jsx';
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados.jsx';
import QueroDoar from '../../Pages/QueroDoar/QueroDoar.jsx';
import logoLivro from '../../assets/logoLivro.png';
import logoPesquisa from '../../assets/logoPesquisa.png';
import s from './header.module.scss';

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          <img
            src={logoLivro}
            alt="imagem de ilustração um livro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.linkHeader} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.linkHeader} to="/LivrosDoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.linkHeader} to="/QueroDoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img
              src={logoPesquisa}
              alt="Icone de pesquisa (lupa) com a cor branca"
            />
          </button>
        </section>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
