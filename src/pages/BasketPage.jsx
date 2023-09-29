import { useSelector } from "react-redux";

export const BasketPage = () => {
  const basketProducts = useSelector((state) => state.products);

  return (
    <div>
      {basketProducts.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.images[0]} alt={product.id} />
          <div className="productInfo">
            <p className="productName">{product.brand}</p>
            <p>{product.rating}</p>
            <span>{product.price}$ </span>
          </div>
        </div>
      ))}
    </div>
  );
};
