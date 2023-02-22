import { useAtom, useAtomValue } from 'jotai';
import cartAtom from '../../store/cart';
import CartItem from './CartItem';
import inventoryAtom from '../../store/inventory';
import TotalRow from './TotalRow';

const Cart = (props: any) => {
  const [cart, setCart] = useAtom(cartAtom);
  const inventory = useAtomValue(inventoryAtom);

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
      <TotalRow />
    </div>
  );
};

export default Cart;
