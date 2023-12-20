import { useSelector } from 'react-redux';
import { GeneralStateProps } from '../../../redux/marketReducer';
import MarketProductItem, {
  ProductItemProps,
} from '../ProductItem/Market-ProductItem';
import './Market-ProductList.css';

const MarketProductsList = () => {
  const { productList }: { productList: ProductItemProps[] } = useSelector(
    (state: { marketStore: GeneralStateProps }) => state.marketStore
  );

  return (
    <div className='MarketList'>
      <h2 className='MarketList-Title'>Товары</h2>
      <ul className='Market-ProductsList'>
        {productList.map((item) => (
          <MarketProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default MarketProductsList;
