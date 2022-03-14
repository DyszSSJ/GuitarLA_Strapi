import Layout from "../components/Layout";
import ListadoBlogs from "../components/ListadoBlogs";

const Blog = ({ entradas }) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
  console.log(url)

  return (
    <Layout paginas="Blog">
      <main className="contenedor">
        <ListadoBlogs
          entradas={entradas}
        />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props: {
      entradas
    },
  };
}

export default Blog;
