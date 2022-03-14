import Guitarras from "./Guitarras"
import styles from '../styles/Listado.module.css'

const Listado = ({guitarras}) => {
  return (
    <div className={styles.listado}>
        {guitarras.map( guitarra => (
            <Guitarras
                key={guitarra.url}
                guitarra={guitarra}
            />
        ))}
    </div>
  )
}

export default Listado
