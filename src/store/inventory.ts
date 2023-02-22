import { atom } from 'jotai';
import Product from '../types/Product';
import INVENTORY from '../test_data/data';

const inventoryAtom = atom(
  new Map<number, Product>(INVENTORY.map((product) => [product.id, product]))
);

export default inventoryAtom;
