import { useAtom } from 'jotai';
import favoritesAtom from '../../store/favorites';
import INVENTORY from '../../test_data/data';
import Product from '../../types/Product';
import ProductDisplay from './ProductDisplay';

const AvailableProducts = (props: any) => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const onProductFavorited = (product: Product) => {
    if (!favorites.has(product.id)) {
      const updatedFavorites = favorites;
      updatedFavorites.set(product.id, product);
      setFavorites(new Map(updatedFavorites));
    }
  };

  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Available Products</h1>
      {INVENTORY.map((product: Product) => {
        return (
          <ProductDisplay
            product={product}
            onAddtoFavorites={onProductFavorited}
            isFavorited={favorites.has(product.id)}
          />
        );
      })}
    </div>
  );
};

export default AvailableProducts;
