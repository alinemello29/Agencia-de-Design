import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Banner from "@/components/Banner";
import Exeperiencia from "@/components/Experiencia";
import Rodape from "@/components/Rodape";
import { useState } from "react";

export default function Home() {
  const [tema, setTema] = useState(false)

  function mudarTema(){
    setTema(!tema)
  }

  return (
    <>
      <Head>
        <title>M - Agência Digital - Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</title>
        <meta name="description" content="M - Agência Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${tema ? 'dark-mode' : 'light-mode'}`}>
        <Topo darkTheme={tema} setState={mudarTema}/>
        <Banner />
        <Exeperiencia darkTheme={tema}/>
        <Rodape darkTheme={tema}/>
      </main>
    </>
  );
}
