import Logo from "../../../public/assets/logo.png";
import iconeFacebook from "../../../public/assets/facebook.png";
import iconeTwitter from "../../../public/assets/twitter.png";
import iconeLinkedin from "../../../public/assets/linkedin.png";
import iconeDribble from "../../../public/assets/dribble.png";
import iconeBehance from "../../../public/assets/behance.png";
import iconeGooglePlus from "../../../public/assets/google-plus.png";
import Image from "next/image";
import styles from "./Rodape.module.css";

const Rodape = (props) => {
  const ano = new Date().getFullYear();

  return (
    <footer
      className={`${styles.rodape} ${
        props.darkTheme ? styles.rodape_dark : styles.rodape_light
      }`}
    >
      <Image src={Logo} alt="logomarca" />
      <p className={styles.paragrafo}>
        Ajudamos a criar uma personalidade digital construindo sua marca no
        ambiente online utilizando estratégias, ferramentas e tecnologias
        personalizadas.
      </p>
      <div className={styles.iconesRodape}>
        <Image src={iconeFacebook} alt="facebook" />
        <Image src={iconeTwitter} alt="twitter" />
        <Image src={iconeLinkedin} alt="linkedin" />
        <Image src={iconeDribble} alt="dribble" />
        <Image src={iconeBehance} alt="behance" />
        <Image src={iconeGooglePlus} alt="google plus" />
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright {ano} &copy; <span>Desenvolvido por Fabinho Flauzino.</span>
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
