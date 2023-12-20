import './ProductItem-Discount.css';

export default function ProductItemDiscount({
  discount,
}: {
  discount: number;
}) {
  return (
    <div className='ProductItem-Discount'>
      <span className='Discount-Value'>{discount}</span>
    </div>
  );
}
