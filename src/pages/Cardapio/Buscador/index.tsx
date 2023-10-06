import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string
  placeholder?: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, placeholder, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        placeholder={placeholder}
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
