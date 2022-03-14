import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarras.module.css";

const Guitarras = ({ guitarra }) => {
  const { descripcion, precio, imagen, nombre, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        layout="responsive"
        width={230}
        height={510}
        src={imagen.url}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.producto}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarras;
