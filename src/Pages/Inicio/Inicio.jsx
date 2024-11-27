import s from './inicio.module.scss';
import imagem1 from '../../assets/imagem1doacao.png';
import imagem2 from '../../assets/imagem2doacao.png';
import imagem3 from '../../assets/imagem3doacao.png';
import imagem4 from '../../assets/imagem4doacao.png';


export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>Venha fazer parte da maior rede de doação</h2>
      </section>
      <section>
        <section className={s.porqueDoar}>
          <h2>Porque devo doar?</h2>
          <section className={s.containerCards}>
            <section>
              <img
                src={imagem1}
                alt="Imagem ilustrando circulo social de 4 pessoas"
              />
              <p>Imagem ilustrando circulo social de 4 pessoas</p>
            </section>
            <section>
              <img src={imagem2} alt="Imagem ilustrando pessoa lendo" />
              <p>Imagem ilustrando circulo social de 4 pessoas</p>
            </section>
            <section>
              <img src={imagem3} alt="Imagem ilustrando pessoa lendo" />
              <p>Imagem ilustrando pessoa lendo</p>
            </section>
            <section>
              <img
                src={imagem4}
                alt="Imagem ilustrando balanca que representa igualdade"
              />
              <p>Imagem ilustrando balanca que representa igualdade</p>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
