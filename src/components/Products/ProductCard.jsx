import './assets/Product.css';
export default function ProductCard({id, name, price, inStock}){

  const style = inStock ? "green" : "red";

  return (
    <article className="product">
      <h3><strong>{name.toUpperCase()}</strong></h3>
        <p>
          Price: <strong>{price}</strong><br></br>
          <em style={{color: style}}>{inStock ? "Available" : "Out of Stock"}</em>
        </p>
    </article>
  );
}
