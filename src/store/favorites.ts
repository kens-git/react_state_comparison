import { atom } from 'jotai';
import Product from '../types/Product';
import { PRODUCT1 } from '../test_data/data';

const favoritesAtom = atom(new Map<number, Product>([[PRODUCT1.id, PRODUCT1]]));

export default favoritesAtom;
