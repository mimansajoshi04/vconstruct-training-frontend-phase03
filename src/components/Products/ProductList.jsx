import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section>
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p>No products available</p>
      )}
    </section>
  );
}
