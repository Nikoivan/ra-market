import ProductItemDiscount from './Discount/ProductItem-Discount';
import ProductItemPrice from './Price/ProductItem-Price';
import './Market-ProductItem.css';

export type ProductItemProps = {
  title: string;
  price: number;
  image: string;
  article: string;
  discount?: number;
  id: string;
};

const MarketProductItem = ({
  title,
  price,
  image,
  article,
  discount,
}: ProductItemProps) => {
  return (
    <li className='Market-ProductItem'>
      <img src={image} alt={title} className='ProductItem-Image' />

      {discount && <ProductItemDiscount discount={discount} />}
      <ProductItemPrice price={price} discount={discount} />
      <h3 className='ProductItem-Title'>{title}</h3>
      <span className='ProductItem-Article'>{article}</span>
    </li>
  );
};

export default MarketProductItem;
