import styles from './Banner.module.css';
import ImagemBanner from '../../../public/assets/banner.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_imagem}></div>
      <div className={styles.banner_content}>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h1>Agência de Branding</h1>
        <span>e design digital</span>
      </div>
    </div>
  )
}

export default Banner;