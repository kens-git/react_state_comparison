import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent, useRef } from 'react';
import cartAtom from '../../store/cart';
import cartTotalAtom from '../../store/cartTotal';
import inventoryAtom from '../../store/inventory';
import Product from '../../types/Product';

interface CartItemProps {
  product_id: number;
}

const CartItem = (props: CartItemProps) => {
  const amountInput = useRef<HTMLInputElement>();
  const [cart, setCart] = useAtom(cartAtom);
  const inventory = useAtomValue(inventoryAtom);

  const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const currentCart = cart;
    currentCart.set(props.product_id, event.target.value);
    setCart(new Map(currentCart));
  };

  const onRemove = () => {
    const currentCart = cart;
    currentCart.delete(props.product_id);
    setCart(new Map(currentCart));
  };

  return (
    <div className="flex justify-between p-item rounded-item bg-list-item dark:bg-list-item-dark">
      <div className="flex shrink gap-input">
        <span>{inventory.get(props.product_id).name}</span>
        <input
          onChange={onAmountChange}
          className="w-input"
          type="number"
          step={1}
          min={1}
          max={inventory.get(props.product_id).inventory}
          value={cart.get(props.product_id)}
        />
        <button
          onClick={onRemove}
          className="p-button text-sm rounded-button bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark"
        >
          Remove
        </button>
      </div>
      <span>
        ${inventory.get(props.product_id).price * cart.get(props.product_id)}
      </span>
    </div>
  );
};

export default CartItem;
