import { PRODUCT1 } from '../../test_data/data';
import CartItem from './CartItem';
import TotalRow from './TotalRow';

const Cart = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' flex flex-col gap-default p-section rounded-section bg-section dark:bg-section-dark'
      }
    >
      <h1 className="text-xl">Cart</h1>
      <CartItem product={PRODUCT1} amount={2} />
      <TotalRow />
    </div>
  );
};

export default Cart;
