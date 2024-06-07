import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.card} ${
        props.darkTheme ? styles.card_dark : styles.card_light
      }`}
    >
      <p className={styles.primeiroParagrafo}>{props.data}</p>
      <h4>{props.titulo}</h4>
      <p className={styles.segundoParagrafo}>{props.empresa}</p>
      <p>{props.paragrafo}</p>
    </div>
  );
};

export default Card;
