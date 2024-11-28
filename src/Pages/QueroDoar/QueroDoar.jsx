<<<<<<< HEAD
export default function QueroDoar() {
  return <h2>Eu sou o componente quero doar</h2>;
=======
import iconeLivros from '../../assets/iconeLivros.png';
import s from './queroDoar.module.scss';

export default function QueroDoar() {
  return (
    <section className={s.queroDoar}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form action="">
        <div>
          <img src={iconeLivros} alt="Icone de um livro" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Titulo" />
        <input type="text" name="" id="" placeholder="Categoria" />
        <input type="text" name="" id="" placeholder="Autor" />
        <input type="text" name="" id="" placeholder="Link da Imagem" />
        <input type="submit" value="Doar" className={s.buttonDoar} />
      </form>
    </section>
  );
>>>>>>> origin/master
}
