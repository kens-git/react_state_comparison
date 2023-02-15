import Product from '../../types/Product';

interface CartItemProps {
  product: Product;
  amount: number;
}

const CartItem = (props: CartItemProps) => {
  return (
    <div className="flex justify-between p-item rounded-item bg-list-item dark:bg-list-item-dark">
      <div className="flex shrink gap-input">
        <span>{props.product.name}</span>
        <input
          className="w-input"
          type="number"
          step={1}
          min={1}
          max={10000}
          defaultValue={props.amount}
        />
        <button className="p-button text-sm rounded-button bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark">
          Remove
        </button>
      </div>
      <span>${props.product.price * props.amount}</span>
    </div>
  );
};

export default CartItem;
