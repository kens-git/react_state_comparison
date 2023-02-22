import { useAtomValue } from 'jotai';
import cartTotalAtom, {
  cartDiscountedTotalAtom,
  getDiscount,
} from '../../store/cartTotal';

const TotalRow = (props: any) => {
  const cartTotal = useAtomValue(cartTotalAtom);
  const cartDiscountedTotal = useAtomValue(cartDiscountedTotalAtom);

  return (
    <div
      className={
        props.className +
        ' flex items-center justify-between p-item rounded-item bg-list-item dark:bg-list-item-dark'
      }
    >
      <span>
        Total:{' '}
        {cartDiscountedTotal !== cartTotal && (
          <>
            <span className="line-through">${cartTotal.toFixed(2)}</span>
            <span> (-{getDiscount(cartTotal) * 100}%)</span>
          </>
        )}
        {cartDiscountedTotal !== cartTotal && ' '}$
        {cartDiscountedTotal.toFixed(2)}
      </span>
      <button className="p-button rounded-button text-lg bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark">
        Checkout
      </button>
    </div>
  );
};

export default TotalRow;
