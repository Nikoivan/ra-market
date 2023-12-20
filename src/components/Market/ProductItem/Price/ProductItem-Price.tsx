import './ProductItem-Price.css';

export type PriceProps = {
  price: number;
  discount?: number;
};

export default function ProductItemPrice({ price, discount }: PriceProps) {
  return (
    <div className='ProductItem-Price'>
      <span className='Price-Value_actual'>
        {discount ? price * ((100 - discount) / 100) : price}
      </span>
      {discount && (
        <span className='Price-Value_without_discount'>{price}</span>
      )}
    </div>
  );
}
