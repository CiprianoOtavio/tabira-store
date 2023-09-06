import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "../../styles/Product.module.css";
import { Product } from "../../types/Product";
import { GetStaticPaths, GetStaticProps } from "next";
import mockItems from "../../public/mock.data";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockItems.map((item) => {
    return {
      params: { itemId: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: number = Number.parseInt(context.params?.itemId as string);

  // Verifique se o índice 'id' está dentro do intervalo válido
  if (id >= 1 && id <= mockItems.length) {
    return {
      props: { item: mockItems[id - 1] },
    };
  } else {
    // Se o índice estiver fora do intervalo válido, retorne um valor nulo
    return {
      notFound: true,
    };
  }
};

interface ProductProps {
  item: Product;
}

export default function ProductPage({ item }: ProductProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <title>{`${item.name} at sale`}</title>
      <div className={styles.product}>
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </>
  );
}
