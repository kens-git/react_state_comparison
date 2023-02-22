import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import cartAtom from '../../store/cart';
import favoritesAtom from '../../store/favorites';
import inventoryAtom from '../../store/inventory';
import Product from '../../types/Product';
import ProductDisplay from './ProductDisplay';

const AvailableProducts = (props: any) => {
  const [cart, setCart] = useAtom(cartAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const inventory = useAtomValue(inventoryAtom);

  const onProductAddedToCart = (product_id: number, amount: number) => {
    const currentCart = cart;
    const amountInCart = cart.get(product_id) || 0;
    amount = Math.min(
      inventory.get(product_id).inventory,
      (amount as number) + amountInCart
    );
    currentCart.set(product_id, amount);
    setCart(new Map(currentCart));
  };

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
      {[...inventory].map((product) => {
        return (
          <ProductDisplay
            key={product[0]}
            product={product[1]}
            onAddToFavorites={onProductFavorited}
            onAddToCart={onProductAddedToCart}
            isFavorited={favorites.has(product[0])}
          />
        );
      })}
    </div>
  );
};

export default AvailableProducts;
