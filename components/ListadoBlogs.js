import Entradas from "../components/Entradas";
import styles from "../styles/Blog.module.css";

const ListadoBlogs = ({entradas}) => {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entradas.map((entrada) => (
          <Entradas key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </div>
  );
};

export default ListadoBlogs;
