import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";
import Image from "next/image";

const Nosotros = () => {
  return (
    <Layout paginas="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />

          <div>
            <p>
              Dolor officia ad id nostrud adipisicing officia cupidatat
              reprehenderit officia nulla consequat. Incididunt sit labore
              mollit dolor nulla id aliqua quis veniam officia nisi cillum.
              Proident nostrud veniam et ex tempor sunt magna. Dolor officia ad
              id nostrud adipisicing officia cupidatat reprehenderit officia
              nulla consequat. Incididunt sit labore mollit dolor nulla id
              aliqua quis
            </p>
            <p>
              Dolor officia ad id nostrud adipisicing officia cupidatat
              reprehenderit officia nulla consequat. Incididunt sit labore
              mollit dolor nulla id aliqua quis veniam officia nisi cillum.
              Proident nostrud veniam et ex tempor sunt magna. Dolor officia ad
              id nostrud adipisicing officia cupidatat reprehenderit officia
              nulla consequat. Incididunt sit labore mollit dolor nulla id
              aliqua quis veniam officia nisi cillum. Proident nostrud veniam et
              ex tempor sunt magna.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
