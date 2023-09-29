import axios from 'axios';
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../main'; // Изменен путь к импорту


export const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://dummyjson.com/products?limit=10&skip=10')
    .then((resp) => setProducts(resp.data.products))
    console.log(products)
  }, []);

  const buyProduct = (product) => {
    dispatch(
      getProduct(product)
    );
  };

  return (
    <>
      <div className='productsBlock'>
        {products.map(product => (
          <div className='product' key={product.id}>
            <img src={product.images[0]} alt={product.id} />
            <div className='productInfo'>
              <p className='productName'>{product.brand}</p>
              <p>{product.rating}</p>
              <span>{product.price}$ </span>
              <button onClick={() => buyProduct(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
