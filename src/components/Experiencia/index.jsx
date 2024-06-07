import Card from "../Card";
import styles from "./Experiencia.module.css";

const Experiencia = ({ darkTheme }) => {
  return (
    <section
      className={`${styles.experiencia_container} ${
        darkTheme ? styles.dark : styles.light
      }`}
    >
      <div className={styles.conteiner_texto}>
        <h2>Experiências de Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className={`${styles.container_cards} ${styles.limitar_secao}`}>
        <Card
          darkTheme={darkTheme}
          data="JUNHO 2012 - 2016"
          titulo="Web Designer"
          empresa="Pied Piper StartUp."
          paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
        />

        <Card
          darkTheme={darkTheme}
          data="AGOSTO 2016 - 2019"
          titulo="Product Designer"
          empresa="E Corp."
          paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
        />
        <Card
          darkTheme={darkTheme}
          data="FEVEREIRO 2019 - 2021"
          titulo="Digital Consulting"
          empresa="Arasaka Inc."
          paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </section>
  );
};

export default Experiencia;
