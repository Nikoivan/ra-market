import MarketCreateForm from './CreateForm/Market-CreateForm';
import MarketProductsList from './ProductsList/Market-ProductsList';

export default function Market() {
  return (
    <div className='Market'>
      <header className='Market-Header'>
        <h1 className='Market-Title'>Market </h1>
      </header>
      <main className='Market-Main'>
        <MarketCreateForm />
        <MarketProductsList />
      </main>
    </div>
  );
}
