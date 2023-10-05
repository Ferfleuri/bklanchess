import styles from './filtros.module.scss';
import filtros from './filtros.json'

interface IOpcao {
  id: number ;
  label: string;
}

export default function Filtros() {
return (
  <div className={styles.filtro}>
      {filtros.map((opcao) => (
        <button className={styles.filtro__filtro} key={opcao.id} >
          {opcao.label}
        </button>

      ))}
  </div>
)

}
