import AvailableProducts from './components/products/AvailableProducts';
import Cart from './components/cart/Cart';
import FavoriteProducts from './components/favorites/FavoriteProducts';
import ThemeButton from './components/theme/ThemeButton';
import UserBalance from './components/account/UserBalance';

const App = () => {
  return (
    <main className="w-screen h-max p-document bg-document dark:bg-document-dark flex flex-col gap-default">
      <ThemeButton />
      <h1 className="text-title py-default text-3xl text-txt-title dark:text-txt-title-dark">
        Best Deals™ online store!
      </h1>
      <UserBalance />
      <div className="flex gap-section">
        <AvailableProducts className="basis-2/6" />
        <FavoriteProducts className="basis-2/6" />
        <Cart className="basis-2/6" />
      </div>
    </main>
  );
};

export default App;
