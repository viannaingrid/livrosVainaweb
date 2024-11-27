import logoFacebook from '../../assets/logoFacebook.png';
import logoInstagram from '../../assets/logoInstagram.png';
import logoTwitter from '../../assets/logoTwitter.png';
import logoYoutube from '../../assets/logoYoutube.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import s from './footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoFacebook} alt="Logo do Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoTwitter} alt="Logo do Twitter" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoYoutube} alt="Logo do YouTube" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoLinkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoInstagram} alt="Logo do Instagram" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
