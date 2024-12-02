import livroProtagonista from '../../assets/livroProtagonista.png';
import s from './livrosDoados.module.scss';

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoados}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
          <img src={livroProtagonista} alt="Livro Protagonista" />
          <div>
            <h3>O protagonista</h3>
            <p>Susane Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
