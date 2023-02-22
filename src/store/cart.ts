import { atom } from 'jotai';

const cartAtom = atom(new Map<number, number>());

export default cartAtom;
