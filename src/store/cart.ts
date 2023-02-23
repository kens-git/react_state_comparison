import { atom } from 'jotai';

const cartAtom = atom(new Map<number, number>());

export const checkoutMessageAtom = atom('');

export default cartAtom;
