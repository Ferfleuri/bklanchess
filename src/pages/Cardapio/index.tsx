import styles from "./Cardapio.module.scss";
import logo from "assets/logo.png";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="logo" />
        <div className={styles.menu__buscarFiltro}>
          <Buscador busca={busca} placeholder="Pesquisar" setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          </div>
        </div>
      </nav>
      <header className={styles.header}></header>
      <section className={styles.cardapio}></section>
    </main>
  );
}
