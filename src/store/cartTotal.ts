import { atom } from 'jotai';
import cartAtom from './cart';
import inventoryAtom from './inventory';

export const getDiscount = (total: number) => {
  if (total <= 500) {
    return 0;
  }
  if (total <= 1000) {
    return 0.1;
  }
  if (total <= 5000) {
    return 0.2;
  }
  return 0.3;
};

const cartTotalAtom = atom((get) => {
  const cart = get(cartAtom);
  let total = 0;
  cart.forEach((value, key) => {
    const product = get(inventoryAtom).get(key);
    total += product!.price * value;
  });
  return total;
});

export const cartDiscountedTotalAtom = atom((get) => {
  const total = get(cartTotalAtom);
  const discount = getDiscount(total);
  if (discount === 0) {
    return total;
  }
  return total * (1 - discount);
});

export default cartTotalAtom;
