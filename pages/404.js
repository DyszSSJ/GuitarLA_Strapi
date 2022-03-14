import Link from "next/link"
import styles from '../styles/404.module.css'

const NoEncontrado = () => {
  return (
     <div className={styles.No_encontrado}>
     <h1 className="heading">Pagina no encontrada</h1>
      <Link href='/'>
        Volver al Inicio
      </Link>
     </div>
  )
}

export default NoEncontrado
