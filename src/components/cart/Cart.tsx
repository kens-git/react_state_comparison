import { useAtom, useAtomValue } from 'jotai';
import accountBalanceAtom from '../../store/account';
import cartAtom, { checkoutMessageAtom } from '../../store/cart';
import CartItem from './CartItem';
import cartTotalAtom, { cartDiscountedTotalAtom } from '../../store/cartTotal';
import favoritesAtom from '../../store/favorites';
import inventoryAtom from '../../store/inventory';
import TotalRow from './TotalRow';

const Cart = (props: any) => {
  const [accountBalance, setAccountBalance] = useAtom(accountBalanceAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const cartDiscountedTotal = useAtomValue(cartDiscountedTotalAtom);
  const [checkoutMessage, setCheckoutMessage] = useAtom(checkoutMessageAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [inventory, setInventory] = useAtom(inventoryAtom);

  const onCheckout = () => {
    if (accountBalance >= cartDiscountedTotal) {
      setAccountBalance(accountBalance - cartDiscountedTotal);
      const updatedFavorites = favorites;
      const updatedInventory = inventory;
      cart.forEach((amount, key) => {
        updatedFavorites.delete(key);
        const inventoryItem = updatedInventory.get(key);
        updatedInventory.set(key, {
          ...inventoryItem,
          inventory: inventoryItem!.inventory - cart.get(key),
        });
      });
      setInventory(new Map(updatedInventory));
      setFavorites(new Map(updatedFavorites));
      setCart(new Map());
      setCheckoutMessage('Payment successful. Expect delivery in 99999+ days.');
      return;
    }
    setCheckoutMessage('Not enough funds.');
  };

  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Cart</h1>
      {[...cart].map((item) => {
        return <CartItem key={item[0]} product_id={item[0]} />;
      })}
      <TotalRow onCheckout={onCheckout} />
      {checkoutMessage && (
        <span className="text-center">{checkoutMessage}</span>
      )}
    </div>
  );
};

export default Cart;
